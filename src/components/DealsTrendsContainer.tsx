import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface DealsTrendsProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

const DealsTrendsContainer: React.FC<DealsTrendsProps > = ({
  title,
  subtitle,
  buttonText,
  onPress,
  backgroundColor = '#FEECEC',
  textColor = '#000',
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, { color: textColor }, titleStyle]}>{title}</Text>
        <Text style={[styles.subtitle, { color: textColor }, subtitleStyle]}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DealsTrendsContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  button: {
    backgroundColor: 'clear',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
});
