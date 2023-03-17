import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Chip } from 'react-native-elements';
import styles from './styles';
const Classified = ({navigation}) => {
  return (
    <SafeAreaView >
      <ScrollView style={styles.main}>
        <View
          style={styles.discover}>
          <Text style={{fontSize: 18}}>
          Discover
          </Text>
          
        </View>

        <View
          style={styles.searchbar}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={styles.searchicon}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={styles.location}>
          <Text style={{fontSize: 18}}>
            By location
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.addlocation}>Add location</Text>
            </TouchableOpacity>
        </View>
      
        <View
          style={styles.chip}>
          <Chip
          title="Karmacircles"
          type="outline" />
          <Chip
          title="Haryana"
          type="outline" />
          <Chip
          title="Karmacircles"
          type="outline" />
          </View>
          
      <Text>Top Categories</Text>
     <View style={styles.cardcontainer}>
 
     <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate()}>
        
        <Image source = {require('../../assets/book.jpg')}
          style={styles.cardimg} />
        <Text
          style={styles.cardtext}>
         Books
         </Text>
        
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}

        onPress={() => navigation.navigate()}>
        
        <Image source = {require('../../assets/gadget.jpg')}
          style={styles.cardimg} />

        <Text
          style={styles.cardtext}>
          Other Gadgets
         
        </Text>
        
      </TouchableOpacity>
      </View>
  <View style={styles.cardcontainer}>

      <TouchableOpacity
       style={styles.card}
        onPress={() => navigation.navigate()}>
        
        <Image source = {require('../../assets/mobile.jpeg')}
         style={styles.cardimg} />
        <Text
          style={styles.cardtext}>
          Mobile Phones
         </Text>
        
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate()}>
        
        <Image source = {require('../../assets/decor.jpg')}
            style={styles.cardimg} />
          <Text
          style={styles.cardtext}>
         Home Decor   
        </Text>
        
      </TouchableOpacity>
    </View>
    <View style={styles.cardcontainer}>

  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate()}>
    
    <Image source = {require('../../assets/laptop.jpeg')}
     style={styles.cardimg} />
    <Text
    style={styles.cardtext}>Laptop
      </Text>
    
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate()}>
    
    <Image source = {require('../../assets/clothing.jpg')}
    style={styles.cardimg} />
    <Text
      style={styles.cardtext}>
    Clothing
    
    </Text>
    
 </TouchableOpacity>
 </View>
  <View style={styles.cardcontainer}>

<TouchableOpacity
 style={styles.card}
  onPress={() => navigation.navigate()}>
  
  <Image source = {require('../../assets/baby.jpg')}
  style={styles.cardimg} />
  <Text
    style={styles.cardtext}>
  Baby products
   
  </Text>
  
</TouchableOpacity>
<TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate()}>
  
  <Image source = {require('../../assets/decor.jpg')}
       style={styles.cardimg} />
    <Text
   style={styles.cardtext}>
     Home Decor
    </Text>
  
</TouchableOpacity>
</View>
      </ScrollView>
    
    </SafeAreaView>
   
  );
};

export default Classified;

