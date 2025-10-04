import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Create = () => {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText title={true} style={styles.heading}>Add a New Book</ThemedText>
      <Spacer/>
    </ThemedView>
  )
}

export default Create

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