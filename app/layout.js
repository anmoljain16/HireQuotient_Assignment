import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';



export const metadata = {
  title: "HireQuotient Assignment | Anmol Jain",
  description: "Application that displays the holdings table | Anmol Jain",

};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
            <AppRouterCacheProvider>
        {children}
              </AppRouterCacheProvider>
      </body>
      </html>
  );
}
