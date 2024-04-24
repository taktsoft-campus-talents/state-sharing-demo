export function Game({ loggedInUser, onGoHome }) {
  return (
    <div>
      <h1>Game</h1>
      <p>Logged in as {loggedInUser}</p>
      <button onClick={onGoHome}>Home</button>
    </div>
  );
}
