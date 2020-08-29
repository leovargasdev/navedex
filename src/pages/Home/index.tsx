/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

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

export interface NaverProps {
  id: string;
  name: string;
  project: string;
}

const Home: React.FC = () => {
  // Verificando o foco da tela/rota, desta maneira, podemos adicionar essa variável no array de dependências
  // do useEffect que carrega os navers, assim podemos recarregar a lista de navers quando ela sobre alguma alteração.
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const [naver, setNavers] = useState<NaverProps[]>([]);

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
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <HeaderText>Navers</HeaderText>
        <HeaderButton onPress={() => navigate('CreateNaver')}>
          <HeaderButtonText>Adicionar naver</HeaderButtonText>
        </HeaderButton>
      </Header>

      <NaversList
        data={naver}
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
                <TouchableOpacity onPress={() => {}}>
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
    </Container>
  );
};

export default Home;
