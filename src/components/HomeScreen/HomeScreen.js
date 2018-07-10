import React from "react";
import { StatusBar, Image, TouchableOpacity, FlatList, Dimensions, Linking, ScrollView } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View, Spinner } from "native-base";
import { requestDataProduct, requestDataBrand, requestDataBanner, requestDataSection1, requestDataSection2 } from '../../actions/index';
import { connect } from 'react-redux';
import Carousel from 'react-native-banner-carousel';
import ContentClass from "./content";

class HomeScreen extends React.Component {




	componentWillMount() {
		if (this.props.product.data == null && this.props.banner.data == null && this.props.brand.data == null && this.props.section1.data == null && this.props.section2.data == null) {
			console.log('jalan')
			this.props.requestDataProduct()
			this.props.requestDataBrand()
			this.props.requestDataBanner()
			this.props.requestDataSection1()
			this.props.requestDataSection2()
		}

	}
	componentWillUnmount()
	{
		this.props.product.data=undefined;
		this.props.banner.data=undefined;
		this.props.brand.data=undefined;
		this.props.section1.data=undefined;
		this.props.section2.data=undefined;
	}


	render() {
		console.log(this.props)
		return (
			<ContentClass lemparProps={this.props} />
		);
	}
}

function mapStateToProps(state) {

	return {

		product: state.viewProductReducer,
		brand: state.viewBrandReducer,
		banner: state.viewBannerReducer,
		section1: state.section1Reducer,
		section2: state.section2Reducer
	}

}

function mapDispatchToProps(dispatch) {

	return {
		requestDataProduct: () => dispatch(requestDataProduct()),
		requestDataBrand: () => dispatch(requestDataBrand()),
		requestDataBanner: () => dispatch(requestDataBanner()),
		requestDataSection1: () => dispatch(requestDataSection1()),
		requestDataSection2: () => dispatch(requestDataSection2())
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
