import { StyleSheet, Text,} from 'react-native'
import React from 'react'

type StepIndicatorProps = {
  step: number;
  total?: number; 
};
export const StepIndicator = ({ step, total = 3 }: StepIndicatorProps) => (
  <Text style={styles.stepIndicator}>{`${step}/${total}`}</Text>
);

const styles = StyleSheet.create({
  stepIndicator: {
    fontSize: 14,
    color: '#A8A8A9',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  nextBtnText: {
    color: '#F83758',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
   prevBtnText: {
    color: '#A8A8A9',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  }
})