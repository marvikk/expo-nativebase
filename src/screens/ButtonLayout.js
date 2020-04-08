import React from 'react';
import { 
  Button,
  Left,
  Body,
  Text
 } from 'native-base';

import styles from './styles'


export default () => {
    return (
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
    );
}