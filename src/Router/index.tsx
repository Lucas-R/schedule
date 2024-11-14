import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Template } from '@/template'
import { Home } from '@/pages/home'
import { Services } from '@/pages/Sevices'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    handle: {
      crumb: 'Início',
    },
    children: [
      {
        path: '/hoje',
        element: <Home />,
        handle: {
          crumb: 'Hoje',
        },
      },
      {
        path: '/servicos',
        element: <Services />,
        handle: {
          crumb: 'Serviços',
        },
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
