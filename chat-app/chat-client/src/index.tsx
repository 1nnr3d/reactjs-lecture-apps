import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from './components/ChatComponents/Chat';

import { MessageProvider } from './context/MessageContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<MessageProvider><Chat /></MessageProvider>} />
    </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);