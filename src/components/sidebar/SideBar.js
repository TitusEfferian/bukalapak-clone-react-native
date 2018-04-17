import React from "react";
import { AppRegistry, Image, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Text, List, ListItem, View, Header, Left, Right, Title, Body, Button, Icon } from "native-base";
const routes = [{ screen: "Home", icon: "home" }, { screen: "Login", icon: "log-in" }, { screen: "E-Voucher", icon: "card" }, { screen: "Kategori", icon: "list" }, { screen: "Promo & Diskon", icon: "pricetag" }, { screen: "Lebih Hemat di Aplikasi", icon: "phone-portrait" }, { screen: "Cek Transaksi", icon: "cart" }, { screen: "Buka Bantuan", icon: "help-circle" }, { screen: "Hubungi Bukalapak", icon: "call" }, { screen: "Lainnya", icon: "more" }];
export default class SideBar extends React.Component {
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
					// dataArray={routes}
					// renderRow={data => {
					// 	return (
					// 		<ListItem
					// 			button
					// 			onPress={() => this.props.navigation.navigate(data.screen)}>
					// 			<Icon name={data.icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
					// 			<Text>{data.screen}</Text>
					// 		</ListItem>
					// 	);
					// }}
					>
						
							<ListItem onPress={() => this.props.navigation.navigate('Home')}>
									<Icon name={routes[0].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
									<Text>{routes[0].screen}</Text>
							</ListItem>

							<ListItem onPress={()=>this.props.navigation.navigate('Login')}>
								<Icon name={routes[1].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[1].screen}</Text>
							</ListItem>
							<ListItem onPress={this.toogle.bind(this)}>
								<Icon name={routes[2].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[2].screen}</Text>
							</ListItem>
							{
								this.state.isEvoucherPress == true
									?
									<List>
										<ListItem onPress={() => this.props.navigation.navigate('Pulsa')} style={{ marginLeft: 64 }}>
											<Text>Pulsa</Text>
										</ListItem>
										<ListItem style={{ marginLeft: 64 }}>
											<Text>Paket Data</Text>
										</ListItem>
										<ListItem style={{ marginLeft: 64 }}>
											<Text>Token Listrik</Text>
										</ListItem>
										<ListItem style={{ marginLeft: 64 }}>
											<Text>Voucher Game</Text>
										</ListItem>
										<ListItem style={{ marginLeft: 64 }}>
											<Text>Tiket Kereta</Text>
										</ListItem>
										<ListItem style={{ marginLeft: 64 }}>
											<Text>Tiket Pesawat</Text>
										</ListItem>
									</List>


									:
									null
							}
							<ListItem>
								<Icon name={routes[3].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[3].screen}</Text>
							</ListItem>
							<ListItem>
								<Icon name={routes[4].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[4].screen}</Text>
							</ListItem>
							<ListItem>
								<Icon name={routes[5].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[5].screen}</Text>
							</ListItem>
							<ListItem>
								<Icon name={routes[6].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[6].screen}</Text>
							</ListItem>
							<ListItem>
								<Icon name={routes[7].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[7].screen}</Text>
							</ListItem>
							<ListItem>
								<Icon name={routes[8].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[8].screen}</Text>
							</ListItem>
							<ListItem>
								<Icon name={routes[9].icon} style={{ color: '#D71149', marginRight: 16, marginLeft: 16 }} />
								<Text>{routes[9].screen}</Text>
							</ListItem>
					</List>
				</Content>
			</Container>
				);
			}
		}
