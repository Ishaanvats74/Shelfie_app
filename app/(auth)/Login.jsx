import {  StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {
    const handleSubmit = ()=>{
        console.log("Login Completed")
    }
   
  return (
    <ThemedView style={styles.Container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>
      
    <ThemedButton onPress={handleSubmit}>
        <Text style={{color:'#f2f2f2'}}>Login</Text>
    </ThemedButton>

      <Spacer height={100} />
      <Link href={"/Register"}>
        <ThemedText style={{ textAlign: "center" }}>
          Resgister Instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  
});
