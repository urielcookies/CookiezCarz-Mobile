import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const Home = () => {
  return (
    <StyledView>
      <StyledText>Home</StyledText>
    </StyledView>
  )
}

export default Home
