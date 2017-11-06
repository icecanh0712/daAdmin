import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';


export default class Cart extends Component {
    render(){
      return(
        <ScrollView>
            <View style={{borderWidth:1,marginTop:5,marginLeft:5,marginRight:5}}>

               <View style={{paddingLeft:5,justifyContent:'center'}}>
                <Text style={styles.text_view}>#1</Text>
                <Text style={styles.text_view}>Tổng tiền: 1.000.000</Text>
                <Text style={styles.text_view}>Tên khách: Nguyễn Văn A</Text>
                <Text style={styles.text_view}>Địa chỉ: 123 Đường 3/2 P.14 Q.10 TP.HCM</Text>
                <Text style={styles.text_view}>Tình trạng: Khách đã nhận hàng</Text>
               </View>
            </View>
            <View style={{borderWidth:1,marginTop:5,marginLeft:5,marginRight:5}}>

               <View style={{paddingLeft:5,justifyContent:'center'}}>
                <Text style={styles.text_view}>#2</Text>
                <Text style={styles.text_view}>Tổng tiền: 2.750.000</Text>
                <Text style={styles.text_view}>Tên khách: Nguyễn Văn B</Text>
                <Text style={styles.text_view}>Địa chỉ: 456 Đường 3/2 P.14 Q.10 TP.HCM</Text>
                <Text style={styles.text_view}>Tình trạng: Khách chưa nhận hàng</Text>
               </View>
            </View>
            <View style={{borderWidth:1,marginTop:5,marginLeft:5,marginRight:5}}>

               <View style={{paddingLeft:5,justifyContent:'center'}}>
                <Text style={styles.text_view}>#3</Text>
                <Text style={styles.text_view}>Tổng tiền: 300.000</Text>
                <Text style={styles.text_view}>Tên khách: Nguyễn Văn C</Text>
                <Text style={styles.text_view}>Địa chỉ: 456 Đường 3/2 P.14 Q.10 TP.HCM</Text>
                <Text style={styles.text_view}>Tình trạng: Khách đã nhận hàng</Text>
               </View>
            </View>
            <View style={{borderWidth:1,marginTop:5,marginLeft:5,marginRight:5}}>

               <View style={{paddingLeft:5,justifyContent:'center'}}>
                <Text style={styles.text_view}>#4</Text>
                <Text style={styles.text_view}>Tổng tiền: 165.000</Text>
                <Text style={styles.text_view}>Tên khách: Nguyễn Văn D</Text>
                <Text style={styles.text_view}>Địa chỉ: 456 Đường 3/2 P.14 Q.10 TP.HCM</Text>
                <Text style={styles.text_view}>Tình trạng: Khách chưa nhận hàng</Text>
               </View>
            </View>
            <View style={{borderWidth:1,marginTop:5,marginLeft:5,marginRight:5}}>

               <View style={{paddingLeft:5,justifyContent:'center'}}>
                <Text style={styles.text_view}>#5</Text>
                <Text style={styles.text_view}>Tổng tiền: 2.100.000</Text>
                <Text style={styles.text_view}>Tên khách: Nguyễn Văn E</Text>
                <Text style={styles.text_view}>Địa chỉ: 456 Đường 3/2 P.14 Q.10 TP.HCM</Text>
                <Text style={styles.text_view}>Tình trạng: Khách chưa nhận hàng</Text>
               </View>
            </View>
            <View style={{borderWidth:1,marginTop:5,marginLeft:5,marginRight:5}}>

               <View style={{paddingLeft:5,justifyContent:'center'}}>
                <Text style={styles.text_view}>#6</Text>
                <Text style={styles.text_view}>Tổng tiền: 1.420.000</Text>
                <Text style={styles.text_view}>Tên khách: Nguyễn Văn F</Text>
                <Text style={styles.text_view}>Địa chỉ: 456 Đường 3/2 P.14 Q.10 TP.HCM</Text>
                <Text style={styles.text_view}>Tình trạng: Khách đã nhận hàng</Text>
               </View>
            </View>
        </ScrollView>
      );
    }
}
const styles = StyleSheet.create({
  text_view:{
    color:'black',
    fontSize:15
  }
});
