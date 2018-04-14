import React from 'react';
import { } from "react-native";
import { View, Text, Spinner } from "native-base";
import { requestDataProduct } from '../actions/index';
import { connect } from 'react-redux';

class MainContent extends React.Component {
	componentWillMount() {
		this.props.requestDataProduct()
	}
	render() {

		return (	
			<View style={{flex:1}}>
				{
					this.props.product.data==null
					?
						<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
							<Spinner/>
						</View>
					:
						<View>
							<Text>
								{console.log(this.props)}
								{this.props.product.data.status}
							</Text>
						</View>
				}
			</View>
		);
	}
}
function mapStateToProps(state) {
	return {
		product: state.viewProductReducer
	}
}
function mapDispatchToProps(dispatch) {
	return {
		requestDataProduct: () => dispatch(requestDataProduct())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);