import { StyleSheet, Text, View} from 'react-native'
import { Button } from '@rneui/base';
import React from 'react'

export const SkipButton = ({ onPress  }) => (
      
      <Button
      title="Skip"
      onPress={onPress}
      buttonStyle={styles.skipBtn}   
      titleStyle={styles.skipBtnText}/>
   
);

type StepIndicatorProps = {
  step: number;
  total?: number; 
};

export const StepIndicator = ({ step, total = 3 }: StepIndicatorProps) => (
  <Text style={styles.stepIndicator}>{`${step}/${total}`}</Text>
);
 export const NextButton = ({ onPress }) => (
   <Button
     title="Next"
     type="clear"
     onPress={onPress}
     titleStyle={styles.nextBtnText}
   />
  
 );

   export const PrevButton = ({ onPress }) => (
   <Button
     title="Prev"
     type="clear"
     onPress={onPress}
     titleStyle={styles.prevBtnText}
   />
   );

   export const GetStartedButton = ({ onPress }) => (
   <Button
     title="Get Started"
     type="clear"
     onPress={onPress}
     titleStyle={styles.nextBtnText}
   />
   );

type PaginationDotsProps = {
  activeIndex: number;
  total?: number;
};

export const PaginationDots = ({ activeIndex, total = 3 }: PaginationDotsProps) => {
  const dots = Array.from({ length: total }, (_, i) => (
    <View key={i} style={[styles.dot, i === activeIndex && styles.activeDot]} />
  ));
  return <View style={styles.pagination}>{dots}</View>;
};

   

const styles = StyleSheet.create({
    skipBtn: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  skipBtnText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
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
  },
    dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
    width:40,
    height:8,
  },
     pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
})