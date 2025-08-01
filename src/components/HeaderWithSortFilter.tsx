import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';

type SortOption = 'name' | 'price-low' | 'price-high' | 'rating' | 'category';
type FilterOption = 'all' | 'mens' | 'womens' | 'kids' | 'gift' | 'beauty' | 'fashion';

interface Props {
  title: string;
  showItemCount?: boolean;
  itemCount?: number;
  onSortPress?: () => void;
  onFilterPress?: () => void;
  onSortChange?: (option: SortOption) => void;
  onFilterChange?: (option: FilterOption) => void;
  currentSort?: SortOption;
  currentFilter?: FilterOption;
}

const HeaderWithSortFilter = ({
  title,
  showItemCount,
  itemCount,
  onSortChange,
  onFilterChange,
  currentSort = 'name',
  currentFilter = 'all'
}: Props) => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const sortOptions = [
    { key: 'name', label: 'Sort by Name' },
    { key: 'price-low', label: 'Price (Low to High)' },
    { key: 'price-high', label: 'Price (High to Low)' },
    { key: 'rating', label: 'Sort by Rating' },
    { key: 'category', label: 'Sort by Category' },
  ];

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'mens', label: 'Men' },
    { key: 'womens', label: 'Women' },
    { key: 'kids', label: 'Kids' },
    { key: 'gift', label: 'Gift' },
    { key: 'beauty', label: 'Beauty' },
    { key: 'fashion', label: 'Fashion' },
  ];

  const handleSortSelect = (option: SortOption) => {
    onSortChange?.(option);
    setShowSortModal(false);
  };

  const handleFilterSelect = (option: FilterOption) => {
    onFilterChange?.(option);
    setShowFilterModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {showItemCount && itemCount ? `${itemCount.toLocaleString()}+ Items` : title}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => setShowSortModal(true)} style={styles.button}>
          <Text style={styles.btnText}>Sort</Text>
          <Image source={require('../images/sort.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowFilterModal(true)} style={styles.button}>
          <Text style={styles.btnText}>Filter</Text>
          <Image source={require('../images/filter.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={showSortModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowSortModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Sort Options</Text>
              <TouchableOpacity onPress={() => setShowSortModal(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalBody}>
              {sortOptions.map((option) => (
                <TouchableOpacity
                  key={option.key}
                  style={[
                    styles.optionItem,
                    currentSort === option.key && styles.selectedOption
                  ]}
                  onPress={() => handleSortSelect(option.key as SortOption)}
                >
                  <Text style={[
                    styles.optionText,
                    currentSort === option.key && styles.selectedOptionText
                  ]}>
                    {option.label}
                  </Text>
                  {currentSort === option.key && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        visible={showFilterModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Options</Text>
              <TouchableOpacity onPress={() => setShowFilterModal(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalBody}>
              {filterOptions.map((option) => (
                <TouchableOpacity
                  key={option.key}
                  style={[
                    styles.optionItem,
                    currentFilter === option.key && styles.selectedOption
                  ]}
                  onPress={() => handleFilterSelect(option.key as FilterOption)}
                >
                  <Text style={[
                    styles.optionText,
                    currentFilter === option.key && styles.selectedOptionText
                  ]}>
                    {option.label}
                  </Text>
                  {currentFilter === option.key && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    fontFamily: 'Montserrat',
    textAlign: 'center',
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
    minWidth: 80,
  },
  btnText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 400,
    flex: 1,
  },
  image: {
    width: 16,
    height: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  closeButton: {
    fontSize: 20,
    color: '#666',
    padding: 5,
  },
  modalBody: {
    padding: 10,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 2,
  },
  selectedOption: {
    backgroundColor: '#F83758',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: '600',
  },
  checkmark: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
