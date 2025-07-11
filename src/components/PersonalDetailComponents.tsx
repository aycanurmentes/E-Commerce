import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextInputProps } from 'react-native';
import { InputForms } from './InputForms';

interface PersonalDetailsProps extends TextInputProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  bottomRightButtonText?: string;
  onBottomRightPress?: () => void;
}

export const PersonalDetailsComponent: React.FC<PersonalDetailsProps> = ({
  label,
  containerStyle,
  bottomRightButtonText,
  onBottomRightPress,
  ...textInputProps
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <InputForms
        bottomRightButtonText={bottomRightButtonText}
        onBottomRightPress={onBottomRightPress}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    marginLeft:4,
    fontSize: 12,
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
});
