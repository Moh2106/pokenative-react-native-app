import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Row } from "./Row";
import { useThemeColors } from "../hooks/useThemeColors";

type Props = {
  value: string;
  onChange: (s: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  const color = useThemeColors();
  return (
    <Row gap={8} style={[styles.wrapper, { backgroundColor: color.grayWhite }]}>
      <TextInput onChangeText={onChange} value={value} style={styles.input} />
    </Row>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 32,
    borderRadius: 16,
    paddingHorizontal: 12
  },
  input: {
    flex: 1,
    height: 16,
    fontSize: 16,
    lineHeight: 16
  }
});
