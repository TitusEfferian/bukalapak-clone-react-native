import React from 'react';
import { } from "react-navigation";
import { StatusBar, Animated, Platform, ScrollView, TextInput, TouchableWithoutFeedback,TouchableOpacity } from "react-native";
import { Button, Text, Icon, Footer, FooterTab, Container, Header, Left, Body, Title, Right, Content, Item, Label, Input, View } from "native-base";
import Login from "../LOGIN/index.js";

const SCROLL_HEIGHT = (Platform.OS === 'ios' ? 131 + bannerHeight : 238)

class Pulsa extends React.Component {
  constructor(props) {
    super(props)
    this.nScroll = new Animated.Value(0)
    this.tabY = this.nScroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
      outputRange: [0, 0, 1]
    });
    this.state = {
      isPressed: false,
      text: '',
      isValidate: false
    }
  }

  render() {
    let isPressColor = '#808080'
    if (this.state.isPressed === true) {
      isPressColor = 'green'
    }
    return (
      <Container>
        <StatusBar hidden={true} barStyle={'light-content'} />
        <Header style={{ backgroundColor: '#D71149' }}>

          <Left style={{ flexDirection: 'row' }}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
            <View style={{ backgroundColor: 'white', borderRadius: 3, width: 32, height: 32, marginTop: 6, marginLeft: 16 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                  color: '#D71149',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 24,
                  fontWeight: 'bold'




                }}>
                  BL
          </Text>
              </View>
            </View>
          </Left>
          <Body>

          </Body>
          <Right>

            <Button transparent onPress={() => { alert('under dev') }}>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="log-in" />
            </Button>
            <Button transparent>
              <Icon name="cart" />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={{ borderBottomColor: '#808080', borderBottomWidth: 0.3, paddingBottom: 16 }}>
            <View style={{ marginLeft: 16, marginTop: 16 }}>
              <Text style={{ fontWeight: 'bold' }}>
                Pulsa
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 16, marginLeft: 8 }}>
            <Text>
              Nomor Telepon
            </Text>
          </View>
          
          <View style={{ marginLeft: 8, marginTop: 8, marginRight: 8 }}>
            {/* {
              this.state.isPressed == true
                ?
                isPressColor = 'green'
                :
                null

            } */}
            
           
            
              <TextInput underlineColorAndroid='rgba(0,0,0,0)' placeholder='contoh 08123xxxxxx' selectionColor={'black'} style={{ padding: 8, borderWidth: 0.5, borderColor: isPressColor }} onChangeText={(text) => { this.setState({ text: text }) }}>

              </TextInput>
            
           

          </View>
          
         


          <View style={{ marginTop: 8 }}>{
            console.log(this.state, isPressColor)
          }
            <Text>{this.state.text}</Text>
          </View>

        </Content>
      </Container>


    );
  }
}

export default Pulsa;