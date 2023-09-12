import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { setUserData } from './Redux/action';
export default function Sicon() {
 const [followbtn,setfollowbtn] = useState('Follow');
 const follow=()=>{
  if(followbtn=='Follow'){setfollowbtn('Unfollow')}
  else{
    setfollowbtn('Follow')
  }
 }
  return (
    <View style={styles.container3}>
        <TouchableOpacity style={styles.followbutton} onPress={follow}>
          <Text style={{ color: 'white' }}>{followbtn}</Text>
        </TouchableOpacity>
        <View style={styles.socialbutton}>
          <TouchableOpacity style={styles.socialButtonStyle}>
            <Text>
              <Icon name="facebook-square" size={30} color="#FF8A25" />{' '}
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.socialButtonStyle}>
            <Text>
              <Icon name="youtube" size={30} color="#FF8A25" />{' '}
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.socialButtonStyle}>
            <Text>
              <Icon name="instagram" size={30} color="#FF8A25" />{' '}
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.socialButtonStyle}>
            <Text>
              <Icon name="linkedin-square" size={30} color="#FF8A25" />{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    socialbutton: {
      flexDirection: 'row',
      backgroundColor: '#EFD595',
      borderRadius: 10,
      padding: 5,
      gap: 10,
    },
    socialButtonStyle: {
      paddingVertical: 5,
      borderRadius: 5,
    },
    separator: {
      height: '60%',
      marginTop: 10,
      width: 1,
      backgroundColor: 'gray', // Color of the vertical dash
    },
    container3: {
      alignItems: 'center',
      alignContent: 'center',
      gap: 15,
    },
    followbutton: {
      backgroundColor: '#FF8A25',
      padding: 5,
      borderRadius: 5,
      width: 100,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5, // Shadow opacity
      shadowRadius: 3, // Shadow radius
      elevation: 5, // For Android
    },
  });
  