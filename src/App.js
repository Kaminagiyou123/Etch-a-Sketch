import "./App.css";
import Array from "./Array";
import BtnContainer from "./BtnContainer";
function App() {
  let n = 20;
  const containerStyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(${n}, 1fr)`,
  };

  return (
    <div className='.game-container'>
      <h3>Etch a Sketch</h3>
      <div className='grid-container' style={containerStyle}>
        <Array n={n} />
      </div>
      <BtnContainer />
    </div>
  );
}

export default App;
