import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View,
    Text
} from 'react-native';

import AddView from 'daAdmin/src/Component/View/AddView';
import HomeView from 'daAdmin/src/Component/View/HomeView';


export default class Home extends Component {
    render(){
      return(
          <View style={{flex:1}}>
              <View style={{flex:9}}>
                <HomeView/>
              </View>
              <View style={{flex:1,alignItems:'center'}}>
                  <AddView/>
              </View>
          </View>
      );

    }
}
