import React from 'react';
import { } from "react-navigation";
import { StatusBar } from "react-native";
import { Button, Text, Icon, Footer, FooterTab, Container, Header, Left, Body, Title, Right, Content, Item, Label, Input, View } from "native-base";

export default class LoginTab2 extends React.Component {
    constructor() {
        super()
        this.state = {
            isPress: false
        }
    }
    toogle()
    {
        if(this.state.isPress==true)
        {
            return this.setState({isPress:false})
        }
        else
        {
            return this.setState({isPress:true})
        }
        
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                {/* <StatusBar hidden={true} barStyle={'light-content'}/>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>

                    </Left>
                    <Body>
                        <Title>Lucy Chat</Title>
                    </Body>
                    <Right />
                </Header> */}
                <Content padder>
                    {
                        this.state.isPress == true
                            ?
                            <View>
                                <Text>asd</Text>
                            </View>

                            :
                            null
                    }
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={this.toogle.bind(this)}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={this.toogle.bind(this)}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={this.toogle.bind(this)}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={this.toogle.bind(this)}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={this.toogle.bind(this)}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={this.toogle.bind(this)}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}