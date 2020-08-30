import styled from 'styled-components/native';

interface ContainerInputProps {
  error: boolean;
}

export const Container = styled.View`
  margin: 0 0 32px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  height: 40px;
  padding: 0 10px;
  margin-top: 4px;

  background: transparent;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.onyx)};
`;

export const Input = styled.TextInput.attrs({})`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.red};
  margin-top: 2px;
`;
