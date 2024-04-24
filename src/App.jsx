import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Game } from "./components/Game";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [loggedInUser, setLoggedInUser] = useState(null);

  function handleStartQuiz() {
    setCurrentPage("game");
  }

  function handleGoHome() {
    setCurrentPage("home");
  }

  function handleLogin(username) {
    setLoggedInUser(username);
  }

  return (
    <>
      {currentPage === "home" ? (
        <Home
          loggedInUser={loggedInUser}
          onStartQuiz={handleStartQuiz}
          onLogin={handleLogin}
          onLogOut={() => {
            setLoggedInUser(null);
          }}
        />
      ) : (
        <Game loggedInUser={loggedInUser} onGoHome={handleGoHome} />
      )}
    </>
  );
}

export default App;
