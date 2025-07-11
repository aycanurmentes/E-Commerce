import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderWithSortFilter from '../components/HeaderWithSortFilter';
import ImageSlider from '../components/ImageSlider.tsx';
import ScrollingCategories from '../components/ScrollingCategories';
import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';
import DealsTrendsContainer from '../components/DealsTrendsContainer.tsx';
import ScrollingProductsWithoutRating from '../components/ScrollingProductsWithoutRating.tsx';
import SpecialOfferComponent from '../components/SpecialOfferComponent.tsx';
import FlatAndHeels from '../components/FlatAndHeels.tsx';
import NewArrivalsContainer from '../components/NewArrivalsContainer.tsx';
import SponsoredContainer from '../components/SponsoredContainer.tsx';
import ScrollingProductsWithRating from '../components/ScrollingProductsWithRating.tsx';
import { homeSliderData } from '../data/sliders.ts';
import { WithRatingProps  } from '../data/homePageProducts.ts';
import { WithoutRatingProps  } from '../data/homePageProducts.ts';


const HomePage = () => {
  
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
          slides={homeSliderData}
          sliderHeight={213}
          activeDotColor="#FFA3B3"
        />
        <DealsTrendsContainer
          title="Deal of the Day"
          subtitle="22h 55m 20s remaining "
          buttonText="View All -->"
          onPress={() => console.log('View All ->')}
          backgroundColor="#4392F9"
          textColor="#fff" />
        <ScrollingProductsWithRating products={WithRatingProps}/>
        <SpecialOfferComponent />
        <FlatAndHeels />
        <DealsTrendsContainer
          title="Trending Products "
          subtitle="Last Date 29/02/22"
          buttonText="View All -->"
          onPress={() => console.log('View All ->')}
          backgroundColor="#FD6E87"
          textColor="#fff" />
        <ScrollingProductsWithoutRating products={WithoutRatingProps}/>
        <NewArrivalsContainer />
        <SponsoredContainer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    margin: 8,
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
