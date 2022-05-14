import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ isAqua }) => (isAqua ? 'white' : 'black')};
  background: aqua;

  small {
    font-size: 0.8rem;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
`;
