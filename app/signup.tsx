import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // You can add API call here to register the user
    Alert.alert('Success', 'Account created successfully!');
    router.push('/login'); // Redirect to login page after successful signup
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
  style={styles.input}
  placeholder="Full Name"
  placeholderTextColor="#7f8c8d"  // Light gray color for visibility
  value={name}
  onChangeText={setName}
/>

<TextInput
  style={styles.input}
  placeholder="Email Address"
  placeholderTextColor="#7f8c8d"  
  keyboardType="email-address"
  value={email}
  onChangeText={setEmail}
/>

<TextInput
  style={styles.input}
  placeholder="Password"
  placeholderTextColor="#7f8c8d"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>

<TextInput
  style={styles.input}
  placeholder="Confirm Password"
  placeholderTextColor="#7f8c8d"
  secureTextEntry
  value={confirmPassword}
  onChangeText={setConfirmPassword}
/>


      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f6fa', // Soft light gray background
      padding: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#2c3e50', // Dark blue-gray color
      marginBottom: 25,
      textAlign: 'center',
    },
    input: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderColor: '#dcdde1', // Soft border color
      borderRadius: 12,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      marginBottom: 15,
      fontSize: 16,
      color: '#2d3436', // Dark text for readability
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3, // Light elevation for depth
    },
    button: {
      backgroundColor: '#2980b9', // Slightly darker blue
      paddingVertical: 14,
      width: '90%',
      borderRadius: 12,
      marginTop: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      elevation: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    loginContainer: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
    },
    loginText: {
      fontSize: 16,
      color: '#636e72', // Muted gray for secondary text
    },
    loginLink: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#3498db',
      marginLeft: 5,
      textDecorationLine: 'underline',
    },
  });
  