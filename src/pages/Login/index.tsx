import React, { useCallback, useState, useRef } from 'react';
import { Alert, TextInput, ActivityIndicator } from 'react-native';
import * as Yup from 'yup';

import Input from '../../components/Input';

import LogoNave from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Logo, Form, Button, ButtonText } from './styles';

interface Errors {
  [key: string]: string;
}

const Login: React.FC = () => {
  const fieldsForm = {
    email: '',
    password: '',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorsInputs, setErrorsInputs] = useState(fieldsForm);

  const inputPassword = useRef<TextInput>(null);

  const { signIn } = useAuth();

  const handleLogin = useCallback(async () => {
    setLoading(true);
    setErrorsInputs(fieldsForm); // Limpando os erros
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O email é obrigatório')
          .email('Email inválido'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        },
      );

      await signIn({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: Errors = {};

        err.inner.forEach(e => {
          validationErrors[e.path] = e.message;
        });

        setErrorsInputs({ ...fieldsForm, ...validationErrors });

        Alert.alert(
          'Erro na autenticação',
          'Verifique os campos do formulário',
        );
      }
    }
    setLoading(false);
  }, [signIn, email, password]);

  return (
    <Container>
      <Content>
        <Logo source={LogoNave} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#999"
            style={{ marginTop: 100 }}
          />
        ) : (
          <Form>
            <Input
              label="E-mail"
              error={errorsInputs.email}
              value={email}
              onChangeText={value => setEmail(value)}
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#9E9E9E"
              keyboardType="email-address"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => inputPassword.current?.focus()}
            />

            <Input
              ref={inputPassword}
              label="Senha"
              error={errorsInputs.password}
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry
              placeholder="Senha"
              returnKeyType="send"
              onSubmitEditing={() => handleLogin()}
            />

            <Button onPress={handleLogin}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </Form>
        )}
      </Content>
    </Container>
  );
};

export default Login;
