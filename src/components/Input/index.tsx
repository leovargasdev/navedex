import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, ContainerInput, Input, ErrorText } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  error: string;
}

// OBS: IMPLEMENTAR O REF DO INPUT

const InputComponent: React.FC<InputProps> = ({ error, label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput error={!!error}>
        <Input {...rest} />
      </ContainerInput>
      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputComponent;
