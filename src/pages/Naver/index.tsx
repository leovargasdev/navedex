/* eslint-disable camelcase */
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { differenceInYears } from 'date-fns';

import Modal from '../../components/Modal';
import {
  Container,
  Avatar,
  Content,
  Name,
  InfoText,
  Controll,
  ControllButton,
  ControllButtonText,
} from './styles';
import api from '../../services/api';
// import api from '../../services/api';

interface NaverProps {
  id: string;
  name: string;
  admission_date: string;
  project: string;
  birthdate: string;
  url: string;
}

interface NaverRouteProps {
  params: {
    naverId: string;
  };
}

const Naver: React.FC = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  // Foi criado a interface NaverRouteProps para que o typescript reconheca a propriedade naverId de dentro de route.params
  const {
    params: { naverId },
  } = useRoute() as NaverRouteProps;

  const [naver, setNaver] = useState({} as NaverProps);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    api.get(`/navers/${naverId}`).then(response => setNaver(response.data));
  }, [naverId]);

  // Pega o atual estado da variável modalVisible e inverte seu valor.
  const handleToggleModal = useCallback(
    () => setModalVisible(state => !state),
    [],
  );

  const handleDeleteNaver = useCallback(async () => {
    await api.delete(`/navers/${naverId}`);
    setModalVisible(false);
    goBack();
  }, [naverId]);

  const ageFormatted = useMemo(
    () => `${differenceInYears(new Date(), new Date(naver.birthdate))} anos`,
    [naver.birthdate],
  );

  const admissionDateFormatted = useMemo(
    () =>
      `${differenceInYears(new Date(), new Date(naver.admission_date))} anos`,
    [naver.admission_date],
  );

  return (
    <Container>
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

      <Avatar
        source={{
          uri: `https://api.adorable.io/avatars/156/${naver.url}`,
        }}
      />
      <Content>
        <Name>{naver.name}</Name>
        <InfoText>{naver.project}</InfoText>

        <InfoText legend>Idade</InfoText>
        <InfoText>{ageFormatted}</InfoText>

        <InfoText legend>Tempo de empresa</InfoText>
        <InfoText>{admissionDateFormatted}</InfoText>

        <InfoText legend>Projetos que participou</InfoText>
        <InfoText>{naver.project}</InfoText>

        <Controll>
          <ControllButton onPress={handleToggleModal}>
            <Icon name="trash" size={18} color={colors.black} />
            <ControllButtonText style={{ color: colors.black }}>
              Excluir
            </ControllButtonText>
          </ControllButton>

          <ControllButton
            onPress={() => navigate('EditNaver', { naverId: naver.id })}
            style={{ marginLeft: 16, backgroundColor: colors.black }}
          >
            <Icon name="pencil-alt" size={18} color={colors.white} />
            <ControllButtonText style={{ color: colors.white }}>
              Editar
            </ControllButtonText>
          </ControllButton>
        </Controll>
      </Content>
    </Container>
  );
};

export default Naver;
