import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider  } from '@mantine/core';
import { CharacterAnimationsProvider } from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      globalStyles: (_theme) => ({
        body: {
          width: '100vv',
          height: '100vh'
        },
        '#root': {
          width: '100%',
          height: '100%',
        }
      }),
      
      
    }}>
      <CharacterAnimationsProvider>

      <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
