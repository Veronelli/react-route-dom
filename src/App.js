import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { NotFoundPage } from "./NotFoundPage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { useAuth, AuthProvider, AuthRoute, NoShowOnAuth } from "./auth";
import { LogoutPage } from "./LogoutPage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Route>
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route
              path="/login"
              element={
                <NoShowOnAuth>
                  <LoginPage />
                </NoShowOnAuth>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
