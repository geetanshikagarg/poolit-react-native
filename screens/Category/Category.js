
import React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from './styles';
const Category = ({navigation}) => {
  return (
    <ScrollView>
     <View style={{paddingHorizontal:'3%'}}>
       <TouchableOpacity
        style={styles.whattodocontainer}
        onPress={() => {}}>
        <Text
          style={styles.text1}>
         What do you want to do today
         
        </Text>
        <Image source = {require('../../assets/cardimg.webp')}
          style={styles.image1} />
       </TouchableOpacity>
       <TouchableOpacity
          style={styles.categorycard}
          onPress={() => {}}>
          <Image source = {require('../../assets/poolitcarpool.webp')}
            style={styles.cardimage} />
          <Text
            style={styles.cardtext}>
          Contribute towads one less car on the road
          </Text>
          
       </TouchableOpacity>
       <TouchableOpacity
        style={styles.categorycard}
        onPress={() => navigation.navigate('Classified')}>
        <Image source = {require('../../assets/poolitclassified.webp')}
         style={styles.cardimage} />

        <Text style={styles.cardtext}>
          Let's find a new home
           for your pre-loved items.
         </Text>
        
       </TouchableOpacity>
   </View>
    </ScrollView>

  );
};

export default Category;

