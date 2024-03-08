import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const PH31536_home = ({navigation}) => {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{color: 'black', fontSize: 25, fontWeight: 'bold'}}>Lab 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Bai1')}
      style = {{backgroundColor: '#00BFFF', marginTop: 10}}>
        <Text style = {{padding: 10,color: 'black', fontSize: 18, fontWeight: 'bold',}}>Bài 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Bai2')}
      style = {{backgroundColor: '#00BFFF', marginTop: 10}}>
        <Text style = {{padding: 10,color: 'black', fontSize: 18, fontWeight: 'bold',}}>Bài 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Bai3')}
      style = {{backgroundColor: '#00BFFF', marginTop: 10}}>
        <Text style = {{padding: 10,color: 'black', fontSize: 18, fontWeight: 'bold',}}>Bài 3</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PH31536_home

const styles = StyleSheet.create({})