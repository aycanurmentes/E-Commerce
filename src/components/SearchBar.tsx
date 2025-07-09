import React from 'react';
import { View, TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}
const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search any product...',
  value,
  onChangeText,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    marginTop:16,
    paddingHorizontal: 12,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});
