// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/utils/apollo.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import App from '@/App.tsx'
import '@/index.css'
import { routes } from '@/route/menus'
import UserInfo from '@/components/UserInfo.tsx'
import Login from '@/containers/Login'
import Layout from '@/containers/Layout'
import { ROUTE_COMPONENT } from './route'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <UserInfo>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {routes.map((route) => {
              const Component = ROUTE_COMPONENT[route.key]
              return (
                <Route
                  path={route.path}
                  element={<Component />}
                  key={route.path}
                />
              )
            })}
          </Route>
        </Routes>
      </UserInfo>
    </BrowserRouter>
  </ApolloProvider>,
)
