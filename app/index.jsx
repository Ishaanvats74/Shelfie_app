import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cat from '../assets/cat.jpeg'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Cat} style={styles.img}/>
      <Text style={styles.title}>The Number 1</Text>
      <Text>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello this is a card.</Text>
      </View>

      <Link href='/screens/About' style={styles.link}>About Page</Link>
      <Link href='/screens/Contact' style={styles.link}>Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    card:{
        backgroundColor:'#eee',
        padding:2,
        borderRadius:5,
        boxShadow:`4px 4px ragba(0,0,0,0.1`
    },
    img:{
        marginVertical:20,
        height:300,
        width:300,

    },
    link:{
        marginVertical:10,
        borderBottomWidth:1
    }
})