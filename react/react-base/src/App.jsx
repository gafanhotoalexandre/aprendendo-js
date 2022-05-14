import { Login } from './pages/Login';
import { Header } from './components/Header';

import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <Header />

      <h1>Hello World</h1>
      <Login />
      <GlobalStyles />
    </>
  );
}
