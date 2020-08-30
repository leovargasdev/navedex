import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 24px 16px;
`;

export const Title = styled.Text`
  margin: 8px auto 24px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;
