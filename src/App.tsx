import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { User } from "./components/user/User";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route
          path="/"
          element={
            <>
              <Header />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
