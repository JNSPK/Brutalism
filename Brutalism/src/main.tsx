import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const articles = [
  {
    title: 'Brutalism x History',
    content: 'This is a test',
  },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App articles={articles} />
);
