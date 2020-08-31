import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Modal from '../Modal';
import api from '../../services/api';

import { Controll, ControllButton, ControllButtonText } from './styles';

interface ModalRemoveNaveProps {
  naverId: string;
  modalVisible: boolean;
  handleToggleModal(): void;
  refreshPage(): void;
}

const ModalRemoveNave: React.FC<ModalRemoveNaveProps> = ({
  naverId,
  handleToggleModal,
  modalVisible,
  refreshPage,
}) => {
  const { colors } = useTheme();
  const { canGoBack, goBack } = useNavigation();

  const [successRemoveModal, setSuccessRemoveModal] = useState(false);

  const handleDeleteNaver = useCallback(async () => {
    try {
      await api.delete(`/navers/${naverId}`);
      handleToggleModal();
      // Essa função serve para atualizar a lista de navers da home, ela remove o naver da lista local
      // Dessa maneira não será necessário efetuar outra busca na api
      refreshPage();
      setSuccessRemoveModal(true);
    } catch (err) {
      Alert.alert('Erro ao remover Naver');
    }
  }, [naverId]);

  const handleToggleModalSuccess = useCallback(() => {
    setSuccessRemoveModal(false);
    // É feito a verificação do goBack porque o uso deste componente também pode ser feito pela rota Navers
    // e ela é uma rota raiz, assim esse condicional que o goBack não iria gerar algum erro no app.
    if (canGoBack()) goBack();
  }, []);

  return (
    <>
      <Modal
        title="Excluir Naver"
        content="Tem certeza que deseja excluir este naver?"
        eventIconClose={handleToggleModal}
        visible={modalVisible}
      >
        <Controll>
          <ControllButton onPress={() => handleToggleModal()}>
            <ControllButtonText style={{ color: colors.black }}>
              Cancelar
            </ControllButtonText>
          </ControllButton>

          <ControllButton
            onPress={handleDeleteNaver}
            style={{ marginLeft: 16, backgroundColor: colors.black }}
          >
            <ControllButtonText style={{ color: colors.white }}>
              Excluir
            </ControllButtonText>
          </ControllButton>
        </Controll>
      </Modal>

      <Modal
        title="Naver Excluído"
        content="Naver excluído com sucesso!"
        eventIconClose={handleToggleModalSuccess}
        visible={successRemoveModal}
      />
    </>
  );
};

export default ModalRemoveNave;
