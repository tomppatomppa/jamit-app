import React from 'react'
import { Pressable, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import Text from './Text'

const Tab = ({ navigateTo, title }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(navigateTo)}>
      <View style={{ margin: 12 }}>
        <Text color={'secondary'}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default Tab
