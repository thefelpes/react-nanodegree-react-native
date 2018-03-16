import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import DeckStatusBar from './src/components/DeckStatusBar'
import Tabs from './src/components/Tabs'
import store from './src/store'

const App = () => (
  <Provider store={store}>
    <View style={{flex: 1}}>
      <DeckStatusBar backgroundColor={'#aaa'} />
      <Tabs />
    </View>
  </Provider>
)

export default App
