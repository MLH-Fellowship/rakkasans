// components/login.js
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Colors from '../constants/Colors';
import Button from '../components/Button';

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const isNewUser = true;

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      setLoading(true);

      // Request API.
      axios
        .post('http://192.168.1.208:3001/auth/local', {
          identifier: 'dev@dev.com',
          password: 'twuh0plad8ceey*SQAG',
        })
        .then((response) => {
        // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          navigation.reset({
            index: 0,
            routes: [{ name: isNewUser ? 'Welcome Video' : 'Tab Bar' }],
          });
        })
        .catch((error) => {
        // Handle error.
          console.log('An error occurred:', error.response);
          setLoading(false);
          Alert.alert('Incorrect Credentials!');
        });
    }
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.primary,
      marginHorizontal: 30,
      padding: 15,
      width: 275,
      height: 55,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: { width: 2, height: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      marginTop: 32,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },

    textInput: {
      width: 300,
      height: 45,
      borderRadius: 9,
      borderBottomWidth: 1,
      borderColor: Colors.primary,
      marginHorizontal: 20,
      paddingLeft: 15,
      marginVertical: 5,
      fontSize: 16,
    },
    logoText: {
      fontSize: 60,
      paddingTop: '84%',
      paddingLeft: 25,
    },
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 18, fontFamily: 'reggae-one' }}>
          101st Airborne
        </Text>
        <Text style={{ fontSize: 50, fontFamily: 'reggae-one' }}>
          RAKKASANS
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 250 }}>⛩️</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          maxLength={30}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button title="Sign in" loading={loading} onPress={userLogin} />
        <View style={{ height: 10 }} />
        <Text
          style={{ height: 60, paddingVertical: 20, color: Colors.primary }}
        >
          Forgot password
        </Text>
      </View>
    </View>
  );
};

export default Login;
