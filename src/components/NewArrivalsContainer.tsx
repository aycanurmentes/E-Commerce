import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const NewArrivalsContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={require('../images/hotSummerSale.png')} style={styles.image}/>
      </View>
      <Text style={styles.title}>New Arrivals</Text>
      <View style={styles.bottom}>
        <Text style={styles.subtitle}>Summer’ 25 Collections</Text>
         <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>View All →</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewArrivalsContainer;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    marginTop:16,
  },
  imageContainer: {
    width: '90%',
    height: 180,
    overflow: 'hidden', 
    alignSelf: 'center',
    borderTopEndRadius:8,
    borderTopStartRadius:8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottom:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: '#000',
    left:30,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Montserrat',
    color: '#000',
  },
  button: {
    backgroundColor: '#F83758',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
});
