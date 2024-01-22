import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';   
// Thanks for watching
import {
    SignupSreen,
  LoginScreen
} from "../views/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.09)",
    // borderColor: "rgba(41, 199, 82, 0.5)",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    position: "relative",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#ffffff",
    width: Platform.select({
      ios: "100%",
      android: "100%",
      web: "100%",
    }),
    left: Platform.select({
      // web: "10%",
    }),


  },
};

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

export function AuthRoot() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="login">
     
      <Tab.Screen
        name="login"
        component={ LoginScreen }
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0.15)",
                        flex: 1,
                        width: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 110,
                        }),
                        height: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 100,
                        }),
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                {/* <Entypo
                  name="form"
                  size={24}
                  color={focused ? "#29C752" : "#111"}
                /> */}
                {/* <AntDesign
                  name="form"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                /> */}
                
                <SimpleLineIcons name="login" size={24} 
                color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"} />

                <Text
                  style={{
                    fontSize: 14,
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: FontFamily.Salsa,
                  }}
                >
                  Login
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="signup"
        component={ SignupSreen }
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0.15)",
                        flex: 1,
                        width: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 110,
                        }),
                        height: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 100,
                        }),
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                {/* <Entypo
                  name="wallet"
                  size={24}
                  color={focused ? "#29C752" : "#111"}
                /> */}
                {/* <Ionicons
                  name="fast-food-sharp"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                /> */}
                <Feather name="user-plus" size={24} color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"} />
                <Text
                  style={{
                    fontSize: 14,
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: FontFamily.Salsa,
                  }}
                >
                  SignUp
                </Text>
              </View>
            );
          },
        }}
      />

    </Tab.Navigator>
  );
}
