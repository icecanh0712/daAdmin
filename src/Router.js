import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { TextInput, TouchableOpacity, StatusBar } from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Home from 'daAdmin/src/Component/Home';
import Cart from 'daAdmin/src/Component/Cart';
import Add from  'daAdmin/src/Component/Manage/Add';

export const HomeStack = StackNavigator({
   Screen_Home: {
       screen: Home,
       navigationOptions : {
           title: 'Trang Chủ',
           headerRight: (
               <TouchableOpacity>
                   <EvilIcons name="search" size={28} color="#FBFFF5"
                   />
               </TouchableOpacity>
               ),
           headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
           headerStyle: {backgroundColor:'#FF3364', paddingRight:15},
       },
   },
 });

 export const CartStack = StackNavigator({
     DisplayCart: {
         screen: Cart,
         navigationOptions: {
             title: 'Đơn Hàng',
             headerTintColor: 'white',
             headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
             headerStyle: {backgroundColor:'#FF3364', paddingRight:10},
         }
     }
 });

 export const AddStack = StackNavigator({
     DisplayAdd: {
         screen: Add,
         navigationOptions: {
             title: 'Thêm sản phẩm',
             headerTintColor: 'white',
             headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
             headerStyle: {backgroundColor:'#FF3364', paddingRight:10},
         }
     }
 });

 export const Tabs = TabNavigator({
     TabHome:{
         screen: HomeStack,
         navigationOptions: {
             tabBarLabel: 'Trang chủ',
             tabBarIcon: ({tintColor}) => (
                 <Foundation name="home" size={24} style={{ color: tintColor }} />
             )
         },

     },
         TabCart:{
             screen: CartStack,
             navigationOptions: {
                 tabBarLabel: 'Giỏ Hàng',
                 tabBarIcon: ({tintColor}) => (
                     <MaterialCommunityIcons name="shopping" size={20} style={{ color: tintColor }}
                     />
                 )
             }
         },
       },
 {
     tabBarPosition: 'bottom',
     animationEnabled: false,
     lazyLoad: true,
     swipeEnabled: false,
     //pressColor:'#1ABC9C',
     tabBarOptions: {
         upperCaseLabel:false,
         showIcon:true,
         showLabel: false,
         iconStyle: {

         },
         labelStyle: {
           fontSize: 11
         },
         style: {
             backgroundColor: '#fefffb',
         },
         pressColor: '#e91e63',
         activeTintColor: '#FF3364',
         inactiveTintColor: '#000000',
     },
 });
