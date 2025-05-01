import {
  DimensionValue,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'
import React from 'react'

import TmText from '../common/text/TmText'
import Colors from '@/config/colors'
import { MaterialCommunityIcons, McNames } from '@/config/icons'

interface TmTextInputProps extends TextInputProps {
  iconColor?: string
  iconName?: McNames
  textStyle?: any
  width?: DimensionValue
  label?: string
}

// ...
export default function TmTextInput({
  iconColor,
  iconName,
  label,
  textStyle,
  width,
  ...props
}: TmTextInputProps) {
  return (
    <View style={{ marginBottom: 5 }}>
      {label ? (
        <TmText
          fontSize={10}
          style={[textStyle, { marginLeft: 0, fontWeight: 700 }]}
          {...props}
        >
          {label}
        </TmText>
      ) : null}
      <View style={[styles.container, { width }]}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName} // Fixed: Corrected the type of 'name' prop
            color={iconColor}
            size={24}
          />
        )}

        <TextInput
          placeholderTextColor={Colors.medium}
          style={[styles.input]}
          {...props}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: Colors.primary1,
    borderWidth: 1,
    minHeight: 40, // ensures enough space to vertically center content
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 5, // instead of margin
    borderColor: 'gray',
  },
})
