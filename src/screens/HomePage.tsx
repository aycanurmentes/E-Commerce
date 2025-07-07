import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderWithSortFilter from '../components/HeaderWithSortFilter';
import ImageSlider from '../components/ImageSlider.tsx';
import ScrollingCategories from '../components/ScrollingCategories';
import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';

const HomePage = () => {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar
          left={
            <TouchableOpacity onPress={() => { }}>
              <Image source={require('../images/openup.png')} />
            </TouchableOpacity>}
          center={
            <View style={styles.center}>
              <Image source={require('../images/logoItem.png')} />
              <Text style={styles.logoText}>Stylish</Text>
            </View>}
          right={
            <TouchableOpacity onPress={() => { }}>
              <Image source={require('../images/profilePicture.png')} style={styles.profilePic} />
            </TouchableOpacity>} />
        <SearchBar />
        <HeaderWithSortFilter
          title="All Featured"
          onSortPress={() => console.log('Sort')}
          onFilterPress={() => console.log('Filter')} />
        <ScrollingCategories />
        <ImageSlider
          slides={[
            {
              image: require('../images/sliderHome.png'),
              title: '50-40% OFF',
              subtitle: 'Now in (product)',
              buttonText: 'Shop Now ->',
              onPress: () => alert(''),
            }
            , {
              image: require('../images/sliderHome.png'),
              title: '50-40% OFF',
              subtitle: 'Now in (product)',
              buttonText: 'Shop Now ->',
              onPress: () => alert(''),
            }, {
              image: require('../images/sliderHome.png'),
              title: '50-40% OFF',
              subtitle: 'Now in (product)',
              buttonText: 'Shop Now ->',
              onPress: () => alert(''),
            }
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  center: {
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: 700,
    textAlign: 'center',
    fontSize: 18,
    color: '#4392F9',
    fontFamily: 'Libre Caslon Text'
  },
  profilePic: {
    width: 40,
    height: 40,
  },

});
