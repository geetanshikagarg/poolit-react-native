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
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSignin = value => {
    alert("Email is verified! Login to continue")
    navigation.navigate('Login')
    }
    const handleCheckEmail = text => {
     setEmail(text);
      if ((emailRegex.test(text))) {
        setCheckValidEmail(false);
      } else {
        setCheckValidEmail(true);
      }
    };
  return (
    <SafeAreaView style={styles.main}>
      <View style={{paddingHorizontal: '8%'}}>
      <View style={styles.logocontainer}>
          <Image source = {require('../../assets/logo.webp')}
            style={styles.logo} />
          <Text
          style={styles.poolittext}>
          POOLit
          </Text>
        </View>

        <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <Text style={styles.viewverifiedorg}>
      View verified organizations
     </Text>

     
      <CustomButton label={"Check"} onPress={() => handleSignin()} />
        <View
          style={styles.alreadyhaveanaccount}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.login}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
