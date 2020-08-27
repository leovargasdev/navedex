import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: 118 },
})`
  flex: 1;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-bottom: 56px;
`;
