import { Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const List = () => {
  const router = useRouter();

  return (
    <View>
   <View style={styles.livemarketupdate}>
    <Text>
      live market // here goes an api call to get live market data
    </Text>
   </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  livemarketupdate:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:50,
  }
});
