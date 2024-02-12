// <ScrollView
//   contentContainerStyle={{
//     flex: 1,
//     flexDirection: "column",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//  <View className=" flex    flex-col w-full h-64 bg-white content-center justify-center items-center ">
//     <View
//       className=" w-full h-64 mb-3  flex-grow flex-shrink  flex-nowrap items-center  justify-start "
//       style={{ position: "fixed" }}
//     >
//       <Image
//         source={bus}
//         className=" w-full   max-h-64  object-cover

//       "
//       />

//       <View
//         className="w-full  h-64 absolute object-cover flex flex-col
//        "
//         style={{ backgroundColor: "rgba(0,129,199,0.65)" }}
//       >
//         <View className=" w-full h-auto flex flex-row text-white text-base whitespace-nowrap shadow-sm justify-around items-center px-16 py-5 rounded-3xl top-5 left-0">
//           {/* <Button >Aller-retour</Button> */}
//           <Button
//             idStyle={customFont}
//             className={
//               focus
//                 ? "font-medium m-2  bg-sky-700"
//                 : " font-semibold m-2 bg-none text-sky-700"
//             }
//             style={{ fontSize: 12 }}
//             type="feather"
//             theme={{
//               fontFamily: FontFamily.North,
//               colors: { primary: "rgba(0,129,199,1)" },
//             }}
//             mode={focus ? "contained" : "text"}
//             buttonColor="rgba(0,129,199,1)"
//             onPress={() => {
//               console.log("Pressed");
//               setFocus(focus);
//             }}
//           >
//             Aller-retour
//           </Button>
//           <Button
//             idStyle={customFont}
//             icon={!focus ? "check" : ""}
//             className={
//               !focus
//                 ? "font-semibold m-2  bg-sky-700"
//                 : "font-semibold m-2  bg-white text-sky-700"
//             }
//             buttonColor="rgba(0,129,199,1)"
//             style={{ fontFamily: FontFamily.Laila, fontSize: 12 }}
//             theme={{ colors: { primary: "rgba(0,129,199,1)" } }}
//             mode={!focus ? "contained" : "elevated"}
//             onPress={() => {
//               console.log("Pressed");
//               setFocus(focus);
//             }}
//           >
//             Aller-simple
//           </Button>
//         </View>
//         <View className="flex flex-row max-w-[471px] items-center justify-between gap-5 px-5 my-5 ">
//           <View className="self-stretch flex grow basis-[0%] flex-col items-stretch">
//             <View className="flex flex-row content-center items-center  justify-center">
//               <Text
//                 className="text-white text-lg font-light self-center whitespace-nowrap"
//                 style={{ fontFamily: FontFamily.Laila }}
//               >
//                 De
//               </Text>
//               <Feather name="chevron-down" size={24} color="white" />
//             </View>
//             <View className="">
//               <Text
//                 className="text-white text-3xl font-bold self-center whitespace-nowrap mt-0"
//                 style={{ fontFamily: FontFamily.Laila }}
//               >
//                 {SelectedSitesAgencesDepart}
//               </Text>
//             </View>
//             <View className="w-100 items-center justify-center">
//               <Text
//                 className=" text-white text-lg whitespace-nowrap mt-1"
//                 style={{ fontFamily: FontFamily.Laila }}
//               >
//                 {SelectedVilleDepart}
//               </Text>
//             </View>
//           </View>
//           <View
//             className="bg-white"
//             style={{
//               width: 50,
//               height: 50,
//               borderRadius: 50,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <FontAwesome5
//               name="exchange-alt"
//               size={24}
//               color="rgba(0,129,199,1)"
//             />
//           </View>
//           <View className="self-stretch flex grow basis-[0%] flex-col items-stretch">
//             <View className="flex flex-row content-center items-center  justify-center">
//               <Text
//                 className="text-white text-lg  font-light self-center whitespace-nowrap"
//                 style={{ fontFamily: FontFamily.Laila }}
//               >
//                 A
//               </Text>
//               <Feather name="chevron-down" size={24} color="white" />
//             </View>
//             <View className="">
//               <Text
//                 className="text-white text-3xl font-bold self-center whitespace-nowrap mt-0"
//                 style={{ fontFamily: FontFamily.Laila }}
//               >
//                 {SelectedSitesAgencesArrive}
//               </Text>
//             </View>
//             <View className="w-100 items-center justify-center">
//               <Text
//                 className=" text-white text-lg whitespace-nowrap mt-1"
//                 style={{ fontFamily: FontFamily.Laila }}
//               >
//                 {SelectedVilleArrive}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   </View>
// </ScrollView>
