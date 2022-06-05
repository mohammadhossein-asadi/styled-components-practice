import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton type="submit">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton varient="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as={"a"} href="https://google.com">
        Fancy Button
      </FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default App;
