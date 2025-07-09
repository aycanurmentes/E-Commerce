import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const FlatAndHeels = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={require('../images/stick.png')} style={styles.stick} />
        <Image source={require('../images/stars.png')} style={styles.stars} />
        <Image source={require('../images/heels.png')} style={styles.heels} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Flat and Heels</Text>
        <Text style={styles.subtitle}>Stand a chance to get rewarded</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Visit now →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlatAndHeels;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    alignItems: 'center',
    marginBottom:15,
  },
  imageWrapper: {
    flex:1,
    width: 120,
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  stick: {
    position:'relative',
    marginLeft: 0,
    top:65,
    width: 10,
    height: 124,
    resizeMode: 'stretch',
  },
  stars: {
    position:'relative',
    marginLeft: -30,
    top: 50,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  heels: {
    position:'relative',
    marginLeft:-10,
    top: 65,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    zIndex: 1,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
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
