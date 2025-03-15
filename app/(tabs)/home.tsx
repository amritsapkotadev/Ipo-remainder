import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const home = () => {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);
  return (
    <View>
       <Button title="Home" onPress={()=>{ }}/>
      <Text>Home</Text>


    </View>
  )
}

export default home

const styles = StyleSheet.create({})