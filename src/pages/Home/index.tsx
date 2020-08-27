/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

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

export interface NaverProps {
  id: string;
  name: string;
  project: string;
}

const Home: React.FC = () => {
  const data = [
    {
      id: 'c465942d-4a78-4c5d-92cf-0e6f112394bb',
      name: 'Christian Tavares',
      admission_date: '2018-08-19T00:00:00.000Z',
      job_role: 'Desenvolvedor',
      user_id: '31bde47a-e898-49e1-b305-efb772321539',
      project: 'Project Backend Test',
      birthdate: '1992-04-12T00:00:00.000Z',
      url: 'aaa.png',
    },
    {
      id: '3a27927a-7abb-4f7d-addd-8288fb464afd',
      name: 'Tavares Christian',
      admission_date: '2018-08-19T00:00:00.000Z',
      job_role: 'Desenvolvedor',
      user_id: '31bde47a-e898-49e1-b305-efb772321539',
      project: 'Project Frontend',
      birthdate: '1992-04-12T00:00:00.000Z',
      url: 'aaa.png',
    },
    {
      id: '5df3fa83-a66b-4b49-bbda-b1972d165b2e',
      name: 'Juliano Reis',
      admission_date: '2018-08-19T00:00:00.000Z',
      job_role: 'Desenvolvedor',
      user_id: '31bde47a-e898-49e1-b305-efb772321539',
      project: 'Front-end Developer',
      birthdate: '1992-04-12T00:00:00.000Z',
      url: 'profile.png',
    },
    {
      id: 'fe57d675-910c-401c-9af4-8daf4cd0a4ce',
      name: 'Gabriel do Couto',
      admission_date: '2018-08-19T00:00:00.000Z',
      job_role: 'Desenvolvedor',
      user_id: '31bde47a-e898-49e1-b305-efb772321539',
      project: 'Front-end Developer',
      birthdate: '1992-04-12T00:00:00.000Z',
      url: 'profile.png',
    },
    {
      id: '57b9a05e-d81f-4f69-9693-0396446d3472',
      name: 'Eduardo Bittencourt',
      admission_date: '2018-08-19T00:00:00.000Z',
      job_role: 'Desenvolvedor',
      user_id: '31bde47a-e898-49e1-b305-efb772321539',
      project: 'Front-end Developer',
      birthdate: '1992-04-12T00:00:00.000Z',
      url: 'profile.png',
    },
    {
      id: 'af785ad1-9585-402b-9665-48e806ba03c0',
      name: 'Gustavo Pinho',
      admission_date: '2018-08-19T00:00:00.000Z',
      job_role: 'Desenvolvedor',
      user_id: '31bde47a-e898-49e1-b305-efb772321539',
      project: 'Technology Manager',
      birthdate: '1992-04-12T00:00:00.000Z',
      url: 'profile.png',
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderText>Navers</HeaderText>
        <HeaderButton onPress={() => {}}>
          <HeaderButtonText>Adicionar naver</HeaderButtonText>
        </HeaderButton>
      </Header>

      <NaversList
        data={data}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Naver>
              <NaverAvatar
                source={{
                  uri: `https://api.adorable.io/avatars/156/${item.id}.png`,
                }}
              />
              <NaverName>{item.name}</NaverName>
              <NaverProject>{item.project}</NaverProject>

              <NaverControll>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="trash" size={18} color="#212121" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
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
