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
  bottomRightButtonText?: string;
  onBottomRightPress?: () => void;
}
export const InputForms: React.FC<InputFormsProps> = ({
  style,
  bottomRightButtonText,
  onBottomRightPress,
  ...textInputProps
}) => {
  return (
    <View style={[styles.position, style]}>
      <TextInput
        style={[styles.input]}
        placeholderTextColor="#aaa"
        {...textInputProps} />
      {bottomRightButtonText && (
        <TouchableOpacity
          style={styles.bottomRightButton}
          onPress={onBottomRightPress} >
          <Text style={styles.bottomRightText}>{bottomRightButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#A8A8A9',
    borderRadius: 10,
    fontFamily: 'Montserrat',
    paddingHorizontal: 12,
    paddingVertical: 20,
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: '#F3F3F3',
  },
  bottomRightButton: {
    marginTop: 9,
    alignItems: 'flex-end'
  },
  bottomRightText: {
    color: '#F83758',
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },
  position: {
    position: 'relative'
  },
});
