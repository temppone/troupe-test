import styled from 'styled-components';

export const ButtonBox = styled.button`
  padding: 1rem;
  background: ${({ theme, background }) =>
    background ? background : theme.colors.primaryLight};
  color: ${({ theme, color }) => (color ? color : theme.colors.primaryDark)};
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;
  box-sizing: border-box;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  align-self: ${({ alignSelf }) => alignSelf};

  :hover,
  :focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryLight};
    transition: 0.2s;
  }

  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
