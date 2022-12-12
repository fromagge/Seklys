import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #root': {
        width: '100vw',
        height: '100vh'
      }
    },
  },
});

root.render(
<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>
);
