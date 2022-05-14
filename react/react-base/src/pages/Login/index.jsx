import { Title, Paragraph } from './styled';

import { Container } from '../../styles/GlobalStyles';

export function Login() {
  return (
    <Container>
      <Title isAqua>
        Login
        <small>My small text</small>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Paragraph>

      <button type="button">Clique aqui</button>
    </Container>
  );
}
