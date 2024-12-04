// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/utils/apollo.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import App from '@/App.tsx'
import '@/index.css'
import { routes } from '@/route/index.tsx'
import Error404 from '@/containers/Error404/index.tsx'
import UserInfo from '@/components/UserInfo.tsx'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <UserInfo>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={route.title}
              />
            )
          })}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </UserInfo>
  </ApolloProvider>,
)
