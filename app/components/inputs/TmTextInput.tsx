import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'

import TmText from '../common/text/TmText'
import Colors from '@/app/config/colors'
import { MaterialCommunityIcons, McNames } from '@/app/config/icons'

interface TmTextInputProps extends TextInputProps {
  iconColor?: string
  iconName?: McNames
  textStyle?: any
  width?: ViewStyle
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
  const containerStyle: ViewStyle = {
    width:
      typeof width === 'number' || typeof width === 'string' ? width : '100%',
  }
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
      <View style={[styles.container, containerStyle]}>
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
    borderWidth: 1,
    borderColor: Colors.medium,
  },
  input: {
    flex: 1,
    height: 35,
    borderColor: 'gray',
    marginBottom: 10,
  },
})
