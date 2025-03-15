import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here, you can add authentication logic
    if (email && password) {
      router.push('/mainpage'); // Redirect to Mainpage after login
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to IPO Nepal</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <View style={styles.noaccountContainer}>
        <Text style={styles.noaccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1', // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2, // For Android shadow
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noaccountContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  noaccountText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  signupText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginLeft: 5,
  },
});
