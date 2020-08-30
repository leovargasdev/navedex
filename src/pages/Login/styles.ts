import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 106px 16px 0;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-bottom: 56px;
`;

export const Form = styled.View`
  margin: 0;
  width: 100%;
  align-items: stretch;
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
