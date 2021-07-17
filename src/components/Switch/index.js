import React from 'react';
import { SwitchContainer, SwitchLabel, SwitchInput } from './styles';

const Switch = () => {
  return (
    <SwitchContainer>
      <SwitchInput id="checkbox" type="checkbox"  />
      <SwitchLabel htmlFor="checkbox" />
    </SwitchContainer>
  );
};

export default Switch;
