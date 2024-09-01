import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeText from "./components/ThemeText";
import { Card } from "./components/Card";
import { PokemonCard } from "./components/Pokemon/PokemonCard";
import { useFetchQuery } from "./hooks/useFetchQuery";

export default function Index() {
  const {data} = useFetchQuery('/pokemon?limit=21')
  const pokemon = data.results ?? []
  
  return (
    <SafeAreaView style={styles.container}>
      <ThemeText variant="headline" color="grayDark">
        Pokemon
      </ThemeText>
      <Card style={styles.body}>
        <FlatList
          data={pokemon}
          numColumns={3}
          contentContainerStyle={[styles.gap, styles.list]}
          columnWrapperStyle={styles.gap}
          renderItem={({ item }) => (
            <PokemonCard
              id={item.id}
              name={item.name}
              style={{ height: 150, flex: 1 / 3 }}
            />
          )}
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
  },

  gap: {
    gap: 8,
  },

  list: {
    padding: 12,
  },
});
