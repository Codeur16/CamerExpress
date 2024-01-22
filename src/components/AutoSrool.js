import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  require('../assets/images/food1.jpg'),
  require('../assets/images/food01.jpg'),
  require('../assets/images/food02.jpg'),
];

const CustomSwiper = () => {
  return (
    <Swiper
      autoplay={true}
      speed={10000} 
      autoplayTimeout={3} // Vitesse d'autoplay de 3 secondes
      showsPagination={true}
      style={styles.wrapper}
      dotStyle={styles.paginationDot} // Styles des points de pagination
      activeDotStyle={styles.activePaginationDot} // Styles du point de pagination actif
      paginationStyle={styles.pagination} // Styles du conteneur de pagination
      loop={true} // Activer la lecture en boucle
    >
      {images.map((image, index) => (
        <View style={styles.slide} key={index}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // Styles pour le conteneur du Swiper
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Styles pour chaque diapositive
  },
  image: {
    width: '99%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:10
    // Styles pour l'image
  },
  pagination: {
    bottom: 10, // Position verticale de la pagination
  },
  paginationDot: {
    width: 8, // Largeur du point de pagination
    height: 8, // Hauteur du point de pagination
    borderRadius: 4, // Bord arrondi du point de pagination
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Couleur du point de pagination
    marginLeft: 3, // Marge entre les points
    marginRight: 3, // Marge entre les points
  },
  activePaginationDot: {
    width: 12, // Largeur du point de pagination actif
    height: 12, // Hauteur du point de pagination actif
    borderRadius: 6, // Bord arrondi du point de pagination actif
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Couleur du point de pagination actif
  },
});

export default CustomSwiper;
