import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0; padding: 0;
    }
    html, body {
    height: 100%;    
    font-family: 'Myriad Pro', 'Mind', Courier, 'Courier New', monospace, ;
    -webkit-overflow-scrolling: touch;
    }
`;

export default GlobalStyles;
