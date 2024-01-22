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
import { SvgXml } from 'react-native-svg';

// Thanks for watching
import {
  HomeSreen,
  RecommendationSreen,
  AcceuilSreen,
  SearchSreen,
  SettingSreen,
} from "../views/index";
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path d="M9.47325 0.379597C9.21022 0.15025 8.86197 0.0224609 8.5 0.0224609C8.13803 0.0224609 7.78978 0.15025 7.52675 0.379597L0.664418 6.36099C0.4543 6.54437 0.286991 6.76539 0.172743 7.0105C0.0584957 7.2556 -0.00028556 7.51965 1.04302e-06 7.78644V15.0639C0.000376603 15.5835 0.224426 16.0816 0.6229 16.4489C1.02137 16.8162 1.56166 17.0225 2.125 17.0225H4.25C4.81359 17.0225 5.35409 16.816 5.7526 16.4484C6.15112 16.0809 6.375 15.5824 6.375 15.0626V11.7963C6.375 11.623 6.44963 11.4568 6.58247 11.3343C6.7153 11.2118 6.89547 11.143 7.08333 11.143H9.91667C10.1045 11.143 10.2847 11.2118 10.4175 11.3343C10.5504 11.4568 10.625 11.623 10.625 11.7963V15.0626C10.625 15.5824 10.8489 16.0809 11.2474 16.4484C11.6459 16.816 12.1864 17.0225 12.75 17.0225H14.875C15.4386 17.0225 15.9791 16.816 16.3776 16.4484C16.7761 16.0809 17 15.5824 17 15.0626V7.78514C16.9999 7.51846 16.9408 7.25461 16.8263 7.00974C16.7118 6.76486 16.5444 6.54411 16.3342 6.36099L9.47325 0.379597Z" fill="#0081C7"/>
</svg>
`;
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
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
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

export function HomeRoot() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Annotation   ">
     
      <Tab.Screen
      
        name="Acceuil"
        component={AcceuilSreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(0, 129, 199, 0)",
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
                  color={focused ? "#0081C7" : "#111"}
                /> */}
                {/* <AntDesign
                  name="form"
                  size={24}
                  color={focused ? "#0081C7" : "#9A999F"}
                /> */}
                  <SvgXml
                    xml= {focused ? svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M9.47325 0.357136C9.21022 0.127789 8.86197 0 8.5 0C8.13803 0 7.78978 0.127789 7.52675 0.357136L0.664418 6.33853C0.4543 6.52191 0.286991 6.74293 0.172743 6.98803C0.0584957 7.23314 -0.00028556 7.49718 1.04302e-06 7.76398V15.0415C0.000376603 15.561 0.224426 16.0592 0.6229 16.4264C1.02137 16.7937 1.56166 17 2.125 17H4.25C4.81359 17 5.35409 16.7935 5.7526 16.426C6.15112 16.0584 6.375 15.56 6.375 15.0402V11.7738C6.375 11.6005 6.44963 11.4344 6.58247 11.3119C6.7153 11.1893 6.89547 11.1205 7.08333 11.1205H9.91667C10.1045 11.1205 10.2847 11.1893 10.4175 11.3119C10.5504 11.4344 10.625 11.6005 10.625 11.7738V15.0402C10.625 15.56 10.8489 16.0584 11.2474 16.426C11.6459 16.7935 12.1864 17 12.75 17H14.875C15.4386 17 15.9791 16.7935 16.3776 16.426C16.7761 16.0584 17 15.56 17 15.0402V7.76267C16.9999 7.496 16.9408 7.23215 16.8263 6.98728C16.7118 6.7424 16.5444 6.52165 16.3342 6.33853L9.47325 0.357136Z" fill="#9A999F"/>
                  </svg>`}
                    width={17}
                    height={17}
                    fill={focused ? "#0081C7" : "#9A999F"}
                  />
                <Text
                  style={{
                    fontSize: 16,
                    color: focused ? "#0081C7" : "#9A999F",
                    fontFamily: FontFamily.Salsa,
                    fontWeight:"bold"
                  }}
                >
                  Accueil
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Recommendation"
        component={RecommendationSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0)",
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
               

                <SvgXml
                    xml= {focused ? `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9375 14.875C8.91421 14.875 9.88135 14.6826 10.7837 14.3089C11.6861 13.9351 12.506 13.3872 13.1966 12.6966C13.8872 12.006 14.4351 11.1861 14.8089 10.2837C15.1826 9.38135 15.375 8.41421 15.375 7.4375C15.375 6.46079 15.1826 5.49365 14.8089 4.59129C14.4351 3.68893 13.8872 2.86903 13.1966 2.17839C12.506 1.48776 11.6861 0.939915 10.7837 0.566146C9.88135 0.192376 8.91421 -1.45541e-08 7.9375 0C5.96495 2.93933e-08 4.07319 0.783591 2.67839 2.17839C1.28359 3.57319 0.5 5.46495 0.5 7.4375C0.5 9.41005 1.28359 11.3018 2.67839 12.6966C4.07319 14.0914 5.96495 14.875 7.9375 14.875ZM7.9375 2.125C6.52854 2.125 5.17728 2.68471 4.181 3.681C3.18471 4.67728 2.625 6.02854 2.625 7.4375C2.625 7.71929 2.73694 7.98954 2.9362 8.1888C3.13546 8.38806 3.40571 8.5 3.6875 8.5C3.96929 8.5 4.23954 8.38806 4.4388 8.1888C4.63806 7.98954 4.75 7.71929 4.75 7.4375C4.75 6.59212 5.08582 5.78137 5.6836 5.1836C6.28137 4.58582 7.09212 4.25 7.9375 4.25C8.21929 4.25 8.48954 4.13806 8.6888 3.9388C8.88806 3.73954 9 3.46929 9 3.1875C9 2.90571 8.88806 2.63546 8.6888 2.4362C8.48954 2.23694 8.21929 2.125 7.9375 2.125Z" fill="#0081C7"/>
                    <path d="M17.5 17L15.375 14.875L17.5 17Z" fill="#0081C7"/>
                    <path d="M17.5 17L15.375 14.875" stroke="#0081C7" stroke-width="2" stroke-linecap="round"/>
                  </svg>`: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4375 14.875C8.41421 14.875 9.38135 14.6826 10.2837 14.3089C11.1861 13.9351 12.006 13.3872 12.6966 12.6966C13.3872 12.006 13.9351 11.1861 14.3089 10.2837C14.6826 9.38135 14.875 8.41421 14.875 7.4375C14.875 6.46079 14.6826 5.49365 14.3089 4.59129C13.9351 3.68893 13.3872 2.86903 12.6966 2.17839C12.006 1.48776 11.1861 0.939915 10.2837 0.566146C9.38135 0.192376 8.41421 -1.45541e-08 7.4375 0C5.46495 2.93933e-08 3.5732 0.783591 2.17839 2.17839C0.783591 3.5732 0 5.46495 0 7.4375C0 9.41005 0.783591 11.3018 2.17839 12.6966C3.5732 14.0914 5.46495 14.875 7.4375 14.875ZM7.4375 2.125C6.02854 2.125 4.67728 2.68471 3.681 3.681C2.68471 4.67728 2.125 6.02854 2.125 7.4375C2.125 7.71929 2.23694 7.98954 2.4362 8.1888C2.63546 8.38806 2.90571 8.5 3.1875 8.5C3.46929 8.5 3.73954 8.38806 3.9388 8.1888C4.13806 7.98954 4.25 7.71929 4.25 7.4375C4.25 6.59212 4.58582 5.78137 5.1836 5.1836C5.78137 4.58582 6.59212 4.25 7.4375 4.25C7.71929 4.25 7.98954 4.13806 8.1888 3.9388C8.38806 3.73954 8.5 3.46929 8.5 3.1875C8.5 2.90571 8.38806 2.63546 8.1888 2.4362C7.98954 2.23694 7.71929 2.125 7.4375 2.125Z" fill="#979797"/>
                    <path d="M17 17L14.875 14.875Z" fill="#979797"/>
                    <path d="M17 17L14.875 14.875" stroke="#979797" stroke-width="2" stroke-linecap="round"/>
                  </svg>`}
                    width={17}
                    height={17}
                    fill={focused ? "#0081C7" : "#9A999F"}
                  />
                <Text
                  style={{
                    fontSize: 16,
                    color: focused ? "#0081C7" : "#9A999F",
                    fontFamily: FontFamily.Salsa,
                    fontWeight:"bold"
                  }}
                >
                  Reservation
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0)",
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
                 <SvgXml
                    xml= {focused ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M0 5V3H2V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0H10V7L12.5 5.5L15 7V0H16C17.05 0 18 0.95 18 2V18C18 19.05 17.05 20 16 20H4C2.95 20 2 19.05 2 18V17H0V15H2V11H0V9H2V5H0ZM4 9H2V11H4V9ZM4 5V3H2V5H4ZM4 17V15H2V17H4Z" fill="#0081C7"/>
                  </svg>`: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                  <path d="M0 5.01123V3.01123H2V2.01123C2 1.4808 2.21071 0.97209 2.58579 0.597017C2.96086 0.221944 3.46957 0.0112305 4 0.0112305H10V7.01123L12.5 5.51123L15 7.01123V0.0112305H16C17.05 0.0112305 18 0.961231 18 2.01123V18.0112C18 19.0612 17.05 20.0112 16 20.0112H4C2.95 20.0112 2 19.0612 2 18.0112V17.0112H0V15.0112H2V11.0112H0V9.01123H2V5.01123H0ZM4 9.01123H2V11.0112H4V9.01123ZM4 5.01123V3.01123H2V5.01123H4ZM4 17.0112V15.0112H2V17.0112H4Z" fill="#9A999F"/>
                </svg>`}
                    width={17}
                    height={17}
                    fill={focused ? "#0081C7" : "#9A999F"}
                  />
                <Text
                  style={{
                    fontSize: 16,
                    color: focused ? "#0081C7" : "#9A999F",
                    fontFamily: FontFamily.Salsa,
                    fontWeight:"bold"
                  }}
                >
                  Agenda
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(0,129,199,0.1)",
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
                        borderRadius:50,
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
                 <SvgXml
                    xml= {focused ? `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                    <path d="M8.5 8.88889C11.0247 8.88889 13.0714 6.89904 13.0714 4.44444C13.0714 1.98985 11.0247 0 8.5 0C5.97527 0 3.92857 1.98985 3.92857 4.44444C3.92857 6.89904 5.97527 8.88889 8.5 8.88889Z" fill="#0081C7"/>
                    <path d="M8.5 20C12.9183 20 16.5 18.0101 16.5 15.5555C16.5 13.1009 12.9183 11.1111 8.5 11.1111C4.08172 11.1111 0.5 13.1009 0.5 15.5555C0.5 18.0101 4.08172 20 8.5 20Z" fill="#0081C7"/>
                  </svg>`: `<<svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                  <path d="M8.5 8.90012C11.0247 8.90012 13.0714 6.91027 13.0714 4.45568C13.0714 2.00108 11.0247 0.0112305 8.5 0.0112305C5.97527 0.0112305 3.92857 2.00108 3.92857 4.45568C3.92857 6.91027 5.97527 8.90012 8.5 8.90012Z" fill="#9A999F"/>
                  <path d="M8.5 20.0112C12.9183 20.0112 16.5 18.0214 16.5 15.5668C16.5 13.1122 12.9183 11.1223 8.5 11.1223C4.08172 11.1223 0.5 13.1122 0.5 15.5668C0.5 18.0214 4.08172 20.0112 8.5 20.0112Z" fill="#9A999F"/>
                </svg>`}
                    width={17}
                    height={17}
                    fill={focused ? "#0081C7" : "#9A999F"}
                  />
                <Text
                  style={{
                    fontSize: 16,
                    color: focused ? "#0081C7" : "#9A999F",
                    fontFamily: FontFamily.Salsa,
                    fontWeight:"bold"
                  }}
                >
                  Profil
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
