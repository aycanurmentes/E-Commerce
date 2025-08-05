import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Modal,
} from "react-native";

type Props = {
  data: string[];
  onSelect: (value: string) => void;
  title?: string;
  defaultValue?: string;
  disabled?: boolean;
};

const DropDownMenu = ({
  data,
  onSelect,
  title = "Size",
  defaultValue = "32",
  disabled = false,
}: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setDropdownVisible(!isDropdownVisible);
    }
  };

  const handleSelect = (item: string) => {
    if (!disabled) {
      setSelectedValue(item);
      onSelect(item);
      setDropdownVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.button,
          disabled && styles.disabledButton
        ]} 
        onPress={toggleDropdown}
        disabled={disabled}
      >
        <Text style={[
          styles.buttonText,
          disabled && styles.disabledButtonText
        ]}>
          {title}: {selectedValue || defaultValue}
        </Text>
        <Image source={require("../images/arrow_down.png")} />
      </TouchableOpacity>
      
      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              scrollEnabled={true}
              maxToRenderPerBatch={5}
              windowSize={3}
              initialNumToRender={5}
              removeClippedSubviews={true}
              getItemLayout={(data, index) => ({
                length: 32,
                offset: 32 * index,
                index,
              })}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    position: 'relative',
    zIndex: 1000,
  },
  button: {
    padding: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 36,
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
  option: {
    padding: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    minHeight: 32,
  },
  optionText: {
    fontSize: 13,
    fontWeight: "400",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '80%',
    maxHeight: '70%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  disabledButton: {
    backgroundColor: "#E0E0E0",
    opacity: 0.7,
  },
  disabledButtonText: {
    color: "#888",
  },
});

export default DropDownMenu;
