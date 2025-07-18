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
}

export const InputForms: React.FC<InputFormsProps> = ({
  style,
  leftIcon,
  rightIcon,
  bottomRightButtonText,
  onBottomRightPress,
  ...textInputProps
}) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.inputContainer}>
        {hasLeftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[
            styles.input,
            hasLeftIcon ? styles.inputWithLeftIcon : null,
            hasRightIcon ? styles.inputWithRightIcon : null,
          ]}
          placeholderTextColor="#aaa"
          {...textInputProps}
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
});
