import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { CardBalance } from '../../Cards';
import { ListRecentTransaction } from '../../Lists';
import userLabieb from '../../../assets/image/user/888321.jpg';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { LoaderDefault } from '../../Loaders/LoaderDefault';
import Separator from '../../../utils/separator';

export const Transaction = () => {

  const [screen, setScreen] = useState({
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  });
  const { screenWidth, screenHeight } = screen;

  // redux
  const transaction = useSelector(state => state.transactionReducer.transaction);
  const balance = useSelector(state => state.transactionReducer.balance);

  const [totalTransaction, setTotalTransaction] = useState({
    cashIn: null,
    cashOut: null,
  });
  const { cashIn, cashOut } = totalTransaction;

  const sumTransactionTotal = async () => {
    let plus = 0; let min = 0;
    await transaction.map(transaction => {
      if(transaction.kodeAkun.charAt(0) === '4') {
        plus += parseInt(transaction.nominal);
      } else {
        min += parseInt(transaction.nominal);
      }
    });

    setTotalTransaction({
      ...totalTransaction,
      cashIn: plus,
      cashOut: min,
    });
  }

  useEffect(() => {
    transaction ? sumTransactionTotal() : null;
  }, [transaction])

  return (
    <View style={[styles.container, {width: screenWidth}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.body}>
          <View style={styles.balance}>
            <Text style={styles.balanceTitle}>SALDO</Text>
            <Text style={styles.balanceTotal}>Rp. {Separator(balance)}</Text>
            <Text style={styles.activity}>Perbaikan Jalan Margahayu</Text>
          </View>
          <View style={styles.balanceDetail}>
            <CardBalance title='Pemasukan' total={Separator(cashIn)} />
            <CardBalance title='Pengeluaran' total={Separator(cashOut)} min={true} /> 
          </View>
          <View style={styles.listTransaction}>
            {transaction ? 
              <FlatList 
                data={transaction}
                keyExtractor={item => item.kodeTransaksi}
                renderItem={({ item }) => <ListRecentTransaction 
                  image={userLabieb}
                  name={'Labieb H'} 
                  nip={item.nipUser}
                  total={Separator(item.nominal)}
                  date={item.tglTransaksi}
                  plus={item.kodeAkun.charAt(0) === '4' ? true : false} 
                /> }
              /> : <LoaderDefault />
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  body: {
    padding: 16
  },
  balance: {
    alignItems: 'center',
    marginBottom: 16
  },
  balanceTitle: {
    fontFamily: fonts.semiBold,
    letterSpacing: 3,
    fontSize: 18,
    color: colors.black
  },
  balanceTotal: {
    fontFamily: fonts.regular,
    fontSize: 28,
    color: colors.black
  },
  activity: {
    fontFamily: fonts.regular,
    color: colors.grey,
  },
  balanceDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listTransaction: {
    marginVertical: 24
  }
})
