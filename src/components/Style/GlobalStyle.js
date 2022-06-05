import createGlobalStyle from "styled-components";

export const GlobalStyle = createGlobalStyle`
button{
  font-family: ${(props) => props.theme.fontFamily};
}
`;
