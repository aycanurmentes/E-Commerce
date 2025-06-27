import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topbar}>
            <Image source={require('../images/openup.png') } style={styles.logo} style={{ marginLeft:12, }}/>
            <Image source={require('../images/logo.png')} style={styles.logo} style={{ marginLeft:18,  }}/>
            <Image source={require('../images/profilePicture.png')} style={styles.logo} style={{ width:45, height:45, marginRight:15 }}/>
            
        </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    topbar:{
        alignItems:'center',
       justifyContent: 'space-between',
        flexDirection: 'row',
        top:60,

        

    },
    logo:{

    }
});
