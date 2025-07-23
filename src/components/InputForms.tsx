import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface InputFormsProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  bottomRightButtonText?: string;
  onBottomRightPress?: () => void;
  errorText?: string;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePasswordVisibility?: () => void;
}

export const InputForms: React.FC<InputFormsProps> = ({
  style,
  leftIcon,
  rightIcon,
  bottomRightButtonText,
  onBottomRightPress,
  errorText,
  isPassword = false,
  showPassword = false,
  onTogglePasswordVisibility,
  ...textInputProps
}) => {
  const hasLeftIcon = !!leftIcon;

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.inputContainer}>
        {hasLeftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          style={[
            styles.input,
            hasLeftIcon ? styles.inputWithLeftIcon : null,
            rightIcon || isPassword ? styles.inputWithRightIcon : null,
          ]}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#aaa"
          {...textInputProps}
        />
        {(rightIcon || isPassword) && (
          <TouchableOpacity style={styles.rightIcon} onPress={onTogglePasswordVisibility}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
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

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A8A8A9',
    borderRadius: 10,
    fontFamily: 'Montserrat',
    paddingVertical: 20,
    paddingHorizontal: 12,
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: '#F3F3F3',
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
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
