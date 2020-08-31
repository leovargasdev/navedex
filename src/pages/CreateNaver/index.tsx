import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import { Container, Title } from './styles';

import FormNaver, { NaverProps } from '../../components/FormNaver';
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container keyboardShouldPersistTaps="handled">
        <Title>Adicionar Naver</Title>
        <FormNaver onSubmit={handleAddNaver} />
      </Container>

      <Modal
        title="Naver adicionado"
        content="Naver adicionado com successo!"
        eventIconClose={handleCloseModal}
        visible={modalVisible}
      />
    </KeyboardAvoidingView>
  );
};

export default CreateNaver;
