import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";
import { theme } from "./components/Theme/Theme";
import { GlobalStyle } from "./components/Style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
        <div>
          <br />
        </div>
        <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
