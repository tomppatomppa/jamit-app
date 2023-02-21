import React from 'react'
import { View } from 'react-native'

import Text from './Text'

const Tab = ({ title }) => {
  return (
    <View style={{ margin: 12 }}>
      <Text color={'secondary'}>{title}</Text>
    </View>
  )
}

export default Tab
