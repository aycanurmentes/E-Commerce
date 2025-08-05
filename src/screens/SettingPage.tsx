import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableButton from '../components/ReusableButton'
import TopBar from '../components/TopBar'
import { useNavigation } from '@react-navigation/native'

export default function SettingPage() {
  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={styles.container}>
       <TopBar
        leftIcon={require('../images/openup.png')}
        onLeftPress={() => navigation.goBack()}
        centerText="Settings"
      />
      <View style={styles.buttonContainer}>
      <ReusableButton title={'About Us'} onPress={() => console.log('About me ->')}
      fontSize={20}
      />
      <ReusableButton title={'Contact Us'} onPress={() => console.log('About me ->')}
      fontSize={20}
      />
      <ReusableButton title={'Privacy Policy'} onPress={() => console.log('About me ->')}
      fontSize={20}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
   buttonContainer: {
    paddingHorizontal: 25,
    paddingTop: 10,
    backgroundColor: '#fff',
    flex: 0.2,
    gap:35
  },
})