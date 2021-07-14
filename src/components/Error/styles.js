import styled from 'styled-components';

export const ErrorDiv = styled.div`
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.primaryLight};

  margin-top: 7rem;
  height: 10rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
