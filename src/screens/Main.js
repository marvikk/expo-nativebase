import React from 'react';
import { 
    Container,
    StyleProvider
   } from 'native-base';

import { Col, Grid, Row } from 'react-native-easy-grid';

import styles from './styles'

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

// import ButtonLayout from './ButtonLayout';
import HeaderComponent from './Header';
import Clock from './Clock';
import Riddle from './Riddle';
import Controls from './Controls';


export default class Main extends React.Component {
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={styles.container}>
                    <HeaderComponent />
    
                    <Grid>
                    <Row  size={1} style={{ backgroundColor: "#fff"}}>
                        <Col style={{ backgroundColor: '#635DB7' }} size={2}></Col>
                        <Col style={{ backgroundColor: 'lightgreen' }} size={1}>
                        <Clock />
                        </Col>
                    </Row>
                    <Row size={4}>
    
                        <Col style={{ backgroundColor: '#fff'}}>
                        <Riddle />
                        </Col>
                    </Row>
                    <Row  size={1.5} style={{ backgroundColor: "#fff"}}>
                        <Col style={{ backgroundColor: '#635DB7' }}>
                        <Controls />
                        </Col>
                    </Row>
                        
                    </Grid>
    
                </Container>
            </StyleProvider>
        );
    }
    
}