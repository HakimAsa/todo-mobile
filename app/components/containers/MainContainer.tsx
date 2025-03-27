import { View } from 'react-native'
import React from 'react'

import TmProps from '@/TmProps'
import { StatusBarHeight } from '@/app/config/constants'

interface MainContainerProps extends TmProps {
  style: any
}

export default function MainContainer({
  children,
  style,
  ...props
}: MainContainerProps) {
  return (
    <View
      style={[{ padding: 20, paddingTop: StatusBarHeight + 30 }, style]}
      {...props}
    >
      {children}
    </View>
  )
}
