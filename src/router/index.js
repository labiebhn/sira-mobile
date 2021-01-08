import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Spalsh from '../pages/Splash';
import Home from '../pages/Home';
import Room from '../pages/Room';
import Profile from '../pages/Profile';
import ViewRoom from '../components/Screens/ViewRoom';
import CreateRoom from '../pages/Room/CreateRoom';
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';
import { Transaction } from '../components/Screens/Transaction';
import { TransactionRoom } from '../components/Screens/ViewRoom/TransactionRoom';
import { ReportRoom } from '../components/Screens';

const Stack = createStackNavigator();
const Router = () => {

  const optionCreateRoom = {
    title: 'Buat Ruangan',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: fonts.semiBold,
      color: colors.black,
      fontSize: 22
    }
  };

  const optionTransaction = {
    title: 'Transaksi',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: fonts.semiBold,
      color: colors.black,
      fontSize: 22
    }
  };

  const optionReport = {
    title: 'Laporan Realisasi Anggaran',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: fonts.semiBold,
      color: colors.black,
      fontSize: 22
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Spalsh} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ViewRoom" component={ViewRoom} options={{ headerShown: false }} />
      <Stack.Screen name="TransactionRoom" component={TransactionRoom} options={optionTransaction} />
      <Stack.Screen name="ReportRoom" component={ReportRoom} options={optionReport} />
      <Stack.Screen name="Room" component={Room} options={{ headerShown: false }} />
      <Stack.Screen name="CreateRoom" component={CreateRoom} options={optionCreateRoom} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router;