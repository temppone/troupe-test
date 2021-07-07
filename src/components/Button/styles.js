import styled from 'styled-components';

export const ButtonBox = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 0.5rem;
  margin: 1rem;
`;
