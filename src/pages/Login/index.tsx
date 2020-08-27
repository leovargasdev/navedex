import React from 'react';
import { Container, Logo } from './styles';

import {
  Form,
  Label,
  ContainerInput,
  Input,
  Button,
  ButtonText,
} from '../../components/Form/styles';

import LogoNave from '../../assets/logo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo source={LogoNave} />
      <Form>
        <Label>E-mail</Label>
        <ContainerInput>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="#9E9E9E"
            keyboardType="email-address"
            placeholder="E-mail"
          />
        </ContainerInput>

        <Label>Senha</Label>
        <ContainerInput>
          <Input secureTextEntry placeholder="Senha" returnKeyType="send" />
        </ContainerInput>

        <Button onPress={() => {}}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
