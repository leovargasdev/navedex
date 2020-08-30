import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, ContainerInput, Input, ErrorText } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  error: string;
}

interface InputRef {
  focus(): void;
}

const InputComponent: React.RefForwardingComponent<InputRef, InputProps> = (
  { error, label, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput error={!!error}>
        <Input
          ref={inputElementRef}
          placeholderTextColor="#9E9E9E"
          keyboardAppearance="dark"
          {...rest}
        />
      </ContainerInput>
      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default forwardRef(InputComponent);
