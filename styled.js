import React, { Component } from 'react';
import { Container, StyleProvider,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body } from 'native-base';import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import platform from './native-base-theme/variables/platform';
import custom from './native-base-theme/variables/variables';

export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(custom)}>
        <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
          <Content>
            <Text>
              I have changed the text color.
            </Text>
            <Button primary><Text> Primary </Text></Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}