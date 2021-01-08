import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FormText } from '../../../components/Forms/FormText'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts';
import DatePicker from 'react-native-date-picker';
import { FormDate } from '../../../components/Forms/FormDate';
import { ButtonBlock } from '../../../components/Buttons/ButtonBlock';
import AwesomeAlert from 'react-native-awesome-alerts';

const CreateRoom = () => {
  
  const [data, setData] = useState({
    name: null,
    description: null,
    total: null,
    endActivity: new Date(),
  })

  const [showAlert, setShowAlert] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          {/* <Text style={styles.greet}>Berikan ruangan khusus untuk mengawasi penggunaan anggaran negara.</Text> */}
          <View style={styles.form}>
            <FormText label='Nama Ruangan' handler={(e) => setData({...data, name: e})} />
            <FormText label='Deskripsi' required={false} handler={(e) => setData({...data, description: e})} />
            <FormText label='Anggaran (Rp.)' type='numeric' handler={(e) => setData({...data, total: e})}/>
            <FormDate label='Akhir Kegiatan' date={data.endActivity} handler={(e) => setData({...data, endActivity: e})} />
          </View>
          <ButtonBlock title='Kirim Data' handler={() => setShowAlert(true)} />
          <AwesomeAlert 
            show={showAlert}
            showProgress={false}
            title="Periksa Kembali"
            message="Pastikan data yang diisi sudah benar."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="Kembali"
            confirmText="Buat Ruangan"
            confirmButtonColor={colors.green}
            onConfirmPressed={() => setShowAlert(false)}
            onCancelPressed={() => setShowAlert(false)}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default CreateRoom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  body: {
    padding: 16,
  },
  greet: {
    fontFamily: fonts.regular,
    fontSize: 24,
    color: colors.grey,
    lineHeight: 33
  },
  form: {
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 14,
    paddingHorizontal: 16, paddingVertical: 24,
    marginTop: 24, marginBottom: 40,
  },
})
