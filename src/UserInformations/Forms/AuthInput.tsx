// 📁 components/Forms/AuthInput.tsx
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Image } from '@rneui/base';

export const Input = ({ placeholder, value, onChangeText, style = {} }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    autoCapitalize="none"
    style={[styles.input, style]}
  />
);

export const FormButton = ({ title, onPress }) => (
  <Button
    title={title}
    type="clear"
    onPress={onPress}
    buttonStyle={styles.nextBtn}
    titleStyle={styles.txtBtn}
  />
);

export const SocialButtons = ({ icons }) => (
  <View style={styles.iconContainer}>
    {icons.map((icon, i) => (
      <TouchableOpacity key={i} style={styles.iconWrapper}>
        <Image source={icon.source} style={styles.iconImage} resizeMode="contain" />
      </TouchableOpacity>
    ))}
  </View>
);

export const styles = StyleSheet.create({
  input: {
    backgroundColor: '#dededf',
    borderRadius: 9,
    width: 317,
    height: 55,
    marginHorizontal: 39,
    marginVertical:8,
    borderWidth: 1,
    borderColor: '#a8a8a9',
    fontSize: 16,
    paddingVertical: 8,
  
    
  },
  nextBtn: {
    backgroundColor: '#F83758',
    borderRadius: 4,
    marginTop: 50,
    width: 317,
    height: 55,
    alignSelf: 'center',
  },
  txtBtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconWrapper: {
    width: 49,
    height: 49,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff5e78',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff5f8',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});
