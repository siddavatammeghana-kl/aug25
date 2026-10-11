const name = "Dinesh";

function App() {
  return (
    <>
      <div>
        <header>
          <h1>jsx is HTML like syntax inside javascript</h1>
        </header>
      </div>

      <div>
        <p>JSX is syntactic sugar</p>

        <div>
          <br />
          <h1>Hello</h1>
          <p>world</p>
        </div>

        <div className="hero">HI</div>

        <div>
          <h1>Heartly Welcome{name}</h1>
        </div>
      </div>
    </>
  );
}

export default App;