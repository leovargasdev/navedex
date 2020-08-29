import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';

import {
  Form,
  Label,
  ContainerInput,
  Input,
  Button,
  ButtonText,
} from '../../components/Form/styles';

import LogoNave from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Logo } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleLogin = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O email é obrigatório')
          .email('Email inválido'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      console.log(email, password, 'handleLogin()');

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        },
      );

      // await signIn({ email: 'leo@nave.rs', password: 'nave1234' });
      await signIn({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(e => {
          console.log(e.path, e.message);
        });

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao efetuar o login',
        );
      }
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <Logo source={LogoNave} />
        <Form>
          <Label>E-mail</Label>
          <ContainerInput>
            <Input
              value={email}
              onChangeText={value => setEmail(value)}
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#9E9E9E"
              keyboardType="email-address"
              placeholder="E-mail"
            />
          </ContainerInput>

          <Label>Senha</Label>
          <ContainerInput>
            <Input
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry
              placeholder="Senha"
              returnKeyType="send"
            />
          </ContainerInput>

          <Button onPress={() => handleLogin()}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
