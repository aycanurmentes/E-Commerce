import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import HeaderWithSortFilter from '../components/HeaderWithSortFilter';
import ScrollingCategories from '../components/ScrollingCategories';
import StarRating from '../components/StarRating.tsx'
import ProductCard from '../components/ProductCard';
import { Slider } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
<TopBar
  left={
    <TouchableOpacity onPress={() => {}}>
      <Image source={require('../images/openup.png')} />
    </TouchableOpacity>
  }
  center={
    <View style={styles.center}>
    <Image source={require('../images/logoItem.png')} /> 
    <Text style={{ fontWeight: 700, textAlign:'center', fontSize: 18, color:'#4392F9' , fontFamily:'"Libre Caslon Text"'}}>Stylish</Text>
    </View>}
  right={
    <TouchableOpacity onPress={() => {}}>
      <Image source={require('../images/profilePicture.png')} style={{width:40 , height:40}} />
    </TouchableOpacity>
  }/>
 <SearchBar/>
 <HeaderWithSortFilter
        title="All Featured"
        onSortPress={() => console.log('Sort')}
        onFilterPress={() => console.log('Filter')}
      />
  <ScrollingCategories/>

    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##F9F9F9',
  },
  center:{
    flexDirection:'row',
  }
});
