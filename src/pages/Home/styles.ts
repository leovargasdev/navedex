import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { NaverProps } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin: 28px 2px 5px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderButton = styled.TouchableOpacity`
  margin-left: auto;
  background: ${({ theme }) => theme.colors.black};
  width: 155px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const NaversList = styled(
  FlatList as new () => FlatList<NaverProps>,
).attrs({
  contentContainerStyle: { paddingTop: 22 },
  showsVerticalScrollIndicator: false,
})``;

export const Naver = styled.View`
  margin-bottom: 26px;
`;

export const NaverAvatar = styled.Image`
  width: 156px;
  height: 156px;
`;

export const NaverName = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const NaverJobRole = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const NaverControll = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;
