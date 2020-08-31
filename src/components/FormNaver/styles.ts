import styled from 'styled-components/native';

interface ContainerInputProps {
  error: boolean;
}

export const Form = styled.View`
  width: 100%;
  align-items: stretch;

  margin-bottom: 32px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 40px;
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.black};
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const DatePickerButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 40px;
  margin: 4px 0 32px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.onyx};
`;

export const DatePickerButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;
