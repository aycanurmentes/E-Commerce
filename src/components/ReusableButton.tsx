import React from 'react';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button } from '@rneui/themed';

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  borderRadius?: number;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
};
const ReusableButton = ({
  title,
  onPress,
  backgroundColor = '#F83758',
  textColor = '#fff',
  fontSize = 16,
  borderRadius = 12,
  buttonStyle,
  titleStyle,
}: Props) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={[
        styles.button,
        { backgroundColor, borderRadius },
        buttonStyle,
      ]}
      titleStyle={[
        styles.title,
        { color: textColor, fontSize: fontSize },
        titleStyle,
      ]} />
  );
};
export default ReusableButton;
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
});
