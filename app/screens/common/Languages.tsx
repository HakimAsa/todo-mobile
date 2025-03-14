import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LanguageSelection from '@/app/components/LanguageSelection'

export default function Languages() {
  const initialValues = { label: 'English', value: 'en' }
  return (
    <LanguageSelection
      initialValues={initialValues}
      logo
    />
  )
}

const styles = StyleSheet.create({})
