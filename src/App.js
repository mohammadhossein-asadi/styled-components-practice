import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button.styles";

function App() {
  return (
    <div className="App">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <AnimatedLogo src={logo} />
      <div>
        <br />
      </div>
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
