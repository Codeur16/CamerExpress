import React, {useState} from "react";
import { Platform, StyleSheet, View, Text, Alert } from "react-native";
import MyClickableImage from "./MyClickableImage";
const icons = {
  Recom: require("../assets/icons/recom0.png"),
  Recom1: require("../assets/icons/recom1.png"),

  menu1: require("../assets/icons/menu1.png"),
  menu0: require("../assets/icons/menu0.png"),

  annotation: require("../assets/icons/annotation0.png"),
  annotation1: require("../assets/icons/annotation1.png"),

  search: require("../assets/icons/search0.png"),
  search1: require("../assets/icons/search1.png"),

  user: require("../assets/icons/user0.png"),
  user1: require("../assets/icons/user1.png"),
};
export default function Navbar({ navigation }) {


const [changeStyleAnnotation, setChangeStyleAnnotation] = useState(false);
const [changeStyleRecom, setChangeStyleRecom] = useState(false);
const [changeStyleSearch, setChangeStyleSearch] = useState(false);
const [changeStyleUser, setChangeStyleUser] = useState(false);
const [changeStyleMenu, setChangeStyleMenu] = useState(true);

  const handleAnnotationPress = () => {
    navigation.navigate("Accueil",{
      Id: 80,
      Name: "loico",
    });
    setChangeStyleAnnotation(true);
    setChangeStyleRecom (false);
    setChangeStyleSearch(false);
    setChangeStyleUser(false);
    setChangeStyleMenu(false);

    
  };
  const handleRecomPress = () => {
    setChangeStyleAnnotation(false);
    setChangeStyleRecom (true);
    setChangeStyleSearch(false);
    setChangeStyleUser(false);
    setChangeStyleMenu(false);
  };
  const handleSearchPress = () => {
    setChangeStyleAnnotation(false);
    setChangeStyleRecom (false);
    setChangeStyleSearch(true);
    setChangeStyleUser(false);
    setChangeStyleMenu(false);
  };
  const handleUserPress = () => {
    setChangeStyleAnnotation(false);
    setChangeStyleRecom (false);
    setChangeStyleSearch(false);
    setChangeStyleUser(true);
    setChangeStyleMenu(false);

  };
  const handleMenuPress = () => {
    setChangeStyleAnnotation(false);
    setChangeStyleRecom (false);
    setChangeStyleSearch(false);
    setChangeStyleUser(false);
    setChangeStyleMenu(true);
    navigation.navigate("Home");
  };
  return (
    <>
      <View
        style={styles.rectangleView}
        className="flex flex-row shadow-2xl max-h-12"
      >
        <View  style={styles.icon} className="">
          <MyClickableImage
          
            source={changeStyleAnnotation? icons.annotation1: icons.annotation}
            style={styles.iconImage}
            onPress={handleAnnotationPress}
          />
        </View>
        <View style={styles.icon} className="">
          <MyClickableImage
          
            source={changeStyleRecom? icons.Recom1: icons.Recom}
            style={styles.iconImage}
            onPress={handleRecomPress}
          />
        </View>
        <View style={styles.icon2} className="">
          <MyClickableImage
          
            source={changeStyleMenu?  icons.menu1: icons.menu0}
            style={styles.iconImage2}
            onPress={handleMenuPress}
          />
        </View>
        <View style={styles.icon} className="">
          <MyClickableImage
          
            source={changeStyleSearch?  icons.search1:icons.search}
            style={styles.iconImage}
            onPress={handleSearchPress}
          />
        </View>
        <View style={styles.icon} className="">
          <MyClickableImage
          
            source={changeStyleUser?  icons.user1:icons.user}
            style={styles.iconImage}
            onPress={handleUserPress}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rectangleView: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowRadius:-10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.05)",
    // borderColor: "rgba(41, 199, 82, 0.4)",
    borderTopWidth: 3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    flex: 1,
    height: 90,
    width: "100%",
    ...Platform.select({
      web: {
        display: "flex",
        flexDirection: "row",
        width: "30%",
      },
    }),
  },
  icon: {
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red"
  },
  icon2: {
    width: "28%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -39,
    // backgroundColor:"red"
  },
  iconImage: {
    width: 35,
    height: 35,
  },
  iconImage2: {
    width: 75,
    height: 75,
  },
});
