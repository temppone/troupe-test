import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  transition: 0.2s;
  border-radius: ${({borderRadius}) => borderRadius};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 599px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 800px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1024px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1280px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 1380px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.2rem;
`;
