import styled from 'styled-components';

export const ButtonBox = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;
  box-sizing: border-box;

  :hover,
  :focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryLight};
    transition: 0.1s;
  }

  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
