import React from "react";
import { StatusBar, Image, TouchableOpacity, FlatList, Dimensions, Linking, ScrollView } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View, Spinner } from "native-base";
import { requestDataProduct, requestDataBrand, requestDataBanner } from '../../actions/index';
import { connect } from 'react-redux';
import Carousel from 'react-native-banner-carousel';
class HomeScreen extends React.Component {
	componentWillMount() {
		this.props.requestDataProduct()
		this.props.requestDataBrand()
		this.props.requestDataBanner()
	}

	renderBanner = ({ item }) => {
		return (
			<View style={{ width: 94, height: 94, borderWidth: 1, marginTop: 16, borderColor: '#eeeeee', justifyContent: 'center', alignItems: 'center' }}>
				<Image style={{ width: 48, height: 48 }} source={{ uri: item.logo_url }} />
			</View>

		);
	}
	renderProduct = ({ item }) => {
		console.log(item)
		return (
			<View style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').width / 2,paddingLeft:32,paddingRight:32,borderWidth:1,borderColor:'grey'}}>
				<View style={{ justifyContent: 'center', alignItems: 'center',marginTop:16 }}>
					<Image style={{ height: 136, width: 136 }} source={{ uri: item.images[0] }} />
				</View>
				<View>
					<Text style={{ textAlign: 'center', color: '#333', fontSize: 12,paddingTop:32 }}>{item.name}</Text>
				</View>

			</View>


		);

	}
	renderPage(image, index) {

		return (
			<View key={index}>
				<Image style={{ width: Dimensions.get('window').width, height: 166 }} source={{ uri: image.image.mobile_url }} />

			</View>
		);
	}
	render() {
		return (
	
			<Container>
				{
					StatusBar.setBackgroundColor('#D71149',true)
				}
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

						<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
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

				<View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
					<ScrollView>
						<View>
							{
								this.props.banner.data == null
									?
									<View>
										<Spinner />
									</View>
									:
									<Carousel
										autoplay
										autoplayTimeout={5000}
										loop
										index={0}
									//pageSize={Dimensions.get('window').width}
									>
										{this.props.banner.data.data.map((image, index) => this.renderPage(image, index))}
									</Carousel>
							}


						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
							<View style={{ marginLeft: 8 }}>
								<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Lebih Hemat dengan Nego</Text>
								<Text style={{ fontSize: 14 }}>Hanya di aplikasi</Text>
							</View>


							<View style={{ backgroundColor: '#D71149', borderRadius: 1, marginTop: 16, marginBottom: 16, marginRight: 8, padding: 8 }}>
								<TouchableOpacity onPress={() => { Linking.openURL('https://play.google.com/store/apps/details?id=com.bukalapak.android&referrer=AIDWB-GRO1') }}>
									<Text style={{ color: '#fff' }}>Download</Text>
								</TouchableOpacity>
							</View>

						</View>
						<View style={{ backgroundColor: 'white', paddingTop: 16 }}>
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="card" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											BUKALAPAK CREDITS
                </Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="phone-portrait" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											PULSA
                </Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="phone-portrait" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											PAKET DATA
                </Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="game-controller-b" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											VOUCHER GAME
                </Text>
									</View>
								</View>
							</View>
							<View style={{ flexDirection: 'row', marginTop: 32 }}>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="outlet" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											LISTRIK
                </Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="cash" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											BUKAREKSA
                </Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="train" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											KERETA API
                </Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<View style={{ justifyContent: 'center', alignItems: 'center' }}>
										<Icon name="plane" style={{ color: '#D71149' }} />
										<Text style={{ fontSize: 12, textAlign: 'center' }}>
											PESAWAT
                </Text>
									</View>
								</View>
							</View>

						</View>

						{

							this.props.product.data == null || this.props.brand.data == null
								?
								<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
									<Spinner />
								</View>
								:

								<View style={{ flex: 1 }}>
									<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 32, backgroundColor: 'white' }}>
										<View style={{ marginLeft: 8 }}>
											<Text style={{ fontWeight: 'bold' }}>
												Brand Resmi
								</Text>
										</View>
										<View style={{ marginRight: 8 }}>
											<Text style={{ color: '#d71149' }}>
												Selengkapnya
								</Text>
										</View>
									</View>
									<View style={{ backgroundColor: 'white' }}>
										<View>
											<FlatList
												data={this.props.brand.data.data}
												renderItem={this.renderBanner}
												horizontal={true}

											/>

										</View>
									</View>
									<View style={{ backgroundColor: 'white' }}>
										<View style={{ paddingTop: 16, flexDirection: 'row', justifyContent: 'space-between' ,marginBottom:16}}>
											<View style={{ marginLeft: 8 }}>
												<Text style={{ fontWeight: 'bold' }}>Popular Products</Text>
											</View>
											<View style={{ marginRight: 8 }}>
												<Text style={{ color: '#d71149' }}>
													Selengkapnya
								</Text>
											</View>
										</View>
										<FlatList
											data={this.props.product.data.products}
											renderItem={this.renderProduct}
											horizontal={false}

											numColumns={2}

										/>
									</View>
								</View>

						}
					</ScrollView>
				</View>

			</Container>
		);
	}
}
function mapStateToProps(state) {
	return {
		product: state.viewProductReducer,
		brand: state.viewBrandReducer,
		banner: state.viewBannerReducer
	}
}
function mapDispatchToProps(dispatch) {
	return {
		requestDataProduct: () => dispatch(requestDataProduct()),
		requestDataBrand: () => dispatch(requestDataBrand()),
		requestDataBanner: () => dispatch(requestDataBanner())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
