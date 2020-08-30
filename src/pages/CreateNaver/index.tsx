import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Container, Content, Title } from './styles';

import FormNaver, { NaverProps } from '../../components/Form';
import Modal from '../../components/Modal';

import api from '../../services/api';

const CreateNaver: React.FC = () => {
  const { navigate } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    navigate('Navers');
  }, []);

  const handleAddNaver = useCallback(async (naver: NaverProps) => {
    try {
      await api.post('/navers', naver);
      setModalVisible(true);
    } catch (err) {
      Alert.alert('Erro no cadastro');
    }
  }, []);

  return (
    <Container>
      <Content>
        <Title>Adicionar Naver</Title>
        <FormNaver onSubmit={handleAddNaver} />
      </Content>

      <Modal
        title="Naver adicionado"
        content="Naver adicionado com successo!"
        eventIconClose={handleCloseModal}
        visible={modalVisible}
      />
    </Container>
  );
};

export default CreateNaver;
