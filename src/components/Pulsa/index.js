import React from 'react';
import { } from "react-navigation";
import { StatusBar, Animated, Platform,ScrollView } from "react-native";
import { Button, Text, Icon, Footer, FooterTab, Container, Header, Left, Body, Title, Right, Content, Item, Label, Input, View } from "native-base";
import Login from "../LOGIN/index.js";

const SCROLL_HEIGHT = (Platform.OS === 'ios' ? 131+bannerHeight : 238)

class Pulsa extends React.Component {
    constructor(props) {
        super(props)
        this.nScroll = new Animated.Value(0)
        this.tabY = this.nScroll.interpolate({
            inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
            outputRange: [0, 0, 1]
        });
    }

    render() {
        return (
             <View>
                <Animated.ScrollView
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
                    >
                    <StatusBar hidden={true} barStyle={'light-content'} />
                    <Header style={{ backgroundColor: '#D71149' }}>

                        <Left style={{ flexDirection: 'row' }}>
                            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>

                        </Body>
                        <Right>


                        </Right>
                    </Header>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        // onPress={this.toogle.bind(this)}
                        >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                        </Animated.ScrollView>
                    <Login />
                </View>
                
           
        );
    }
}

export default Pulsa;