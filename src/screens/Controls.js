import React from 'react';
import { 
  Body,
  Text,
  Button
 } from 'native-base';

import styles from './styles'


export default () => {
    return (
            <Body style={{justifyContent: 'space-between',
            backgroundColor: "lightgreen",
            flexDirection: 'row',
            width: '60%'}}>
                <Button success rounded style={styles.padded}>
                <Text>Start</Text>
                </Button>
                <Button success rounded style={styles.padded}>
                <Text>Stop</Text>
                </Button>
            </Body>
    );
}

