import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

type Props = {
  data: string[];
  onSelect: (value: string) => void;
  title?: string;
  defaultValue?: string;
};

const DropDownMenu = ({
  data,
  onSelect,
  title = "Size",
  defaultValue = "32",
}: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleSelect = (item: string) => {
    setSelectedValue(item);
    onSelect(item);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <Text style={styles.buttonText}>
          {title}: {selectedValue || defaultValue}
        </Text>
        <Image source={require("../images/arrow_down.png")} />
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2
  },
  button: {
    padding: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default DropDownMenu;
