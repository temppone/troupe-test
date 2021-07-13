import styled from 'styled-components';

export const ClientInfos = styled.div`
  display: flex;
  flex-direction: column;
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
