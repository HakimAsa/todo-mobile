import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer, {
  KeyboardAvoidViewContainer,
  ScrollableMainContainer,
} from '@/app/components/containers'
import TmTextInput from '@/app/components/inputs/TmTextInput'

export default function Register() {
  return (
    <MainContainer>
      {/* Register form */}
      <KeyboardAvoidViewContainer>
        <Text>Register</Text>
        {/* Registration fields */}
        <TmTextInput
          placeholder="Username"
          iconName="email"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <TmTextInput placeholder="Email" />
          <TmTextInput placeholder="Password" />
          {/* Submit button */}
        </ScrollView>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
