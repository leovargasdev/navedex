import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, Content, Title } from './styles';

import FormNaver, { NaverProps } from '../../components/Form';
import api from '../../services/api';

const CreateNaver: React.FC = () => {
  const { navigate } = useNavigation();

  const handleAddNaver = useCallback(async (naver: NaverProps) => {
    const { data } = await api.post('/navers', naver);
    navigate('Naver', { naverId: data.id });
  }, []);

  return (
    <Container>
      <Content>
        <Title>Adicionar Naver</Title>
        <FormNaver onSubmit={handleAddNaver} />
      </Content>
    </Container>
  );
};

export default CreateNaver;
