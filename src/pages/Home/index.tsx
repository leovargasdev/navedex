/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import ModalRemoveNave from '../../components/ModalRemoveNave';
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

export interface NaverProps {
  id: string;
  name: string;
  project: string;
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

  // OBS: NÃO ESTÁ FUNCIONANDO PARA QUANDO O ITEM É REMOVIDO!!!
  useEffect(() => {
    api.get('/navers').then(response => {
      setNavers(
        response.data.map((naverResponse: NaverProps) => ({
          id: naverResponse.id,
          name: naverResponse.name,
          project: naverResponse.project,
        })),
      );
    });
  }, [isFocus]);

  const handleToggleModal = useCallback((id = naverSelected) => {
    setNaverSelected(id);
    setModalVisible(state => !state);
  }, []);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => signOut()}>
          <HeaderText>SAIR</HeaderText>
        </TouchableOpacity>
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
              <NaverProject>{item.project}</NaverProject>

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

      <ModalRemoveNave
        naverId={naverSelected}
        handleToggleModal={handleToggleModal}
        modalVisible={modalVisible}
      />
    </Container>
  );
};

export default Home;
