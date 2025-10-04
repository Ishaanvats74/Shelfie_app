import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Profile = () => {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText title={true} style={styles.heading}>Your Email</ThemedText>
      <Spacer/>
      <ThemedText>Time to start reading some Books...</ThemedText>
      <Spacer/>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent:"center",
        alignItems:'center',
    },
    heading:{
        fontWeight:"bold",
        fontSize:18,
    }
})