import React from 'react';
import { 
    Header,
  Button,
  Left,
  Body,
  Title,
  Icon,
  Right
 } from 'native-base';

export default () => {
    return (
        <Header>
          <Left>
            <Button
              transparent
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Charades</Title>
          </Body>
          <Right />
        </Header>
    );
}