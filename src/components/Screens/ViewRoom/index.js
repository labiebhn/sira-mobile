import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { ButtonFilledVert, ButtonText } from '../../Buttons';
import { HeaderRoom } from '../../Headers';
import { NavbarBottom, NavbarBPK } from '../../Navbar';
import iconTransaction from '../../../assets/icons/transaction-light.png';
import iconGroup from '../../../assets/icons/group-light.png';
import iconReport from '../../../assets/icons/report-light.png';
import { ListRecentTransaction } from '../../Lists/ListRecentTransaction';
import { LoaderDefault } from '../../Loaders/LoaderDefault';
import { getTransactionAPI } from '../../../api/transactionAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../../../store/actions/transactionAction';
import Separator from '../../../utils/separator';
import userLabieb from '../../../assets/image/user/888321.jpg';
import userRida from '../../../assets/image/user/888322.jpg';
import userSri from '../../../assets/image/user/888323.jpg';

const ViewRoom = ({ navigation }) => {

  // redux
  const dispatch = useDispatch();
  const transaction = useSelector(state => state.transactionReducer.transaction);
  const balance = useSelector(state => state.transactionReducer.balance);

  // get data transaction from api
  useEffect(() => {
    getTransactionAPI()
    .then(res => dispatch(addTransaction(res.data)));
  }, []);

  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setIsDone(true);
  }, []);

  return isDone ? (
    <View style={styles.container}>
      <NavbarBPK/>
        <View style={styles.body}>
          <View style={styles.header}>
            <HeaderRoom title='Perbaikan Jalan Margahayu' balance='12.500.000' organization='Kementrian Sosial' />
          </View>
          <View style={styles.action}>
            <ButtonFilledVert title='Anggota' icon={iconGroup} />
            <ButtonFilledVert title='Transaksi' icon={iconTransaction} handler={() => navigation.navigate('TransactionRoom')} />
            <ButtonFilledVert title='Laporan' icon={iconReport} handler={() => navigation.navigate('ReportRoom')} />
          </View>
          <View style={styles.transaction}>
            <View style={{marginBottom: 8}}>
              <Text style={styles.transactionTitle}>Transaksi Terbaru</Text>
            </View>
            <View>
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
        </View>
      <NavbarBottom direct={(e) => navigation.replace(e)} page='Home' />
    </View>
  ) : <LoaderDefault />
}

export default ViewRoom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 0
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 16
  },
  transaction: {
    paddingHorizontal: 0, paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  transactionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.black
  },
})
