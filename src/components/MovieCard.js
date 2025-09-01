import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MovieCard = ({ title, genre, description, image, isFavorite, onToggleFavorite }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.genre}>{genre}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.heartButton} onPress={onToggleFavorite}>
        <FontAwesome
          name="heart"
          size={24}
          color={isFavorite ? 'red' : 'gray'}
        />
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 8,
    width: 320,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  image: {
    width: 100,
    height: 140,
    borderRadius: 6,
  },

  textContainer: {
    flex: 1,
    padding: 12,
    gap: 4,
    position: 'relative',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },

  genre: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },

  description: {
    fontSize: 13,
    color: '#333',
  },

  heartButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
export default MovieCard;