import React, { useState, useCallback } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ModalRemoveNaver from '../../components/ModalRemoveNaver';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderText,
  HeaderButton,
  HeaderButtonText,
  NaversList,
  Naver,
  NaverAvatar,
  NaverName,
  NaverJobRole,
  NaverControll,
} from './styles';
// A interface foi exportada para ser usada no arquivo styles.ts
export interface NaverProps {
  id: string;
  name: string;
  job_role: string;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [navers, setNavers] = useState<NaverProps[]>([]);
  const [naverSelected, setNaverSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      api.get('/navers').then(response => {
        setNavers(
          response.data.map((naverResponse: NaverProps) => ({
            id: naverResponse.id,
            name: naverResponse.name,
            job_role: naverResponse.job_role,
          })),
        );
      });
    }, []),
  );

  const handleToggleModal = useCallback((id = naverSelected) => {
    setNaverSelected(id);
    setModalVisible(state => !state);
  }, []);

  const refreshNavers = useCallback(() => {
    setNavers(navers.filter(naver => naver.id !== naverSelected));
  }, [naverSelected]);

  return (
    <Container>
      <Header>
        <HeaderText>Navers</HeaderText>
        <HeaderButton onPress={() => navigate('CreateNaver')}>
          <HeaderButtonText>Adicionar naver</HeaderButtonText>
        </HeaderButton>
      </Header>

      <NaversList
        data={navers}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Naver>
              <TouchableOpacity
                onPress={() => navigate('Naver', { naverId: item.id })}
              >
                <NaverAvatar
                  source={{
                    uri: `https://api.adorable.io/avatars/156/${item.id}.png`,
                  }}
                />
              </TouchableOpacity>
              <NaverName>{item.name}</NaverName>
              <NaverJobRole>{item.job_role}</NaverJobRole>

              <NaverControll>
                <TouchableOpacity onPress={() => handleToggleModal(item.id)}>
                  <Icon name="trash" size={18} color="#212121" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigate('EditNaver', { naverId: item.id })}
                >
                  <Icon
                    name="pencil-alt"
                    size={18}
                    color="#212121"
                    style={{ marginLeft: 14 }}
                  />
                </TouchableOpacity>
              </NaverControll>
            </Naver>
          );
        }}
      />

      <ModalRemoveNaver
        naverId={naverSelected}
        handleToggleModal={handleToggleModal}
        modalVisible={modalVisible}
        refreshPage={refreshNavers}
      />
    </Container>
  );
};

export default Home;
