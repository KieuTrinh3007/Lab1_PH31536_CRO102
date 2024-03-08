import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextInputLayout = ({ label, placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
    />
  </View>
  )
}

export default TextInputLayout

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
      },
      label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
      },
      input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
      },
})