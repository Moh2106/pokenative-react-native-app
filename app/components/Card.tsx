import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'
import { Shadow } from '../constants/Shadow'
import { useThemeColors } from '../hooks/useThemeColors'

type Props = ViewProps

export const Card = ({style, ...rest}: Props) => {
    const colors = useThemeColors()
  return (
    <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...rest} />
  )
}

const styles = {
    backgroundColor: "#fff",
    borderRadius: 8,
    ...Shadow.dp2
} satisfies ViewStyle
