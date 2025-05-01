import { ScrollView, Text } from 'react-native'
import React from 'react'
import MainContainer, {
  KeyboardAvoidViewContainer,
  ScrollableMainContainer,
} from '@/app/components/containers'
import TmTextInput from '@/app/components/inputs/TmTextInput'
import i18n from '@/app/i18n'
import TRN_KEYS from '@/translation/keys'

export default function Register() {
  return (
    <MainContainer>
      {/* Register form */}
      <KeyboardAvoidViewContainer>
        <Text>Register</Text>
        {/* Registration fields */}
        <TmTextInput
          placeholder={i18n.t(TRN_KEYS.USERNAME)}
          iconName="account"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <TmTextInput
            placeholder={i18n.t(TRN_KEYS.EMAIL)}
            iconName="email"
          />
          <TmTextInput
            placeholder="* * * * * * * *"
            iconName="lock"
          />
          <TmTextInput
            placeholder="* * * * * * * *"
            iconName="lock"
          />
          {/* Submit button */}
        </ScrollView>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
