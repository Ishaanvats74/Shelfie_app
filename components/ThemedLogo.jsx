import { Image, useColorScheme } from "react-native";
import DarkLogo from "../assets/img2.png";
import LightLogo from "../assets/image.png";

const ThemedLogo = ({...props}) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
