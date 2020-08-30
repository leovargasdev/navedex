import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  padding: 0 16px;
`;

export const Content = styled.View`
  width: 100%;
  background: #fff;
  padding: 16px 24px;
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentText = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};

  font-family: ${({ theme }) => theme.fonts.regular};
`;
