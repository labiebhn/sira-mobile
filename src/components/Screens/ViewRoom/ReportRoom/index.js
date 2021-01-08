import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../utils/colors';
import { fonts } from '../../../../utils/fonts';
import { Col3 } from '../../../Grid';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Table } from './table';
import { useEffect, useState } from 'react';
import { getReportAPI } from '../../../../api/reportAPI';
import { LoaderDefault } from '../../../Loaders/LoaderDefault';
import { ButtonBlock } from '../../../Buttons';

export const ReportRoom = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    getReportAPI().then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return data ? (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleText}>LAPORAN REALISASI ANGGARAN KEMENTERIAN / LEMBAGA</Text>
              <Text style={styles.titleText}>UNTUK PERIODE {data.tglTransaksi.tglTransaksi}</Text>
              <Text style={styles.titleText}>(DALAM RUPIAH)</Text>
            </View>
            <View style={styles.detail}>
              <View style={{ flex: 1, width: '90%' }}>
                <Col3 styles={styles.detailText} title='Kementrian/Lembaga' value='004 KEMENTRIAN SOSIAL' />
                <Col3 styles={styles.detailText} title='Kode Lap' value={data.kode_lap} />
                <Col3 styles={styles.detailText} title='Tanggal' value={data.tanggal_lap} />
              </View>
            </View>
          </View>
          <Table data={data} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <ButtonBlock title='Unduh PDF' />
      </View>
    </View>
  ) : <LoaderDefault />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  body: {
    padding: 16
  },
  header: {
    marginBottom: 16
  },
  title: {
    paddingVertical: 8,
    marginBottom: 8
  },
  titleText: {
    textAlign: 'center',
    fontFamily: fonts.semiBold,
    fontSize: 12
  },
  detail: {
    flexDirection: 'column',
    height: 40
  },
  detailText: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.black
  },
  footer: {
    backgroundColor: 'white',
    width: '100%', height: 80,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
})
