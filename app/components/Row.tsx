import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

type Props = ViewProps & {
    gap?: number
}

export const Row = ({style, gap, ...rest}: Props) => {
  return (
    <View style={[style, rowStyle, gap ? {gap: gap} : undefined]} {...rest}></View>
  )
}

const rowStyle = {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
} satisfies ViewStyle
