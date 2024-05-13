import React from 'react'
import { View } from 'react-native'
import { Colors, IOS } from '@Config';

//Redux
import Redux from '@Redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

//Navigation
import Navigator from '@Navigation'

export default () => {
  return (
    <Provider store={Redux['store']}>
      <View style={{ flex: 1, backgroundColor: Colors.backGround }}>
        <PersistGate loading={null} persistor={Redux['persistor']}>
          <Navigator />
        </PersistGate>
      </View>
    </Provider>
  )
}