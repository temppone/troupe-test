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

  :focus {
    background: ${({ theme }) => theme.colors.secundaryLight};
  }
`;

export const InputWarning = styled.div`
  width: 100%;
  padding: 0.5rem 0.2rem;
`;
