import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import AddView from 'daAdmin/src/Component/View/AddView';

export default class Home extends Component {
    render(){
      return(
          <ScrollView>

            <View style={{borderWidth:1,flexDirection:'row',marginTop:5,backgroundColor:'#fffdff',
          marginLeft:5,marginRight:5}}>

              <TouchableOpacity onPress={()=>this._onLongPressButton}>
              <Image style={{height:100,width:100}}
                 source={require('daAdmin/src/Image/phanmac.jpg')}
               />
               </TouchableOpacity>

               <View style={{justifyContent:'center',marginLeft:5}}>
                <Text style={styles.text_view}>Mã: 1</Text>
                <Text style={styles.text_view}>Tên: Phấn Mac siêu thâm da</Text>
                <Text style={styles.text_view}>Giá: 500.000</Text>
                <Text style={styles.text_view}>Nhãn hiệu: Mac</Text>
                <Text style={styles.text_view}>Xuất xứ: Đức</Text>
               </View>
               <View style={{justifyContent:'center',marginLeft:30}}>
                 <TouchableOpacity onPress={()=>this._onPressButton}>
                 <Image style={{height:30,width:30,}}
                    source={require('daAdmin/src/Image/delete-button.png')}
                  />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{borderWidth:1,flexDirection:'row',marginTop:5,backgroundColor:'#fffdff',
          marginLeft:5,marginRight:5}}>

              <TouchableOpacity onPress={()=>this._onLongPressButton}>
              <Image style={{height:100,width:100}}
                 source={require('daAdmin/src/Image/mac.jpg')}
               />
               </TouchableOpacity>

               <View style={{justifyContent:'center',marginLeft:5}}>
                <Text style={styles.text_view}>Mã: 2</Text>
                <Text style={styles.text_view}>Tên: Son Mac siêu thâm môi</Text>
                <Text style={styles.text_view}>Giá: 350.000</Text>
                <Text style={styles.text_view}>Nhãn hiệu: Mac</Text>
                <Text style={styles.text_view}>Xuất xứ: Đức</Text>
               </View>
               <View style={{justifyContent:'center',marginLeft:30}}>
                 <TouchableOpacity onPress={()=>this._onPressButton}>
                 <Image style={{height:30,width:30,}}
                    source={require('daAdmin/src/Image/delete-button.png')}
                  />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{borderWidth:1,flexDirection:'row',marginTop:5,backgroundColor:'#fffdff',
          marginLeft:5,marginRight:5}}>

              <TouchableOpacity onPress={()=>this._onLongPressButton}>
              <Image style={{height:100,width:100}}
                 source={require('daAdmin/src/Image/phan-phu-dior.jpg')}
               />
               </TouchableOpacity>

               <View style={{justifyContent:'center',marginLeft:5}}>
                <Text style={styles.text_view}>Mã: 3</Text>
                <Text style={styles.text_view}>Tên: Phấn phủ không trôi     </Text>
                <Text style={styles.text_view}>Giá: 1.200.000</Text>
                <Text style={styles.text_view}>Nhãn hiệu: Dior</Text>
                <Text style={styles.text_view}>Xuất xứ: Pháp</Text>
               </View>
               <View style={{justifyContent:'center',marginLeft:30}}>
                 <TouchableOpacity onPress={()=>this._onPressButton}>
                 <Image style={{height:30,width:30,}}
                    source={require('daAdmin/src/Image/delete-button.png')}
                  />
                  </TouchableOpacity>
              </View>
            </View>

            <View style={{borderWidth:1,flexDirection:'row',marginTop:5,backgroundColor:'#fffdff',
          marginLeft:5,marginRight:5}}>

              <TouchableOpacity onPress={()=>this._onLongPressButton}>
              <Image style={{height:100,width:100}}
                 source={require('daAdmin/src/Image/dior.png')}
               />
               </TouchableOpacity>

               <View style={{justifyContent:'center',marginLeft:5}}>
                <Text style={styles.text_view}>Mã: 4</Text>
                <Text style={styles.text_view}>Tên: Nước hoa thơm lâu      </Text>
                <Text style={styles.text_view}>Giá: 2.500.000</Text>
                <Text style={styles.text_view}>Nhãn hiệu: Dior</Text>
                <Text style={styles.text_view}>Xuất xứ: Pháp</Text>
               </View>
               <View style={{justifyContent:'center',marginLeft:30}}>
                 <TouchableOpacity onPress={()=>this._onPressButton}>
                 <Image style={{height:30,width:30,}}
                    source={require('daAdmin/src/Image/delete-button.png')}
                  />
                  </TouchableOpacity>
              </View>
            </View>

            <View style={{borderWidth:1,flexDirection:'row',marginTop:5,backgroundColor:'#fffdff',
          marginLeft:5,marginRight:5}}>

              <TouchableOpacity onPress={()=>this._onLongPressButton}>
              <Image style={{height:100,width:100}}
                 source={require('daAdmin/src/Image/son-oriflame.jpg')}
               />
               </TouchableOpacity>

               <View style={{justifyContent:'center',marginLeft:5}}>
                <Text style={styles.text_view}>Mã: 5</Text>
                <Text style={styles.text_view}>Tên: Son nước chống trôi    </Text>
                <Text style={styles.text_view}>Giá: 1.200.000</Text>
                <Text style={styles.text_view}>Nhãn hiệu: Oriflame</Text>
                <Text style={styles.text_view}>Xuất xứ: Úc</Text>
               </View>
               <View style={{justifyContent:'center',marginLeft:30}}>
                 <TouchableOpacity onPress={()=>this._onPressButton}>
                 <Image style={{height:30,width:30,}}
                    source={require('daAdmin/src/Image/delete-button.png')}
                  />
                  </TouchableOpacity>
              </View>
            </View>

          </ScrollView>
      );

    }
}

const styles = StyleSheet.create({
  text_view:{
    color:'black',
    fontSize:13
  }
});
