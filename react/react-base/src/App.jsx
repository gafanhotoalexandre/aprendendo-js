import { Router } from 'react-router-dom';

import { history } from './services/history';
import { Header } from './components/Header';
import { Routes } from './routes';

import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}
