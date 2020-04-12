import React from 'react';
import { 
  Button,
  Body,
  Text
 } from 'native-base';

import styles from './styles'


export default () => {
    return (
        <Body style={{justifyContent:"center"}}>
          <Button primary rounded style={styles.padded}>
            <Text>Clock</Text>
          </Button>
        </Body>
    );
}