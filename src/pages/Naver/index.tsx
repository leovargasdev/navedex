/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable camelcase */
import React, { useState, useCallback, useMemo } from 'react';
import { FontAwesome5 as Icon, FontAwesome } from '@expo/vector-icons';
import { Modal, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { differenceInYears } from 'date-fns';
import {
  Container,
  Avatar,
  Content,
  Name,
  InfoText,
  Controll,
  ControllButton,
  ControllButtonText,
  ModalContent,
  ModalView,
  ModalHeader,
} from './styles';
// import api from '../../services/api';

interface NaverProps {
  id: string;
  name: string;
  admission_date: string;
  project: string;
  birthdate: string;
  url: string;
}

const Naver: React.FC = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const naver = {
    id: 'c465942d-4a78-4c5d-92cf-0e6f112394bb',
    name: 'Christian Tavares',
    admission_date: '2018-08-19T00:00:00.000Z',
    job_role: 'Desenvolvedor',
    user_id: '31bde47a-e898-49e1-b305-efb772321539',
    project: 'Project Backend Test',
    birthdate: '1992-04-12T00:00:00.000Z',
    url: 'aaa.png',
  };
  // Pega o atual estado da variável modalVisible e inverte seu valor.
  const handleToggleModal = useCallback(
    () => setModalVisible(state => !state),
    [],
  );

  const handleDeleteNaver = useCallback(() => {
    console.log(naver.id);
    // api.delete(`/delete/${naver.id}`);
  }, [naver.id]);

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
      <Modal animationType="fade" visible={modalVisible} transparent>
        <ModalContent>
          <ModalView>
            <ModalHeader>
              <Name>Excluir Naver</Name>
              <TouchableOpacity onPress={handleToggleModal}>
                <FontAwesome name="close" size={24} color={colors.black} />
              </TouchableOpacity>
            </ModalHeader>
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
          </ModalView>
        </ModalContent>
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
            onPress={() => {}}
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
