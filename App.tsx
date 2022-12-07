import React from 'react'
import { View } from 'react-native'
import { Colors, IOS } from '@config';
import { getStatusBarHeight } from 'react-native-status-bar-height';

//Query
import { queryClient, asyncStoragePersistor } from '@query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

//Navigation
import Navigator from '@navigation'

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGround, paddingTop: IOS ? getStatusBarHeight() : 0 }}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersistor }}
      >
        <Navigator />
      </PersistQueryClientProvider>
    </View>
  )
}