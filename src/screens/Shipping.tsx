import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
import CreditCardSection from '../components/CreditCardSection';
import { creditCardProps } from '../data/creditCard';
import ReusableButton from '../components/ReusableButton';
import { useNavigation } from '@react-navigation/native';
import PaymentComponent from '../components/PaymentComponent';
import TopBar from '../components/TopBar';

export default function Shipping() {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const shipping = 30;

  const handleContinue = () => {
    if (selectedPayment !== null) {
      setModalVisible(true);
    }
  };

  const handleClose = () => {
    setModalVisible(false);
    navigation.replace('TabNavigation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        leftIcon={require('../images/back.png')}
        onLeftPress={() => navigation.goBack()}
        centerText="Checkout"
      />
      <ScrollView style={styles.mainContent}>
        <PaymentComponent shipping={shipping} />
        <Text style={styles.title}>Payment</Text>
        <View style={styles.cardSection}>
          {creditCardProps.map((card, index) => (
            <CreditCardSection
              key={card.id}
              imageSource={card.image}
              text={card.text}
              onPress={() => setSelectedPayment(index)}
              isSelected={selectedPayment === index}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ReusableButton
          backgroundColor={selectedPayment !== null ? "#F83758" : "#ccc"}
          title="Continue"
          textColor="#fff"
          fontSize={23}
          borderRadius={8}
          onPress={handleContinue}
          disabled={selectedPayment === null}

        />
      </View>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleClose} style={styles.tickContainer}>
              <Image source={require('../images/Star.png')} style={styles.starImage} />
              <Text style={styles.checkmark}>✓</Text>
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
  mainContent: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  title: {
    color: '#222',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 10,
  },
  cardSection: {
    flex: 0.8,
    paddingBottom: 10,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    flex: 0.2,
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
  },
  modalText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#222222',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  starImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  checkmark: {
    position: 'absolute',
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
