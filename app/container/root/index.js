import 'react-native-gesture-handler';
import React, {useContext, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {CombinedDefaultTheme} from '../../theme';
import {navigationRef} from '../../utils/navigation';
import OrderScreen from '../home/OrderScreen';
import TradeScreen from '../home/TradeScreen';
import HomeScreen from '../home/HomeScreen';

const Stack = createStackNavigator();

function RootScreen() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer ref={navigationRef} theme={CombinedDefaultTheme}>
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#52a96f',
                },
              }}
            />
            <Stack.Screen
              name="Order"
              component={OrderScreen}
              options={{
                title: 'Order',
                headerStyle: {
                  backgroundColor: '#52a96f',
                },
              }}
            />
            <Stack.Screen
              name="Trade"
              component={TradeScreen}
              options={{
                title: 'Trade',
                headerStyle: {
                  backgroundColor: '#52a96f',
                },
              }}
            />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default RootScreen;
