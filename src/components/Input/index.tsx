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
// Não foi usado o FC porque ele não reconhece referências, pois isso foi usado o RefForwardingComponent
// 1º parâmetro: propriedades da minha referência, no caso só vou usar o focus
// 2º parâmetro: propriedades do meu componente
const InputComponent: React.RefForwardingComponent<InputRef, InputProps> = (
  { error, label, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  // useImperativeHandle é usado para passar informações ao componente superior(componente pai)
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
          keyboardAppearance="dark" // Ativa o teclado dark no IOS
          {...rest}
        />
      </ContainerInput>
      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default forwardRef(InputComponent);
