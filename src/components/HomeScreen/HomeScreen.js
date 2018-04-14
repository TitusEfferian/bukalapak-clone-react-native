import React from "react";
import { StatusBar, Image, TouchableOpacity, FlatList } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View, Spinner } from "native-base";
import { requestDataProduct, requestDataBrand } from '../../actions/index';
import { connect } from 'react-redux';
class HomeScreen extends React.Component {
	componentWillMount() {
		this.props.requestDataProduct()
		this.props.requestDataBrand()
	}

	renderRow = ({ item }) => {
		return (
			<View style={{width:94,height:94,borderWidth:1,marginTop:16,borderColor:'#eeeeee',justifyContent:'center',alignItems:'center'}}>
				<Image style={{ width: 48, height: 48}} source={{ uri: item.logo_url }} />
			</View>

		);
	}
	render() {
		return (
			<Container>
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
						<Button transparent>
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

				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
						<View>
							<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Lebih Hemat dengan Nego</Text>
							<Text style={{ fontSize: 14 }}>Hanya di aplikasi</Text>
						</View>


						<View style={{ backgroundColor: '#D71149', borderRadius: 1, marginTop: 16, marginBottom: 16, marginRight: 8, padding: 8 }}>
							<TouchableOpacity>
								<Text style={{ color: '#fff' }}>Download</Text>
							</TouchableOpacity>
						</View>

					</View>
					<View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="card" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										BUKALAPAK CREDITS
                </Text>
								</View>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="phone-portrait" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										PULSA
                </Text>
								</View>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="phone-portrait" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										PAKET DATA
                </Text>
								</View>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="game-controller-b" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										VOUCHER GAME
                </Text>
								</View>
							</View>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 32 }}>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="outlet" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										LISTRIK
                </Text>
								</View>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="cash" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										BUKAREKSA
                </Text>
								</View>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="train" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										KERETA API
                </Text>
								</View>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Icon name="plane" />
									<Text style={{ fontSize: 12, textAlign: 'center' }}>
										PESAWAT
                </Text>
								</View>
							</View>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
							<View>
								<Text style={{ fontWeight: 'bold' }}>
									Brand Resmi
								</Text>
							</View>
							<View>
								<Text style={{ color: '#d71149' }}>
									Selengkapnya
								</Text>
							</View>
						</View>
					</View>
					
					{
						
						this.props.product.data == null && this.props.brand.data == null
							?
							<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
								<Spinner />
							</View>
							:
							<View>
								<FlatList
									data={this.props.brand.data.data}
									renderItem={this.renderRow}
									horizontal={true}

								/>

							</View>
					}
				</View>

			</Container>
		);
	}
}
function mapStateToProps(state) {
	return {
		product: state.viewProductReducer,
		brand: state.viewBrandReducer
	}
}
function mapDispatchToProps(dispatch) {
	return {
		requestDataProduct: () => dispatch(requestDataProduct()),
		requestDataBrand: () => dispatch(requestDataBrand())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
