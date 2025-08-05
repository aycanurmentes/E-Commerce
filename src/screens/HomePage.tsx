import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import HeaderWithSortFilter from '../components/HeaderWithSortFilter';
import ImageSlider from '../components/ImageSlider';
import ScrollingCategories from '../components/ScrollingCategories';
import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';
import DealsTrendsContainer from '../components/DealsTrendsContainer';
import ScrollingProductsWithoutRating from '../components/ScrollingProductsWithoutRating';
import SpecialOfferComponent from '../components/SpecialOfferComponent';
import FlatAndHeels from '../components/FlatAndHeels';
import NewArrivalsContainer from '../components/NewArrivalsContainer';
import SponsoredContainer from '../components/SponsoredContainer';
import ScrollingProductsWithRating from '../components/ScrollingProductsWithRating';
import { homeSliderData } from '../data/sliders.ts';
import { WithRatingProps } from '../data/homePageProducts.ts';
import { WithoutRatingProps } from '../data/homePageProducts.ts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [search, setSearch] = useState('');

  const filteredProducts = WithRatingProps.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar
          leftIcon={require('../images/openup.png')}
          onLeftPress={() => { }}
          centerImage={require('../images/logoItem.png')}
          centerText="Stylish"
          centerTextColor="#4392F9"
          rightIcon={require('../images/profilePicture.png')}
          onRightPress={() => navigation.navigate('ProfileSection')}
        />
        <SearchBar
          leftIcon={<Image source={require('../images/searchInput.png')} />}
          rightIcon={<Image source={require('../images/voice.png')} />}
          value={search}
          onChangeText={setSearch} />
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
          onPress={() => navigation.navigate('TabNavigation' as any, { screen: 'Search' } as any)}
          backgroundColor="#4392F9"
          textColor="#fff" />
        <ScrollingProductsWithRating products={filteredProducts} fixedCardHeight={241} />
        <SpecialOfferComponent />
        <FlatAndHeels />
        <DealsTrendsContainer
          title="Trending Products "
          subtitle="Last Date 29/02/22"
          buttonText="View All -->"
onPress={() => navigation.navigate('TabNavigation' as any, { screen: 'Search' } as any)}
          backgroundColor="#FD6E87"
          textColor="#fff" />
        <ScrollingProductsWithoutRating products={WithoutRatingProps} />
        <NewArrivalsContainer />
        <SponsoredContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

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
export default HomePage;