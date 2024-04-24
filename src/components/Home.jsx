import { useState } from "react";

export function Home({ loggedInUser, onStartQuiz, onLogin, onLogOut }) {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h1>Home</h1>
      <main>
        {loggedInUser ? (
          <>
            <p>Logged in as {loggedInUser}</p>
            <button onClick={onLogOut}>Log out</button>
          </>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onLogin(username);
            }}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <button>Login</button>
          </form>
        )}
      </main>
      <button onClick={onStartQuiz}>Zum Quiz</button>
    </div>
  );
}
