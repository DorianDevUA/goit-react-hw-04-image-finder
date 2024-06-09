import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    padding: ${props => props.theme.spacing(3)};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default GlobalStyle;
