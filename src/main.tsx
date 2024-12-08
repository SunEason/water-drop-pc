// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/utils/apollo.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import App from '@/App.tsx'
import '@/index.css'
import { routes } from '@/route/index.tsx'
import UserInfo from '@/components/UserInfo.tsx'
import Login from '@/containers/Login'
import Layout from '@/containers/Layout'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <UserInfo>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<route.element />}
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
