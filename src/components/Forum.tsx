import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Plus, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
}

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles: Profile;
  comments: Comment[];
}

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles: Profile;
}

export const Forum = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newComment, setNewComment] = useState<{ [key: string]: string }>({});
  const [showNewPost, setShowNewPost] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      const postsWithProfiles = await Promise.all(
        (postsData || []).map(async (post) => {
          // Get profile for post author
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', post.user_id)
            .single();

          // Get comments for this post
          const { data: commentsData } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', post.id)
            .order('created_at', { ascending: true });

          // Get profiles for comment authors
          const commentsWithProfiles = await Promise.all(
            (commentsData || []).map(async (comment) => {
              const { data: commentProfile } = await supabase
                .from('profiles')
                .select('*')
                .eq('user_id', comment.user_id)
                .single();

              return {
                ...comment,
                profiles: commentProfile || {
                  id: '',
                  user_id: comment.user_id,
                  display_name: 'Usuário',
                  avatar_url: null
                }
              };
            })
          );

          return {
            ...post,
            profiles: profile || {
              id: '',
              user_id: post.user_id,
              display_name: 'Usuário',
              avatar_url: null
            },
            comments: commentsWithProfiles
          };
        })
      );

      setPosts(postsWithProfiles);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar posts.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    if (!user || !newPostTitle.trim() || !newPostContent.trim()) return;

    try {
      const { error } = await supabase
        .from('posts')
        .insert({
          title: newPostTitle,
          content: newPostContent,
          user_id: user.id
        });

      if (error) throw error;

      setNewPostTitle('');
      setNewPostContent('');
      setShowNewPost(false);
      fetchPosts();
      
      toast({
        title: "Sucesso",
        description: "Post criado com sucesso!",
      });
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Erro",
        description: "Erro ao criar post.",
        variant: "destructive",
      });
    }
  };

  const createComment = async (postId: string) => {
    if (!user || !newComment[postId]?.trim()) return;

    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          content: newComment[postId],
          post_id: postId,
          user_id: user.id
        });

      if (error) throw error;

      setNewComment({ ...newComment, [postId]: '' });
      fetchPosts();
      
      toast({
        title: "Sucesso",
        description: "Comentário adicionado!",
      });
    } catch (error) {
      console.error('Error creating comment:', error);
      toast({
        title: "Erro",
        description: "Erro ao criar comentário.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Fórum de Discussão</h2>
        {user && (
          <Button onClick={() => setShowNewPost(!showNewPost)} className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Post
          </Button>
        )}
      </div>

      {showNewPost && user && (
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Título do post"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <Textarea
              placeholder="Conteúdo do post"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={4}
            />
            <div className="flex gap-2">
              <Button onClick={createPost}>Publicar</Button>
              <Button variant="outline" onClick={() => setShowNewPost(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.profiles?.avatar_url || ''} />
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Por {post.profiles?.display_name || 'Usuário'} • {' '}
                    {new Date(post.created_at).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="whitespace-pre-wrap">{post.content}</p>
              
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-4 h-4" />
                  <span className="font-medium">
                    {post.comments?.length || 0} comentários
                  </span>
                </div>

                {post.comments?.map((comment) => (
                  <div key={comment.id} className="bg-muted rounded-lg p-3 mb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={comment.profiles?.avatar_url || ''} />
                        <AvatarFallback>
                          <User className="w-3 h-3" />
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {comment.profiles?.display_name || 'Usuário'}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(comment.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                ))}

                {user && (
                  <div className="flex gap-2 mt-4">
                    <Textarea
                      placeholder="Adicionar comentário..."
                      value={newComment[post.id] || ''}
                      onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                      rows={2}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => createComment(post.id)}
                      disabled={!newComment[post.id]?.trim()}
                    >
                      Comentar
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {posts.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Nenhum post ainda</h3>
              <p className="text-muted-foreground">
                {user 
                  ? "Seja o primeiro a criar um post!" 
                  : "Faça login para participar do fórum."
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};