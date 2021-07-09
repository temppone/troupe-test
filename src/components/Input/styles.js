import styled from 'styled-components';

export const InputLabel = styled.label`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

export const InputBox = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.colors.secundaryLight};
  transition: 0.2s;
  box-shadow: none;
  border-color: ${({ inputError, theme }) =>
    inputError ? theme.colors.warning : null};

  :hover,
  :focus {
    border-color: ${({ inputError, theme }) =>
      inputError ? theme.colors.warning : theme.colors.secundaryLight};
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const InputWarning = styled.div`
  width: 100%;
  padding: 0.5rem 0.2rem;
`;
