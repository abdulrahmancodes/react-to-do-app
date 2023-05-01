import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn.jsx";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import "./assets/scss/main.scss";

function App() {
  const { isDarkModeEnabled } = useSelector((state) => state.toDo);

  useEffect(() => {
    const primaryColor = `--color-primary: ${
      isDarkModeEnabled ? "#fff" : "#000"
    } !important;`;
    const secondaryColor = ` --color-secondary: ${
      isDarkModeEnabled ? "#242535" : "#fff"
    } !important`;

    document.documentElement.setAttribute(
      "style",
      primaryColor + secondaryColor
    );
  }, [isDarkModeEnabled]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
