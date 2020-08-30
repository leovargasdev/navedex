/* eslint-disable camelcase */
import React, { useRef, useState, useCallback } from 'react';
import { TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import {
  Form,
  Label,
  ContainerInput,
  Input,
  Button,
  ButtonText,
  ButtonDatePicker,
  ButtonDatePickerText,
} from './styles';

export interface NaverProps {
  name: string;
  job_role: string;
  admission_date: string;
  project: string;
  birthdate: string;
  url: string;
}

interface FormNaverProps {
  onSubmit(naver: NaverProps): void;
  initialData?: NaverProps;
}

const FormNaver: React.FC<FormNaverProps> = ({ onSubmit, initialData }) => {
  const [naver, setNaver] = useState<NaverProps>({
    name: '',
    job_role: '',
    admission_date: '',
    project: '',
    birthdate: '',
    url: '',
  });

  const [admissionDate, setAdmissionDate] = useState(new Date());
  const [birthdate, setBirthdate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState({
    admission: false,
    birthdate: false,
  });

  const inputJobRole = useRef<TextInput>(null);
  const inputBirthdate = useRef<TextInput>(null);
  const inputProject = useRef<TextInput>(null);
  const inputurl = useRef<TextInput>(null);

  const handleDateChanged = useCallback(
    (date: Date | undefined, field: string) => {
      if (Platform.OS === 'android')
        setShowDatePicker({
          admission: false,
          birthdate: false,
        });

      if (date) {
        if (field === 'birthdate') setBirthdate(date);
        else setAdmissionDate(date);
      }
    },
    [naver],
  );

  // A propriedade date pode ser undefined quando o usuário clicar no botão cancelar no Android
  const handleDataBirthdate = useCallback(
    (event, date: Date | undefined) => handleDateChanged(date, 'birthdate'),
    [],
  );
  // A propriedade date pode ser undefined quando o usuário clicar no botão cancelar no Android
  const handleDataAdmissionDate = useCallback(
    (event, date: Date | undefined) =>
      handleDateChanged(date, 'admission_date'),
    [],
  );

  const handleSubmitForm = useCallback(() => {
    const naverFormatted: NaverProps = {
      ...naver,
      admission_date: format(admissionDate, 'dd/MM/yyyy'),
      birthdate: format(birthdate, 'dd/MM/yyyy'),
    };
    onSubmit(naverFormatted);
  }, [naver, onSubmit, admissionDate, birthdate]);

  return (
    <Form>
      <Label>Nome</Label>
      <ContainerInput>
        <Input
          value={naver.name}
          onChangeText={value => setNaver({ ...naver, name: value })}
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
          value={naver.job_role}
          onChangeText={value => setNaver({ ...naver, job_role: value })}
          autoCapitalize="sentences"
          placeholderTextColor="#9E9E9E"
          keyboardType="default"
          placeholder="Cargo"
          returnKeyType="next"
          onSubmitEditing={() => inputBirthdate.current?.focus()}
        />
      </ContainerInput>

      <Label>Idade</Label>
      <ButtonDatePicker
        onPress={() =>
          setShowDatePicker({ ...showDatePicker, birthdate: true })}
      >
        <ButtonDatePickerText>Selecionar uma data</ButtonDatePickerText>
      </ButtonDatePicker>

      {showDatePicker.birthdate && (
        <DateTimePicker
          mode="date"
          display="calendar"
          onChange={handleDataBirthdate}
          value={birthdate}
        />
      )}

      <Label>Tempo de Empresa</Label>
      <ButtonDatePicker
        onPress={() =>
          setShowDatePicker({ ...showDatePicker, admission: true })
        }
      >
        <ButtonDatePickerText>Selecionar uma data</ButtonDatePickerText>
      </ButtonDatePicker>

      {showDatePicker.admission && (
        <DateTimePicker
          mode="date"
          display="calendar"
          onChange={handleDataAdmissionDate}
          value={admissionDate}
        />
      )}

      <Label>Projetos que participou</Label>
      <ContainerInput>
        <Input
          ref={inputProject}
          value={naver.project}
          onChangeText={value => setNaver({ ...naver, project: value })}
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
          value={naver.url}
          onChangeText={value => setNaver({ ...naver, url: value })}
          autoCapitalize="none"
          placeholderTextColor="#9E9E9E"
          keyboardType="url"
          placeholder="URL da foto do naver"
          returnKeyType="send"
        />
      </ContainerInput>

      <Button onPress={() => handleSubmitForm()}>
        <ButtonText>Salvar</ButtonText>
      </Button>
    </Form>
  );
};

export default FormNaver;
