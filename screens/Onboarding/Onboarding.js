import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native'
import styles from './styles';
const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
    <View
      style={styles.container}>
     <Image source = {require('../../assets/logo.webp')}
      style={{width: 200 ,height: 100}} />
     </View>
      
     <TouchableOpacity
        style={styles.welcometopoolit}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={styles.welcometopoolittext}>
          Welcome to POOLit
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    
    </SafeAreaView>

  );
};

export default OnboardingScreen;
