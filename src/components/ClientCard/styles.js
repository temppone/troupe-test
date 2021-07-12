import styled from 'styled-components';

export const ClientInfos = styled.div`
`;

export const BallDiv = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.contrast};
  margin: 2rem;
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
