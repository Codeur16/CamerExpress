// import React, { useEffect, useRef } from 'react';
// import { View, Image } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
// import * as cocoSsd from '@tensorflow-models/coco-ssd';

// const App = () => {
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     const loadModel = async () => {
//       // Charger le modèle.
//       await tf.ready();
//       const model = await cocoSsd.load();

//       // Capturer une image depuis la caméra.
//       const { uri } = await cameraRef.current.takePictureAsync();

//       // Charger l'image depuis l'URI.
//       const img = await tf.browser.fromPixels(Image.resolveAssetSource({ uri }));

//       // Classer l'image.
//       const predictions = await model.detect(img);

//       console.log('Predictions: ');
//       console.log(predictions);
//     };

//     loadModel();
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <Camera
//         ref={cameraRef}
//         style={{ flex: 1 }}
//         type={Camera.Constants.Type.back}
//         autoFocus={Camera.Constants.AutoFocus.on}
//       />
//     </View>
//   );
// };


