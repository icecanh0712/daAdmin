import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';


export default class Add extends Component {
    render(){
      return(
        <View>
        <View style={{height:55,backgroundColor:'#FF3364',flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this._onPressButton}>
            <Image style={{height:30,width:30,marginRight:50,marginLeft:15}}
               source={require('daAdmin/src/Image/back.png')}
             />
             </TouchableOpacity>

            <Text style={{marginLeft:10,color:'white',fontSize:23,}}>THÊM SẢN PHẨM</Text>
        </View>

          <View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'}}>
              <View>
              <TouchableOpacity onPress={()=>this._onPressButton}>

              <Image style={{height:150,width:150}}
                 source={require('daAdmin/src/Image/image-add.png')}
               />
              </TouchableOpacity>
               </View>
            </View>
          </View>
          <ScrollView>
            <View style={{marginTop:10,marginLeft:10}}>
              <Text>Tên sản phẩm</Text>
              <TextInput
                style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
              />
              <Text>Tên sản phẩm</Text>
              <TextInput
                style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
              />
              <Text>Giá</Text>
              <TextInput
                style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
              />
              <Text>Nhãn hiệu</Text>
              <TextInput
                style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
              />
              <Text>Xuất xứ</Text>
              <TextInput
                style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
              />
            </View>
          </ScrollView>

          <View style={{flexDirection:'row',marginTop:48,height:50,backgroundColor:'#FF3364'}}>

              <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this._onPressButton}>
                  <Text style={{fontSize:20,color:'black'}}>             Hủy bỏ              </Text>
                </TouchableOpacity>
              </View>

              <View style={{backgroundColor:'#FF3364',flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>this._onPressButton}>
                <Text style={{fontSize:20,color:'white'}}>                OK               </Text>
                </TouchableOpacity>
              </View>

          </View>

        </View>
      );

    }
}
