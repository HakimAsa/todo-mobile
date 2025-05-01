import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import TmTextInput from '../inputs/TmTextInput'

interface TmFormFieldProps {
  name: string
}

export default function TmFormField({ name, ...props }: TmFormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <TmTextInput
        onFocus={() => setIsFocused(true)}
        {...props}
      />
    </>
  )
}

const styles = StyleSheet.create({})
