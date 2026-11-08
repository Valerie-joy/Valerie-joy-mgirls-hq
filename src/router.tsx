import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { HomePage } from './pages/HomePage';
import { DirectoryPage } from './pages/DirectoryPage';
import { MemberPage } from './pages/MemberPage';
import { GetListedPage } from './pages/GetListedPage';
import { StudioPage } from './pages/StudioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SiteLayout />,
      errorElement: <SiteLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'directory', element: <DirectoryPage /> },
        { path: 'directory/:slug', element: <MemberPage /> },
        { path: 'get-listed', element: <GetListedPage /> },
        { path: 'studio', element: <StudioPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'policies/:slug', element: <PolicyPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
);
