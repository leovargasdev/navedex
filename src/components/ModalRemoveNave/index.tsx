import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Modal from '../Modal';
import api from '../../services/api';

import {
  InfoText,
  Controll,
  ControllButton,
  ControllButtonText,
} from './styles';

interface ModalRemoveNaveProps {
  naverId: string;
  modalVisible: boolean;
  handleToggleModal(): void;
}

const ModalRemoveNave: React.FC<ModalRemoveNaveProps> = ({
  naverId,
  handleToggleModal,
  modalVisible,
}) => {
  const { colors } = useTheme();
  const { canGoBack, goBack } = useNavigation();

  const [successRemoveModal, setSuccessRemoveModal] = useState(false);

  const handleDeleteNaver = useCallback(async () => {
    await api.delete(`/navers/${naverId}`);
    handleToggleModal();
    setSuccessRemoveModal(true);
  }, [naverId]);

  const handleToggleModalSuccess = useCallback(() => {
    setSuccessRemoveModal(false);

    // É verificado se é possível realizar o goBack, pelo fato da requisação ser feita da rota Navers, pois
    // não existe nenhuma rota anterior que a Navers, desta maneira o goBack resultaria em um erro na aplicação.
    if (canGoBack()) goBack();
  }, []);

  return (
    <>
      <Modal
        title="Excluir Naver"
        handleToggleModal={handleToggleModal}
        visible={modalVisible}
      >
        <InfoText>Tem certeza que deseja excluir este naver?</InfoText>
        <Controll>
          <ControllButton onPress={handleToggleModal}>
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
        handleToggleModal={handleToggleModalSuccess}
        visible={successRemoveModal}
      >
        <InfoText>Naver excluido com sucesso!</InfoText>
      </Modal>
    </>
  );
};

export default ModalRemoveNave;
