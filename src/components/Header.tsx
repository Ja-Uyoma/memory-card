export function Header() {
  return (
    <header className="flex justify-between">
      <div>
        <h1 className="text-4xl">Memory Card</h1>
        <p className="text-lg">
          Get points by clicking an image, but be sure to not click more than
          once!
        </p>
      </div>
      <div className="text-lg">
        <p>Score</p>
        <p>Best Score</p>
      </div>
    </header>
  );
}
