import { Formik, FormikHelpers } from 'formik'
import { AnySchema } from 'yup'

import { commonProps } from '@/TmProps'

interface TmFormProps extends commonProps {
  onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => Promise<any>
  initialValues: any
  validationSchema: AnySchema
}

export default function TmForm(props: TmFormProps) {
  const { initialValues, onSubmit, validationSchema, children } = props
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}
