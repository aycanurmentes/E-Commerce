import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Text,
} from 'react-native';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  bottomRightButtonText?: string;
  onBottomRightPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search any product...',
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  leftIcon,
  rightIcon,
  bottomRightButtonText,
  onBottomRightPress,
}) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={styles.inputContainer}>
        {hasLeftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          placeholder={placeholder}
          style={[
            styles.input,
            hasLeftIcon ? styles.inputWithLeftIcon : null,
            hasRightIcon ? styles.inputWithRightIcon : null,
            inputStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#aaa"
        />
        {hasRightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {bottomRightButtonText && (
        <TouchableOpacity
          style={styles.bottomRightButton}
          onPress={onBottomRightPress}>
          <Text style={styles.bottomRightText}>{bottomRightButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 16,
    marginTop: 16,
    paddingHorizontal: 13,
    paddingVertical: 3
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  inputWithLeftIcon: {
    paddingLeft: 42,
  },
  inputWithRightIcon: {
    paddingRight: 42,
  },
  leftIcon: {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  bottomRightButton: {
    marginTop: 9,
    alignItems: 'flex-end',
  },
  bottomRightText: {
    color: '#F83758',
    fontSize: 12,
    fontWeight: '400',
  },
});
