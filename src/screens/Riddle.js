import React from 'react';
import { 
  Body,
  Text
 } from 'native-base';

import styles from './styles'


export default () => {
    return (
        <Body style={{justifyContent:"center"}}>
            <Text style={{fontSize:50}}>Riddle</Text>
        </Body>
    );
}