import styled from 'styled-components';

export const ClientInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  border-radius: 0.9rem;

  background: ${({ theme }) => theme.colors.secundaryDark};

  :before {
    content: '';
    width: 3rem;
    height: 0.3rem;
    border-radius: 0.9rem;

    background: ${({ theme }) => theme.colors.contrast};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 55%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 50%;
  }
`;

export const ClientInfosItem = styled.div`
  padding: 1rem 0;
`;
export const ClientInfosField = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;
export const ClientInfosData = styled.div`
  font-size: 1.4rem;
`;

export const ClientActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
