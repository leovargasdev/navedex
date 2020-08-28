import React from 'react';

import { Container, TextPage } from './styles';

const Naver: React.FC = () => {
  const data = {
    id: 'c465942d-4a78-4c5d-92cf-0e6f112394bb',
    name: 'Christian Tavares',
    admission_date: '2018-08-19T00:00:00.000Z',
    job_role: 'Desenvolvedor',
    user_id: '31bde47a-e898-49e1-b305-efb772321539',
    project: 'Project Backend Test',
    birthdate: '1992-04-12T00:00:00.000Z',
    url: 'aaa.png',
  };

  return (
    <Container>
      <TextPage>Naver</TextPage>
    </Container>
  );
};

export default Naver;
