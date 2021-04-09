import "./App.css";
import Array from "./Array";
import BtnContainer from "./BtnContainer";
import { useProductsContext } from "./Context";
function App() {
  const { number } = useProductsContext();
  let n = number;
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
