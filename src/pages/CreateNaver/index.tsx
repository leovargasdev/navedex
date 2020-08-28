import React, { useRef, useState, useCallback } from 'react';
import { TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Form,
  Label,
  ContainerInput,
  Input,
  Button,
  ButtonText,
  ButtonDatePicker,
  ButtonDatePickerText,
} from '../../components/Form/styles';

import { Container, Content, Title } from './styles';

const CreateNaver: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const inputJobRole = useRef<TextInput>(null);
  const inputBirthdate = useRef<TextInput>(null);
  const inputAdmissionDate = useRef<TextInput>(null);
  const inputProject = useRef<TextInput>(null);
  const inputurl = useRef<TextInput>(null);
  // A propriedade date pode ser undefined quando o usuário clicar no botão cancelar no Android
  const handleDataChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') setShowDatePicker(false);

      if (date) setSelectedDate(date);
    },
    [],
  );

  return (
    <Container>
      <Content>
        <Title>Adicionar Naver</Title>
        <Form>
          <Label>Nome</Label>
          <ContainerInput>
            <Input
              autoCapitalize="words"
              placeholderTextColor="#9E9E9E"
              keyboardType="default"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => inputJobRole.current?.focus()}
            />
          </ContainerInput>

          <Label>Cargo</Label>
          <ContainerInput>
            <Input
              ref={inputJobRole}
              autoCapitalize="sentences"
              placeholderTextColor="#9E9E9E"
              keyboardType="default"
              placeholder="Cargo"
              returnKeyType="next"
              onSubmitEditing={() => inputBirthdate.current?.focus()}
            />
          </ContainerInput>

          <Label>Idade</Label>
          <ButtonDatePicker onPress={() => setShowDatePicker(!showDatePicker)}>
            <ButtonDatePickerText>Selecionar uma data</ButtonDatePickerText>
          </ButtonDatePicker>

          {showDatePicker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              onChange={handleDataChanged}
              value={selectedDate}
            />
          )}

          <Label>Tempo de Empresa</Label>
          <ContainerInput>
            <Input
              ref={inputAdmissionDate}
              autoCapitalize="none"
              placeholderTextColor="#9E9E9E"
              keyboardType="default"
              placeholder="Tempo de Empresa"
              returnKeyType="next"
              onSubmitEditing={() => inputProject.current?.focus()}
            />
          </ContainerInput>

          <Label>Projetos que participou</Label>
          <ContainerInput>
            <Input
              ref={inputProject}
              autoCapitalize="none"
              placeholderTextColor="#9E9E9E"
              keyboardType="default"
              placeholder="Projetos que participou"
              returnKeyType="next"
              onSubmitEditing={() => inputurl.current?.focus()}
            />
          </ContainerInput>

          <Label>URL da foto do naver</Label>
          <ContainerInput>
            <Input
              ref={inputurl}
              autoCapitalize="none"
              placeholderTextColor="#9E9E9E"
              keyboardType="url"
              placeholder="URL da foto do naver"
              returnKeyType="send"
            />
          </ContainerInput>

          <Button onPress={() => {}}>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateNaver;
