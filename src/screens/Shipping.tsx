import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Modal, TouchableOpacity, Image, } from 'react-native';
import CreditCardSection from '../components/CreditCardSection';
import { creditCardProps } from '../data/creditCard';
import ReusableButton from '../components/ReusableButton';
import { useNavigation } from '@react-navigation/native';
import PaymentComponent from '../components/PaymentComponent';

export default function Shipping() {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleContinue = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    navigation.replace('TabNavigation');
  };
//TODO: buton boyutu , card ların image boyutlarını hepsine özel olacak şekilde düzelt.
  return (
    <SafeAreaView style={styles.container}>
      <PaymentComponent price={7000} shipping={30} />
      <Text style={styles.title}>Payment</Text>
      <View style={styles.cardSection}>
        {creditCardProps.map(card => (
          <CreditCardSection
            key={card.id}
            imageSource={card.image}
            text={card.text}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <ReusableButton
          backgroundColor="#F83758"
          title="Continue"
          textColor="#fff"
          fontSize={23}
          borderRadius={8}
          onPress={handleContinue}
        />
      </View>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.closeButtonText}>✔️</Text>
              <Image source={require('../images/Star.png')} />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Payment done successfully.
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#222',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  cardSection: {
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 10,
  },
  modalText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: '#222222',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
