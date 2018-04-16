import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, View, Header, Left, Right, Title, Body, Button, Icon } from "native-base";



class Expand extends React.Component {
    constructor() {
        super()
        this.state = {
            isEvoucherPress: false
        }
    }
    toogle() {
        if (this.state.isEvoucherPress == true) {
            return this.setState({ isEvoucherPress: false })
        }
        else {
            return this.setState({ isEvoucherPress: true })
        }

    }
    render() {
        return (
            <ListItem onPress={this.toogle.bind(this)}>
                <Icon name={routes[2].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
                <Text>{routes[2].screen}</Text>
            </ListItem>
        );
    }
}

export default Expand;