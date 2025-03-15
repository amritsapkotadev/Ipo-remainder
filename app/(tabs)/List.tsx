import { Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const List = () => {
  const router = useRouter();

  return (
    <View>
      <Button title="Home" onPress={() => router.push('/firstlandingpage')} />
      <Text>Home</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
