import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


const notification = () => {
    const router = useRouter();
      const navigation = useNavigation();
    
      useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  return (
    <View>
        <Text style={styles.text}>Notification</Text>
    </View>
  )
}

export default notification

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:50,
    }
})