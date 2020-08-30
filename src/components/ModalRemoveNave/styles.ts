import styled from 'styled-components/native';

export const Legend = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const Controll = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const ControllButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const ControllButtonText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
