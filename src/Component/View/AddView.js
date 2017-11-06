import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


export default class AddView extends Component {
    render(){
      return(
          <View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddStack')}>
            <View style={{backgroundColor:'#FF3364',flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:25}}>              Thêm sản phẩm              </Text>
            </View>
          </TouchableOpacity>
          </View>
      );

    }
}
