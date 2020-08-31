import styled from 'styled-components/native';

interface InfoTextProps {
  legend?: boolean; // Atributo para definir se a fonte deve ser regular ou semiBold
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 24px 16px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const InfoText = styled.Text<InfoTextProps>`
  margin-top: 4px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};

  font-family: ${({ legend, theme }) =>
    legend ? theme.fonts.semiBold : theme.fonts.regular};
  margin-top: ${({ legend }) => (legend ? 24 : 0)}px;
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
