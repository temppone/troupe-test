import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 3.3rem;
  height: 2rem;
  margin: 1rem;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 1.9rem;

  :before {
    position: absolute;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    left: 0.2rem;
    bottom: 0.2rem;
    background: ${({ theme }) => theme.colors.secundaryDark};
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchLabel} {
    background: ${({ theme }) => theme.colors.tertiaryDark};
    &::before {
      content: '';
      border-radius: 50%;
      height: 1.5rem;
      width: 1.5rem;
      margin-left: 1.3rem;
      transition: 0.3s;
      background: ${({ theme }) => theme.colors.secundaryLight};
    }
  }
`;
