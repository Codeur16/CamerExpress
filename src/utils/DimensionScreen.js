// Longueur et largeur de l'ecrant en cours=========================================
import { useEffect, useState } from 'react';
import {  Dimensions } from 'react-native';

const ScreenDimensions = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    // Mise à jour des dimensions lorsque l'écran change d'orientation
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
      setScreenHeight(Dimensions.get('window').height);
    };

    // Ajout d'un écouteur d'événement pour détecter les changements d'orientation
    Dimensions.addEventListener('change', updateDimensions);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []); // La dépendance vide signifie que cela ne s'exécute qu'une fois lors du montage

  return screenWidth , screenHeight ;
};

export default ScreenDimensions;
//======================================================================================
