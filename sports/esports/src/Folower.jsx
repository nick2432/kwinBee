import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserData } from './Redux/action';
export default function Follower() {
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
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.count}>{user.followcount}</Text>
        <Text style={styles.text}>Followers</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.box}>
        <Text style={styles.count}>{user.followingcount}</Text>
        <Text style={styles.text}>Following</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    alignItems: 'center',
    flex: 1,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  divider: {
    height: 50,
    width: 1,
    backgroundColor: '#ccc',
  },
});
