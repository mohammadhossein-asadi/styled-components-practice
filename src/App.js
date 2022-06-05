import "./App.css";
import StyledButton, { FancyButton } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton varient="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
