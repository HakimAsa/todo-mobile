import { ScrollView } from 'react-native'
import * as Yup from 'yup'

import MainContainer, {
  KeyboardAvoidViewContainer,
} from '@/app/components/containers'
import i18n from '@/app/i18n'
import TRN_KEYS from '@/translation/keys'
import IconHeader from '@/app/components/icons/IconHeader'
import TmForm, {
  ErrorMessages,
  TmFormField,
  TmSubmitButton,
} from '@/app/components/forms'
import AuthFooter from './AuthFooter'
import routes from '@/app/navigation/routes'
import TmProps from '@/TmProps'
import authApi from '@/app/api/auth'
import useApi from '@/app/hooks/useApi'
import TmActivityIndicator from '@/app/components/loader/TmActivityIndicator'

const signupSchema = Yup.object({
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mismatched passwords') //"Mismatched passwords" //Mots de passe incompatibles
    .required()
    .min(8), //add custom text for translation
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  username: Yup.string().min(3).required(),
})

type SignupFormValues = Yup.InferType<typeof signupSchema>

const initialValues: SignupFormValues = {
  confirmpassword: '',
  email: '',
  password: '',
  username: '',
}
export default function Register({ navigation }: TmProps) {
  const {
    error,
    loading,
    message,
    request: registerUser,
  } = useApi(authApi.register)
  // register user api call
  const handleSubmit = async (values: any) => {
    console.log(values)
    const res = await registerUser(values)
    if (!res?.ok) return
    navigation.navigate(routes.LOGIN)
  }
  if (loading) return <TmActivityIndicator visible={loading} />
  return (
    <MainContainer>
      {/* Register form */}
      <KeyboardAvoidViewContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <IconHeader name="account-plus" />
          {/* Registration fields */}
          <TmForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
          >
            <ErrorMessages
              error={message || 'Something went wrong!'}
              visible={error}
            />
            <TmFormField
              name="username"
              placeholder={i18n.t(TRN_KEYS.USERNAME)}
              iconName="account"
            />
            <TmFormField
              name="email"
              placeholder={i18n.t(TRN_KEYS.EMAIL)}
              iconName="email"
            />
            <TmFormField
              label={i18n.t(TRN_KEYS.PASSWORD)}
              name="password"
              placeholder="* * * * * * * *"
              iconName="lock"
            />
            <TmFormField
              name="confirmpassword"
              label={i18n.t(TRN_KEYS.CONFIRMPASSWORD)}
              placeholder="* * * * * * * *"
              iconName="lock"
            />
            {/* Submit button */}
            <TmSubmitButton title={i18n.t(TRN_KEYS.SIGNUP)} />
            <AuthFooter
              unlinkedText={TRN_KEYS.ALREADYHAVEANACCOUNT}
              linkedText={TRN_KEYS.LOGIN}
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
          </TmForm>
        </ScrollView>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
