import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import SizeButtons from '../components/SizeButton'
import SimilarAndCompareButtons from '../components/SimilarAndCompareButtons'

export default function BasketPage() {
return (
  <SafeAreaView style={styles.container}>
   <SizeButtons/>

   <SimilarAndCompareButtons/>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
})

