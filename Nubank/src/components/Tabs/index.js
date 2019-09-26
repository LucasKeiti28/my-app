import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <TabContainer>
        <TabItem>
          <Icon name="person-add" size={20} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={20} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={20} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={20} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={20} color="#FFF" />
          <TabText>Bloquear cartāo</TabText>
        </TabItem>
      </TabContainer>
    </Container>
  );
}
