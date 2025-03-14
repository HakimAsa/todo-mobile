import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../config/colors'
import TmText from './common/text/TmText'

interface LsProps {
  initialValues: object
  logo: boolean
}

export default function LanguageSelection({ initialValues, logo }: LsProps) {
  return (
    <View style={styles.container}>
      <TmText
        small
        style={styles.text}
      >
        LanguageSelection
      </TmText>
      {logo && <TmText style={{ marginTop: 10 }}>Logo</TmText>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
  },
})
