import React from "react";
import { Image, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Card } from "../Card";
import ThemeText from "../ThemeText";
import { useThemeColors } from "@/app/hooks/useThemeColors";
import { Link } from "expo-router";

type Props = {
  id: number;
  name: string;
  style?: ViewStyle;
};

export const PokemonCard = ({ style, id, name }: Props) => {
  const color = useThemeColors();
  return (
    <Link href={{pathname: '/', params: {id: id}}} asChild>
      <Pressable style={style}>
        <Card style={[style, styles.card]}>
          <View
            style={[styles.shadow, { backgroundColor: color.grayBackground }]}
          ></View>

          <ThemeText style={styles.id} variant="caption" color="grayMedium">
            #{id.toString().padStart(3, "0")}
          </ThemeText>

          <Image
            width={72}
            height={72}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }}
          />

          <ThemeText>{name}</ThemeText>
        </Card>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "relative",
    alignItems: "center",
    padding: 4,
  },
  id: {
    alignSelf: "flex-end",
  },
  shadow: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    height: 44,
    borderRadius: 7,
  },
});
