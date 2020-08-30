import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, Content, Header, Title, ContentText } from './styles';

interface ModalComponentProps {
  title: string;
  content: string;
  visible: boolean;
  eventIconClose(): void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  title,
  content,
  visible,
  eventIconClose,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <Container>
        <Content>
          <Header>
            <Title>{title}</Title>
            <TouchableOpacity onPress={eventIconClose}>
              <Icon name="close" size={24} color={colors.black} />
            </TouchableOpacity>
          </Header>
          {content && <ContentText>{content}</ContentText>}
          {children}
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalComponent;
