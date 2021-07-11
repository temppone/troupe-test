import styled from 'styled-components';

export const ClientInfos = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

export const BallDiv = styled.div`
  content:"";
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.contrast};

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
