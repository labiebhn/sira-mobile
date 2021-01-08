import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { FormDate, FormSearch, FormText } from '../../../Forms';
import { colors } from '../../../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBlock, ButtonNav } from '../../../Buttons';
import iconCamera from '../../../../assets/icons/camera.png';
import { ModalPreviewImage } from '../../../Modals/ModalPreviewImage';
import axios from 'axios';
import { addTransactionAPI, getCodeAccountAPI, getTransactionAPI } from '../../../../api/transactionAPI';
import { addCodeAccount, addTransaction } from '../../../../store/actions/transactionAction';
import { LoaderDefault } from '../../../Loaders/LoaderDefault';

export const TransactionForm = ({ handler }) => {

  // redux
  const dispatch = useDispatch();
  const evidence = useSelector(state => state.transactionReducer.evidenceTransaction);
  const transaction = useSelector(state => state.transactionReducer.transaction);

  const [dataForm, setDataForm] = useState({
    kodeTransaksi: new Date().valueOf(),
    nipUser: '88832323456',
    tglTransaksi: '',
    buktiTransaksi: evidence.base64,
    keterangan: '',
    kodeAkun: '',
    nominal: null,
    slug: '',
  });
  useEffect(() => {
    console.log(dataForm.kodeTransaksi);
  }, [dataForm])

  // set modal preview image
  const [modalVisible, setModalVisible] = useState(false);

  // get code account from api
  const codeAccount = useSelector(state => state.transactionReducer.codeAccount);
  useEffect(() => {
    getCodeAccountAPI().then(res => dispatch(addCodeAccount(res.data)));
  }, []);

  // get current date
  const [date, setDate] = useState(new Date());
  // convert date to mysql type
  useEffect(() => {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    setDataForm({ ...dataForm, tglTransaksi: `${y}-${m+1}-${d}` });
  }, [date]);

  // search code account
  const handleTransactionActivity = data => {
    setDataForm({
      ...dataForm,
      keterangan: data.namaAkun,
      kodeAkun: data.kodeAkun,
      slug: data.slug,
    })
  }

  // SUBMIT FORM
  const handleSubmitButton = async () => {
    await addTransactionAPI(dataForm).then(res => console.log(res.data));
    await getTransactionAPI().then(res => dispatch(addTransaction(res.data)));
    handler();
  }

  return codeAccount ? (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.formContainer}>
              <FormText 
                label='Nominal (Rp)' 
                type='number' 
                handler={(e) => setDataForm({ ...dataForm, nominal: parseInt(e.split('.').join('')) })} 
              />
              <FormSearch
                label='Aktivitas Transaksi'
                data={codeAccount}
                filterKey={['kodeAkun', 'namaAkun']}
                handler={handleTransactionActivity}
              />
              <FormDate 
                label='Waktu Transaksi' 
                date={date}
                handler={(e) => setDate(e)}
              />
            </View>
            <View style={styles.detailContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.thumbnail}
              >
                <Image source={{ uri: evidence.uri }} style={styles.thumbnailImg} />
              </TouchableOpacity>
              <ButtonNav icon={iconCamera} />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonBlock title='Submit' bgColor={colors.green} handler={handleSubmitButton} />
          <ButtonBlock title='Batal' bgColor={colors.disable} txtColor={colors.black} />
        </View>
      </ScrollView>
      <ModalPreviewImage
        modalVisible={modalVisible}
        image={evidence.uri}
        handler={() => setModalVisible(!modalVisible)}
      />
    </View>
  ) : <LoaderDefault />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16, paddingVertical: 32,
  },
  formContainer: {
    flex: 5,
    marginRight: 24
  },
  detailContainer: {
    flex: 3,
    alignItems: 'center'
  },
  thumbnail: {
    overflow: 'hidden',
    borderRadius: 8,
    width: 110, height: 165,
    marginBottom: 12
  },
  thumbnailImg: {
    width: 110, height: 165,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 68,
  },
})
