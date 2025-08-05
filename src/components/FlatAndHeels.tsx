import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigations/NavigationTypes';

const FlatAndHeels = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <View style={styles.effectWrapper}>
          <Image source={require('../images/stick.png')} style={styles.stick} />
          <Image source={require('../images/stars.png')} style={styles.stars} />
        </View>
        <Image source={require('../images/heels.png')} style={styles.heels} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Flat and Heels</Text>
        <Text style={styles.subtitle}>Stand a chance to get rewarded</Text>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate('TabNavigation' as any, {
              screen: 'Search',
              params: { filterCategoryId: 'shoes' },
            })
          }>
          <Text style={styles.buttonText}>Visit now →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlatAndHeels;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  imageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginRight: 12,
  },
  effectWrapper: {
    position: 'relative',
    width: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  stick: {
    width: 11,
    height: 160,
    left: -12,
    resizeMode: 'stretch',
  },
  stars: {
    position: 'absolute',
    left: -10,
    top: -10,
    width: 70,
    height: 160,
    resizeMode: 'contain',
  },
  heels: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginLeft: -30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Montserrat',
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#F83758',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
});
