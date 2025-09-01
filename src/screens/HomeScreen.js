import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import { Movies } from '../services/MoviesByGenre';

const genres = ['Ação', 'Comédia', 'Drama', 'Terror', 'Romance'];

const HomeScreen = ({ navigation }) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [favorites, setFavorites] = useState([]);

  const getRecommendedMovies = () => {
    return Movies.filter(movie => movie.genre === selectedGenre);
  };

  const toggleFavorite = (movie) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === movie.id);
    if (isAlreadyFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.headerWrapper}>
          <Header />
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Escolha seu gênero favorito</Text>
          <Picker
            selectedValue={selectedGenre}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedGenre(itemValue)}
          >
            {genres.map((genre) => (
              <Picker.Item key={genre} label={genre} value={genre} />
            ))}
          </Picker>
        </View>
      </View>

      <Text style={styles.title}>Filmes recomendados</Text>

      <View style={styles.moviesContainer}>
        <FlatList
          data={getRecommendedMovies()}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              genre={item.genre}
              description={item.description}
              image={item.image}
              isFavorite={isFavorite(item.id)}
              onToggleFavorite={() => toggleFavorite(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text>Nenhum filme encontrado para este gênero.</Text>
          }
        />
      </View>

      <Text style={styles.title}>Filmes curtidos</Text>

      <View style={styles.moviesContainer}>
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              genre={item.genre}
              description={item.description}
              image={item.image}
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text>Você ainda não curtiu nenhum filme.</Text>
          }
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#8b3cfa8f',
  },

  headerWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  pickerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingLeft: 16
  },

  label: {
    fontSize: 16,
    textAlign: 'right',
    color: '#fff'
  },

  picker: {
    height: 50,
    width: 100,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#f0f0f09d',
  },

  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 16,
  },

  moviesContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    height: 200,
  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    margin: 16
  },
});

export default HomeScreen;
