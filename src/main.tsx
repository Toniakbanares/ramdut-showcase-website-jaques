import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/hooks/useAuth'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="ramdut-theme">
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);
