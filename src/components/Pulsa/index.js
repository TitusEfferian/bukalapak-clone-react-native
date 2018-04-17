import React from 'react';
import { } from "react-navigation";
import { StatusBar } from "react-native";
import { Button, Text, Icon, Footer, FooterTab, Container, Header, Left, Body, Title, Right, Content, Item, Label, Input, View } from "native-base";

class Pulsa extends React.Component {
    render() {
        return (
            <Container>
                <StatusBar hidden={true} barStyle={'light-content'}/>
                <Header style={{ backgroundColor: '#D71149' }}>

                    <Left style={{ flexDirection: 'row' }}>
                        <Button transparent onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right>


                    </Right>
                </Header>

            </Container>
        );
    }
}

export default Pulsa;