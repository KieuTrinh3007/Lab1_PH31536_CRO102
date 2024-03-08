import { StyleSheet, Text, View,  } from 'react-native'
import React, {useState} from 'react'
import TextInputLayout from './TextInputLayout';
import TextInputLayoutError from './TextInputLayoutError';

const PH31536_bai13 = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [error, setError] = useState('');
  
    const handleTextChange1 = (text) => {
        setText1(text);
        if (!text) {
            setError('Vui lòng nhập thông tin');
          } else {      
            setError('');
          }
      };
    
      const handleTextChange2 = (text) => {
        setText2(text);
        if (!text) {
            setError('Vui lòng nhập thông tin');
          } else {      
            setError('');
          }
      };
      const handleTextChange4 = (text) => {
        setText4(text);
        if (!text) {
            setError('Vui lòng nhập thông tin');
          } else {      
            setError('');
          }
      };

      const handleTextChangeError = (text) => {
        setText3(text);
        if (!text) {
          setError('Vui lòng nhập thông tin');
        } else {      
          setError('');
        }
      };
  return (
    <View style={styles.container}>
    <TextInputLayout
      label="Title 1"
      placeholder="Nhập thông tin 1"
      onChangeText={handleTextChange1}
      value={text1}
    />
    <TextInputLayout
      label="Title 2"
      placeholder="Nhập thông tin 2"
      onChangeText={handleTextChange2}
      value={text2}
    />
    <TextInputLayout
      label="Title 3"
      placeholder="Nhập thông tin 3"
      onChangeText={handleTextChange4}
      value={text4}
    />
    <TextInputLayoutError
      label="Title 4"
      placeholder="Nhập thông tin 4"
      onChangeText={handleTextChangeError}
      value={text3}
      errorMessage={error}
    />
  </View>
  )
}

export default PH31536_bai13

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
})