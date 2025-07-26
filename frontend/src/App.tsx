import { Opening } from './components/Opening';

// import { BrowserRouter } from 'react-router';

/**
 * Websocket logic: 
 * const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to server');
      ws.send('Hello from browser!');
    };

    ws.onmessage = (event) => {
      console.log('Received:', event.data);
    };

    ws.onclose = () => {
      console.log('Disconnected from server');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
 */

import './App.css'

function App() {
  return (
    <>
      <Opening />
    </>
  )
}

export default App
