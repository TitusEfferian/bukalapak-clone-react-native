import React from "react";
import { StatusBar, Image, TouchableOpacity, FlatList, Dimensions, Linking, ScrollView } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View, Spinner } from "native-base";
import Carousel from 'react-native-banner-carousel';
class ContentClass extends React.Component {

  renderBrand = ({ item }) => {
    return (
      <View style={{ width: 94, height: 94, borderWidth: 1, marginTop: 16, borderColor: '#eeeeee', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 48, height: 48 }} source={{ uri: item.logo_url }} />
      </View>

    );
  }
  renderProduct = ({ item }) => {

    return (
      <View style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').width / 2, paddingLeft: 32, paddingRight: 32, borderWidth: 1, borderColor: 'grey' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          <Image style={{ height: 136, width: 136 }} source={{ uri: item.images[0] }} />
        </View>
        <View>
          <Text style={{ textAlign: 'center', color: '#333', fontSize: 12, paddingTop: 32 }}>{item.name}</Text>
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
  renderSection({ item }) {
    let text = item.description;
    return (
      <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <View style={{ paddingTop: 16 }}>

          <View style={{ marginLeft: 8 }}>
            <View style={{ zIndex: 2, position: 'absolute', flexDirection: 'row', width: 31, height: 31, borderRadius: 60, backgroundColor: '#ff566a', marginTop: 8, marginLeft: 96 }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 5, marginTop: 6 }}>
                {item.deal.percentage}%
						</Text>
            </View>
            <View style={{ zIndex: 1, position: 'relative' }}>
              <Image style={{ width: 136, height: 136 }} source={{ uri: item.images.large_urls[0] }} />
            </View>
          </View>

          {/* <View style={{width:112}}>
					<Text style={{textAlign:'center',fontSize:12}}>
						{item.name}
					</Text>
				</View> */}

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: '#d71149', fontWeight: 'bold', marginTop: 8 }}>Rp. {item.deal.discount_price}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 13, color: '#999', textDecorationLine: 'line-through' }}>Rp. {item.deal.original_price}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
  renderKenapaHarusBukalapak({ item }) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16, flex: 1, height: 102.94 }}>
        <Image style={{ width: item.width, height: item.height, marginBottom: 16 }} source={{ uri: item.image_url }} />
        <Text style={{ textAlign: 'center', fontSize: 12 }}>
          {item.description}
        </Text>
      </View>
    );


    return (
      <View>
        {view}
      </View>
    );


  }
  render() {

    let kenapa_bukalapak = [
      {
        image_url: "https://s0.bukalapak.com/images/mobile/illustrations/il-jaminan-100@2x.png",
        description: "Jaminan 100% Aman",
        width: 52,
        height: 47.75,
        key: 0
      },
      {
        image_url: "https://s2.bukalapak.com/images/mobile/illustrations/il-bukadompet@2x.png",
        description: "Kemudahan Pembayaran",
        width: 52,
        height: 54.47,
        key: 1
      },
      {
        image_url: "https://s3.bukalapak.com/images/mobile/illustrations/il-c-s@2x.png",
        description: "Jaminan 100% Aman",
        width: 52,
        height: 62.94,
        key: 2
      },
      {
        image_url: "https://s0.bukalapak.com/images/mobile/illustrations/il-pengiriman@2x.png",
        description: "Berbagai Jasa Pengiriman",
        width: 52,
        height: 53.08,
        key: 3
      },
      {
        image_url: "https://s4.bukalapak.com/images/mobile/illustrations/il-komunitastiptrik@2x.png",
        description: "6 Manfaat Untuk Pelakapak",
        width: 52,
        height: 50.94,
        key: 4
      },
      {
        image_url: "https://s2.bukalapak.com/images/mobile/illustrations/il-iosandroid@2x.png",
        description: "Kemudahan Akses Mobile",
        width: 52,
        height: 47.66,
        key: 5
      }
    ]
    return (

      <Container>
        <StatusBar hidden={true} barStyle={'light-content'} />
        <Header style={{ backgroundColor: '#D71149' }}>

          <Left style={{ flexDirection: 'row' }}>
            <Button
              transparent
              onPress={() => this.props.lemparProps.navigation.navigate("DrawerOpen")}>
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

        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
          <ScrollView>
            <View>
              {
                this.props.lemparProps.banner.data == null
                  ?
                  <View>
                    <Spinner color='#d71149' />
                  </View>
                  :
                  <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                  //pageSize={Dimensions.get('window').width}
                  >
                    {this.props.lemparProps.banner.data.data.map((image, index) => this.renderPage(image, index))}
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
            <View style={{ backgroundColor: 'white', paddingTop: 16, paddingBottom: 16 }}>
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

              this.props.lemparProps.product.data == null || this.props.lemparProps.brand.data == null || this.props.lemparProps.section1.data == null || this.props.lemparProps.section2.data == null
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Spinner color='#d71149' />
                </View>
                :

                /*********RENDER BRAND*************** */
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
                        keyExtractor={(item, index) => index.toString()}
                        data={this.props.lemparProps.brand.data.data}
                        renderItem={this.renderBrand}
                        horizontal={true}


                      />

                    </View>
                  </View>
                  {/*****RENDER SECITION****/}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 32, backgroundColor: 'white' }}>
                    <View style={{ marginLeft: 8, width: 181 }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        {this.props.lemparProps.section1.data.data.title}
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
                        data={this.props.lemparProps.section1.data.data.products}
                        renderItem={this.renderSection}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}

                      />

                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 32, backgroundColor: 'white' }}>
                    <View style={{ marginLeft: 8, width: 181 }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        {this.props.lemparProps.section2.data.data.title}
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
                        data={this.props.lemparProps.section2.data.data.products}
                        renderItem={this.renderSection}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}

                      />

                    </View>
                  </View>


                  {/****RENDER WHY US*****/}
                  <View style={{ backgroundColor: 'white' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        Kenapa Harus Bukalapak?
											</Text>
                    </View>
                    <View style={{ marginTop: 16, flexDirection: 'row' }}>
                      <FlatList
                        data={kenapa_bukalapak}
                        renderItem={this.renderKenapaHarusBukalapak}
                        horizontal={true}
                        keyExtractor={(item, index) => item.key.toString()}
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                  </View>
                  <View>
                    <View>
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, marginTop: 32, marginBottom: 32 }}>
                          Originally Clone By : Titus Efferian with React-native
												</Text>
                      </View>
                    </View>
                  </View>
                </View>


            }

          </ScrollView>
        </View>

      </Container>
    );
  }
}

export default ContentClass;