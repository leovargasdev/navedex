import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import FormNaver, { NaverProps } from '../../components/FormNaver';
import Modal from '../../components/Modal';

import api from '../../services/api';

import { Container, Title } from './styles';

interface NaverRouteProps {
  params: {
    naverId: string;
  };
}

const EditNaver: React.FC = () => {
  const { goBack } = useNavigation();
  const [naver, setNaver] = useState({} as NaverProps);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    params: { naverId },
  } = useRoute() as NaverRouteProps;

  useEffect(() => {
    api.get(`/navers/${naverId}`).then(response => {
      const { data } = response;
      delete data.user_id;
      delete data.id;
      setNaver(data);
    });
  }, [naverId]);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    goBack();
  }, []);

  const handleEditNaver = useCallback(async (naverRequest: NaverProps) => {
    try {
      await api.put(`/navers/${naverId}`, naverRequest);
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
        <Title>Editar Naver</Title>
        <FormNaver onSubmit={handleEditNaver} initialData={naver} />
      </Container>

      <Modal
        title="Naver editado"
        content="Naver editado com successo!"
        eventIconClose={handleCloseModal}
        visible={modalVisible}
      />
    </KeyboardAvoidingView>
  );
};

export default EditNaver;
