import { StyleSheet, Text, View,Image } from 'react-native'
import React, {useEffect} from 'react'

const Splash = (props) => {
    const {navigation} = props;
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home')
      
    }, 3000);
  
    return () => clearTimeout(timeout)
  }, [navigation]);
  return (
    <View style = {{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>
      <Image
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png'}}
      style = {{width: 300, height: 100}}
      />
      <Text style = {{color: 'red', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Phạm Kiều Trinh</Text>
      <Text style = {{color: 'red', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>MSV: PH31536</Text>
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})