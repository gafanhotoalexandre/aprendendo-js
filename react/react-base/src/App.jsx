import { Header } from './components/Header';
import { Routes } from './routes';

import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <Header />

      <Routes />
      <GlobalStyles />
    </>
  );
}
