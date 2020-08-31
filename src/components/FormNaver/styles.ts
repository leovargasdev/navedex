import styled from 'styled-components/native';

interface ContainerInputProps {
  error: boolean;
}

export const Form = styled.View`
  width: 100%;
  align-items: stretch;

  margin-bottom: 32px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  height: 40px;
  padding: 0 10px;
  margin: 4px 0 32px;

  background: transparent;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.onyx)};
`;

export const Input = styled.TextInput.attrs({})`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 40px;
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.black};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonDatePicker = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 40px;
  margin: 4px 0 32px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.onyx};
`;

export const ButtonDatePickerText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;
