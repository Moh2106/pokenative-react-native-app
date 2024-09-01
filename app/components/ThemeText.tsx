import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  body3: {
    fontSize: 10,
    lineHeight: 16,
  },

  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },

  caption: {
    fontSize: 8,
    lineHeight: 12,
  },

  subtitle1: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "bold",
  },

  subtitle2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },

  subtitle3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "bold",
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof typeof colors["light"];
};

function ThemeText({ variant, color, ...rest }: Props) {
  const colors = useThemeColors();
  
  return (
    <Text
      style={[styles[variant ?? "body3"], { color: colors[color ?? "grayDark"] }]}
      {...rest}
    ></Text>
  );
}

export default ThemeText;
