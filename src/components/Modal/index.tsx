import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, Content, Header, Title } from './styles';

interface ModalComponentProps {
  title: string;
  visible: boolean;
  handleToggleModal(): void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  title,
  visible,
  handleToggleModal,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <Container>
        <Content>
          <Header>
            <Title>{title}</Title>
            <TouchableOpacity onPress={handleToggleModal}>
              <Icon name="close" size={24} color={colors.black} />
            </TouchableOpacity>
          </Header>
          {children}
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalComponent;
