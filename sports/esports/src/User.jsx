import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Sicon from './Sicon';
import Folower from './Folower';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserData } from './Redux/action';
export default function User() {
  const [activeTab, setActiveTab] = useState('Posts'); 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://b3444fb4-ffba-4a27-bee3-5a9c620294d1.mock.pstmn.io/users?userid=1');
        dispatch(setUserData(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <View style={styles.container}>
      <Image source={require('./tt.png')} style={styles.image} />
      <Image source={require('./tt1.png')} />
      <Image source={require('./tt2.png')} style={styles.image2} />
      <View style={styles.container2}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
        <Text>{user.bio}</Text>
      </View>
      <Sicon/>
      <Folower/>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Posts' && styles.activeTabButton,
          ]}
          onPress={() => handleTabClick('Posts')}
        >
          <Text style={styles.tabButtonText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Social' && styles.activeTabButton,
          ]}
          onPress={() => handleTabClick('Social')}
        >
          <Text style={styles.tabButtonText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'About' && styles.activeTabButton,
          ]}
          onPress={() => handleTabClick('About')}
        >
          <Text style={styles.tabButtonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Gallery' && styles.activeTabButton,
          ]}
          onPress={() => handleTabClick('Gallery')}
        >
          <Text style={styles.tabButtonText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Device' && styles.activeTabButton,
          ]}
          onPress={() => handleTabClick('Device')}
        >
          <Text style={styles.tabButtonText}>Device</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 25,
    position: 'relative',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 45,
  },
  image2: {
    position: 'absolute',
    top: 190,
  },
  container2: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    color: 'orange',
    fontWeight: '800',
    fontSize: 20,
  },
  separator: {
    height: '60%',
    marginTop: 10,
    width: 1,
    backgroundColor: 'gray', // Color of the vertical dash
  },
  container4: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    borderRadius: 10,
    gap: 10,
  },
  tabButton: {
    paddingVertical: 5,
    borderRadius: 5,
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },
  activeTabButton: {
    borderBottomColor: 'black',
  },
  tabButtonText: {
    color: '#FF8A25',
  },
});
