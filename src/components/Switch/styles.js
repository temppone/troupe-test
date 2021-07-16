import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 2.3rem;
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
  transition: 0.4s;
  border-radius: 1.9rem;

  :before {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
    left: 0.2rem;
    bottom: 0.2rem;
    background: ${({ theme }) => theme.colors.secundaryDark};
    border-radius: 50%;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchLabel} {
    background: ${({ theme }) => theme.colors.secundaryLight};
    &::before {
      content: '';
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin-left: 21px;
    }
  }
`;
