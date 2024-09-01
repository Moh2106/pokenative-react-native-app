import { Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeText from "./components/ThemeText";
import { Card } from "./components/Card";
import { PokemonCard } from "./components/Pokemon/PokemonCard";
import { useFetchQuery, useInfiniteFecthQuery } from "./hooks/useFetchQuery";
import { getPokemonId } from "./functions/pokemon";
import { colors } from "./constants/colors";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { Row } from "./components/Row";

export default function Index() {
  const {data, isFetching, fetchNextPage} = useInfiniteFecthQuery('/pokemon?limit=21')
  const pokemon = data?.pages.flatMap(page => page.results) ?? [];
  const [search, setSearch] = useState("")
  const filteredPokemon = search ? pokemon.filter(p => p.name.includes(search.toLocaleLowerCase()) || getPokemonId(p.url).toString() === search) : pokemon
  
  return (
    <SafeAreaView style={styles.container}>
      <ThemeText variant="headline" color="grayLight">
        Pokemon
      </ThemeText>

      
      <View>
        <SearchBar value={search} onChange={setSearch} />
      </View>

      <Card style={styles.body}>
        <FlatList
          data={filteredPokemon}
          numColumns={3}
          contentContainerStyle={[styles.gap, styles.list]}
          columnWrapperStyle={styles.gap}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.light.tint}/> : null
          }
          onEndReached={() => fetchNextPage()}
          renderItem={({ item }) => (
            <PokemonCard
              id={getPokemonId(item.url)}
              name={item.name}
              style={{ height: 150, flex: 1 / 3 }}
            />
          )} keyExtractor={(item) => item.url}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#ff0000",
  },

  body: {
    flex: 1,
    marginTop: 16
  },

  gap: {
    gap: 8,
  },

  list: {
    padding: 12,
  },
});
