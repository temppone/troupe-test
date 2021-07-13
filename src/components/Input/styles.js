import styled from 'styled-components';

export const InputLabel = styled.label`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

export const InputBox = styled.input`
  padding: 1rem;
  border-radius: 0.9rem;
  width: 100%;
  font-size: 1.2rem;
  transition: 0.2s;
  box-shadow: none;

  background: ${({ theme }) => theme.colors.secundaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 0.1rem solid
    ${({ inputError, theme }) =>
      inputError ? theme.colors.warning : theme.colors.tertiaryDark};

  :hover,
  :focus {
    border-color: ${({ inputError, theme }) =>
      inputError ? theme.colors.warning : theme.colors.secundaryDark};

    background: ${({ theme }) => theme.colors.tertiaryDark};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.secundaryDark};
  }
`;

export const InputWarning = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  width: 100%;
  padding: 0.5rem 0.2rem;
`;
