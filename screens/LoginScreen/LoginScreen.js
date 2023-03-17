import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Image } from 'react-native'
import Eye from '../../assets/Eye.png'
import EyeActive from '../../assets/EyeActive.png';
import styles from './styles';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkInvalidEmail, setcheckInvalidEmail] = useState(false);
  const [checkInvalidpass, setcheckInvalidpass] = useState(false);

  const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,13}$/;
  const handleCheckEmail = text => {
    
    setEmail(text);
    if ((emailRegex.test(text))) {
      setcheckInvalidEmail(false);
    } else {
      setcheckInvalidEmail(true);
    }
  };

  const checkPasswordValidity = text => {
   setPassword(text);
   if (passwordRegex.test(text)) {
    setcheckInvalidpass(false);
  } else {
    setcheckInvalidpass(true);
  }
};
  const handleLogin = value => {

      alert("Successfully logged in!!");
      navigation.navigate('Category')
    }
  

  return (
    <SafeAreaView style={styles.main}>
      <View style={{paddingHorizontal: 25,}}>
        <View style={styles.logocontainer}>
          <Image source = {require('../../assets/logo.webp')}
            style={styles.logo} />
          <Text
          style={styles.poolittext}>
          POOLit
          </Text>
        </View>

        <Text
          style={styles.welcomeback}>
         Welcome Back
        </Text>
        <Text
          style={styles.logintocontinue}>Login to continue</Text>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkInvalidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => checkPasswordValidity(text)}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
          <Image source={seePassword ? Eye : EyeActive} style={styles.icon} />
        </TouchableOpacity>
      </View>
      { !email || !password || checkInvalidEmail || checkInvalidpass ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )}
        <View
          style={styles.donthaveaccount}>
          <Text>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;