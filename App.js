import React from 'react';
import { AppLoading } from 'expo';
import { Container,
  StyleProvider,
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
  Body
 } from 'native-base';
import {View} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import platform from './native-base-theme/variables/platform';
import common from './native-base-theme/variables/commonColor';
import custom from './native-base-theme/variables/variables';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={styles.container}>
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
        <Content padder style={{ backgroundColor: "#fff", padding: 20 }}>
        <Body style={styles.buttonContainer}>
          <Left>
          <Button rounded light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button rounded info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button primary style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
          </Left>
        
        </Body>
        </Content>
      </Container>
      
    );
  }
}