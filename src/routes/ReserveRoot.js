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
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// Thanks for watching
import {  TrajetsScreen } from "../views/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
 tabBarStyle: false
};

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

export function ReservationRoot() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Reservation">
   
      <Tab.Screen
        name="trajet"
        component={TrajetsScreen}
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
                <Feather
                  name="user-plus"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                />
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
