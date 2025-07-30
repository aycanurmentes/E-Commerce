import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native'
import React from 'react';
import ReusableButton from '../components/ReusableButton'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { PersonalDetailsComponent } from '../components/PersonalDetailComponents';
import { Image } from '@rneui/base';
import TopBar from '../components/TopBar';


export default function ProfileSection() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TopBar
          leftIcon={require('../images/back.png')}
          onLeftPress={() => navigation.goBack()}
          centerText="Checkout"
        />
        <View style={styles.profileWrapper}>
          <Image
            source={require('../images/profilePicture.png')}
            style={styles.imageProfile} />
          <View style={styles.editView}>
            <Image
              source={require('../images/edit.png')}
              style={styles.imageEdit} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Personal Details</Text>
          <PersonalDetailsComponent label={'Email Address'} placeholder='aashifa@gmail.com' />
          <PersonalDetailsComponent label={'Password'} placeholder='***********' />
          <Text style={styles.change}>Change Password</Text>
          <View style={styles.line} />
          <Text style={styles.title}>Business Address Details</Text>
          <PersonalDetailsComponent label={'Pin Code'} placeholder='450116' />
          <PersonalDetailsComponent label={'Address'} placeholder='216 St Pauls Rd' />
          <PersonalDetailsComponent label={'City'} placeholder='London' />
          <PersonalDetailsComponent label={'State'} placeholder='N1 2LL,' />
          <PersonalDetailsComponent label={'Country'} placeholder='United Kingdom' />
          <View style={styles.line} />
          <Text style={styles.title}>Bank Account Details</Text>
          <PersonalDetailsComponent label={'Bank Account Number'} placeholder='204356XXXXXXX' />
          <PersonalDetailsComponent label={'Account Holder’s Name'} placeholder='Abhiraj Sisodiya' />
          <PersonalDetailsComponent label={'IFSC Code'} placeholder='SBIN00428' />
        </View>
        <ReusableButton
          title="Save"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('TabNavigation')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: -10,
  },
  button: {
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F83758',
    color: '#fff',
    fontSize: 15,
    marginTop: 20,
  },
  profileWrapper: {
    position: 'relative',
    width: 96,
    height: 96,
    alignSelf: 'center',
    marginVertical: 6,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  imageProfile: {
    height: 96,
    width: 96,
    borderRadius: 48,
  },
  backImage: {
    width: 9.5,
    height: 19
  },
  editView: {
    position: 'absolute',
    bottom: -6,
    right: -6,
    backgroundColor: '#4392F9',
    borderWidth: 4,
    borderRadius: 22,
    borderColor: '#fff',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageEdit: {
    width: 16,
    height: 16,
  },
  change: {
    color: '#F83758',
    fontSize: 12,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginTop: -12
  },
  inputContainer: {
    gap: 30
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: 360,
    height: 0.5
  },
  center: {
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
