import { Login } from './pages/Login';
import GlobalStyles, { Container } from './styles/GlobalStyles';

export function App() {
  return (
    <Container>
      <h1>Hello World</h1>
      <Login />
      <GlobalStyles />
      <button type="button">Clique aqui</button>
    </Container>
  );
}
