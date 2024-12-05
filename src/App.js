import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";

import DefaultLayout from "./layouts/DefaultLayout";
import { AuthModalProvider, AuthProvider, LoadingProvider } from "./context";
import 'tippy.js/animations/shift-away.css';
import { ModalProvider } from './context/ModalContext';
import ScrollToTop from './hooks/ScrollToTop';


function App() {



  return (
    <>
      <ModalProvider>
      <LoadingProvider>
        <div className="app">
          <BrowserRouter>
            <AuthModalProvider>
                <ScrollToTop />
              <AuthProvider>
                <Routes>
                  {publicRoute.map((route, index) => {
                    const Layout = route.layout ? route.layout : DefaultLayout
                    const Page = route.element
                    return (
                      <Route key={index} path={route.path} element={
                        <Layout>
                          <Page />
                        </Layout>}
                      />
                    )
                  })}
                </Routes>
              </AuthProvider>
            </AuthModalProvider>
          </BrowserRouter>
        </div>
      </LoadingProvider>
      </ModalProvider>
    </>
  )
}

export default App;