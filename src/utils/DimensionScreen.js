// Longueur et largeur de l'ecrant en cours=========================================
import { useEffect, useState } from 'react';
import {  Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
const Width = parseFloat(width)
const Height = parseFloat(height)


export { Width, Height  };
//======================================================================================
