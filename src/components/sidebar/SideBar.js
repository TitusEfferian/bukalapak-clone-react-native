import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, View, Header, Left, Right, Title, Body, Button, Icon } from "native-base";
const routes = [{screen:"Home",icon:"home"}, {screen:"Login",icon:"log-in"}, {screen:"E-Voucher",icon:"card"},{screen:"Kategori",icon:"list"},{screen:"Promo & Diskon",icon:"pricetag"},{screen:"Lebih Hemat di Aplikasi",icon:"phone-portrait"},{screen:"Cek Transaksi",icon:"cart"},{screen:"Buka Bantuan",icon:"help-circle"},{screen:"Hubungi Bukalapak",icon:"call"},{screen:"Lainnya",icon:"more"}];
export default class SideBar extends React.Component {
	render() {
		return (
			<Container>
				<Header style={{ backgroundColor: '#D71149' }}>
					<Left style={{ flexDirection: 'row' }}>
						<View style={{ backgroundColor: 'white', borderRadius: 3, width: 32, height: 32, marginLeft: 16 }}>
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
						<Text style={{ fontSize: 12, color: 'white', marginLeft: 16 }}>Download Aplikasinya</Text>
					</Body>
					<Right>
					</Right>
				</Header>
				<Content>
					<List
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => this.props.navigation.navigate(data.screen)}>
									<Icon name={data.icon} style={{color:'#D71149',marginRight:16,marginLeft:16}}/>
									<Text>{data.screen}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
