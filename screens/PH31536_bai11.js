import { StyleSheet, Text, View, SectionList, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const L11SectionView=({title,backgroundColor})=>{
  return(
      <View style={[styles.container,{backgroundColor}]}>
        <View style = {{flexDirection: 'row', margin: 20, justifyContent: 'space-between'}}>
          <Image
          source={require('../img/back1.png')}
          style = {{width: 30, height: 30}}
          />
           <Text style = {{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
           <Image
          source={require('../img/man.png')}
          style = {{width: 35, height: 35}}
          />
           </View>
      </View>
  );
}



const PH31536_bai11 = () => {
  return (
    <View style={styles.container}>
    <L11SectionView title="Header" backgroundColor="#FFFAF0">
        <Text>Day la header</Text>
    </L11SectionView>
    <L11SectionView title="Trang chủ" backgroundColor="#FFFAF0">
        <Text>Day la content</Text>
    </L11SectionView>
    <L11SectionView title="" backgroundColor="#FFFAF0">
        <Text>Day la footer</Text>
    </L11SectionView>
</View>
  )
}

export default PH31536_bai11;

const styles = StyleSheet.create({
  container:{
        height: 100,
        borderWidth: 1,
        borderColor: 'gray'
    },
    title:{
        fontSize:30,
    },
});
