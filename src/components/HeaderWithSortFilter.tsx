import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

type Props = {
  title: string;
  showItemCount?: boolean;
  itemCount?: number;
  onSortPress?: () => void;
  onFilterPress?: () => void;
};
const HeaderWithSortFilter = ({ title, showItemCount, itemCount, onSortPress, onFilterPress }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {showItemCount && itemCount ? `${itemCount.toLocaleString()}+ Items` : title}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onSortPress} style={styles.button}>
          <Text style={styles.btnText}>Sort</Text>
          <Icon name="sort" type="material-community" size={18} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFilterPress} style={styles.button}>
          <Text style={styles.btnText}>Filter</Text>
          <Icon name="filter" type="font-awesome" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeaderWithSortFilter;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily:'Montserrat',
    textAlign:'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  btnText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight:400
  },
});
