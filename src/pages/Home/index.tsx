/* eslint-disable camelcase */
import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import ModalRemoveNaver from '../../components/ModalRemoveNaver';
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
  NaverProject,
  NaverControll,
} from './styles';
import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

interface NaverProps {
  id: string;
  name: string;
  job_role: string;
}

const Home: React.FC = () => {
  // Verificando o foco da tela/rota, desta maneira, podemos adicionar essa variável no array de dependências
  // do useEffect que carrega os navers, assim podemos recarregar a lista de navers quando ela sobre alguma alteração.
  const isFocus = useIsFocused();
  const { navigate } = useNavigation();
  const { signOut } = useAuth();
  const [navers, setNavers] = useState<NaverProps[]>([]);
  const [naverSelected, setNaverSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    api.get('/navers').then(response => {
      setNavers(
        response.data.map((naverResponse: NaverProps) => ({
          id: naverResponse.id,
          name: naverResponse.name,
          job_role: naverResponse.job_role,
        })),
      );
    });
  }, [isFocus]);

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
              <NaverProject>{item.job_role}</NaverProject>

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
