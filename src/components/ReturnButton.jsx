import React from 'react'

import { Button } from 'react-native'
import { useNavigate } from 'react-router-native'

const ReturnButton = () => {
  const navigate = useNavigate()

  return <Button onPress={() => navigate(-1)} title="<" />
}

export default ReturnButton
