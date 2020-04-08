import React from 'react';
import { AppLoading } from 'expo';
import { 
  Container,
  StyleProvider,
  Content,
  Text
 } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import styles from './src/screens/styles'

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
// import platform from './native-base-theme/variables/platform';
// import common from './native-base-theme/variables/commonColor';
// import custom from './native-base-theme/variables/variables';

import ButtonLayout from './src/screens/ButtonLayout';
import HeaderComponent from './src/screens/Header';

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
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
        <HeaderComponent />
        <Content padder style={{ backgroundColor: "#fff", padding: 20 }}>
          <Text>This text should be red</Text>
        <ButtonLayout />
        </Content>
      </Container>
      </StyleProvider>
      
    );
  }
}