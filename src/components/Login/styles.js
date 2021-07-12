import styled from 'styled-components';

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 40%;
  }
`;

export const LoginGreeting = styled.p`
  font-size: 1.4rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 40%;
  }
`;
