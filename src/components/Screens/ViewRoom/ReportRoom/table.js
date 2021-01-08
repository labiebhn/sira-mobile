import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { colors } from '../../../../utils/colors';
import { fonts } from '../../../../utils/fonts';
import Separator from '../../../../utils/separator';

const TableHeader = () => {
  return (
    <>
      <Row style={styles.header}>
        <Col size={1} style={styles.headerCol}>
          <Text style={styles.headerText}>NO</Text>
        </Col>
        <Col size={4} style={styles.headerCol}>
          <Text style={styles.headerText}>URAIAN</Text>
        </Col>
        <Col size={2} style={styles.headerCol}>
          <Text style={styles.headerText}>ANGGARAN</Text>
        </Col>
        <Col size={2} style={styles.headerCol}>
          <Text style={styles.headerText}>REALISASI</Text>
        </Col>
        <Col size={2} style={styles.headerCol}>
          <Text style={styles.headerText}>REALISASI DI ATAS (BAWAH)</Text>
        </Col>
        <Col size={1} style={styles.headerCol}>
          <Text style={styles.headerText}>%</Text>
        </Col>
      </Row>
    </>
  )
}

const TableBody = ({ no, uraian, anggaran, realisasi, realisasi_dab, persen, header=false, isTotal=false }) => {
  return (
    <>
      <Col size={1} style={styles.bodyCol}>
        <Text style={[styles.bodyText, {textAlign: 'center'}, header ? styles.bodyHeader : null ]}>{no}</Text>
      </Col>
      <Col size={4} style={styles.bodyCol}>
        <Text style={[styles.bodyText, {textAlign: 'left'}, header ? styles.bodyHeader : null ]}>{uraian}</Text>
      </Col>
      <Col size={2} style={styles.bodyCol}>
        <Text style={[styles.bodyText, header ? styles.bodyHeader : null ]}>{anggaran}</Text>
      </Col>
      <Col size={2} style={styles.bodyCol}>
        <Text style={styles.bodyText}>{realisasi}</Text>
      </Col>
      <Col size={2} style={styles.bodyCol}>
        <Text style={styles.bodyText}>{realisasi_dab}</Text>
      </Col>
      <Col size={1} style={styles.bodyCol}>
        <Text style={styles.bodyText}>{persen}</Text>
      </Col>
    </>
  )
}

export const Table = ({ data }) => {

  const TableIncome = () => {
    return (
      <>
        {/* Header 1 */}
        <Row>
          <TableBody header={true} no='A' uraian='PENDAPATAN NEGARA DAN HIBAH' anggaran={budgetSep} />
        </Row>
        {/* Body 1 */}
        <Row>
          <TableBody uraian='PENERIMAAN PERPAJAKAN' realisasi={Separator(PN)} />
        </Row>
        <Row>
          <TableBody uraian='PENERIMAAN NEGARA BUKAN PAJAK' realisasi={Separator(PNBP)} />
        </Row>
        <Row>
          <TableBody uraian='PENERIMAAN HIBAH' realisasi={Separator(PH)} />
        </Row>
        {/* Total 1 */}
        <Row style={{backgroundColor: colors.disable}}>
          <TableBody 
            uraian='JUMLAH PENDAPATAN DAN HIBAH' 
            anggaran={budgetSep} 
            realisasi={Separator(handleSum([PN, PNBP, PH]))}
            realisasi_dab={handleDifference(handleSum([PN, PNBP, PH]))}
            persen={handlePercent(handleSum([PN, PNBP, PH]))} />
        </Row>
      </>
    )
  }

  const TableShopping = () => {
    return (
      <>
        {/* Header*/}
        <Row>
          <TableBody header={true} no='B' uraian='BELANJA' anggaran={budgetSep} />
        </Row>
        {/* Body*/}
        <Row>
          <TableBody uraian='BELANJA PEGAWAI' realisasi={Separator(BP)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA BARANG' realisasi={Separator(BBJ)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA MODAL' realisasi={Separator(BM)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA PEMBAYARAN KEWAJIBAN UTANG' realisasi={Separator(BPKU)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA SUBSIDI' realisasi={Separator(BS)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA HIBAH' realisasi={Separator(BH)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA BANTUAN SOSIAL' realisasi={Separator(BBS)} />
        </Row>
        <Row>
          <TableBody uraian='BELANJA LAIN-LAIN' realisasi={Separator(BL)} />
        </Row>
        {/* Total*/}
        <Row style={{backgroundColor: colors.disable}}>
          <TableBody 
            uraian='JUMLAH BELANJA (B I + B II)' 
            anggaran={budgetSep} 
            realisasi={Separator(handleSum([BP, BBJ, BM, BPKU, BS, BH, BBS, BL]))}
            realisasi_dab={handleDifference(handleSum([BP, BBJ, BM, BPKU, BS, BH, BBS, BL]))}
            persen={handlePercent(handleSum([BP, BBJ, BM, BPKU, BS, BH, BBS, BL]))} />
        </Row>
      </>
    )
  }

  const [budget, setBudget] = useState(12500000);
  const budgetSep = Separator(budget);

  const [sum, setSum] = useState(0);
  const handleSum = (e = []) => {
    let sum = 0;
    e.map(e => sum+=parseInt(e));

    return sum;
  }

  const handleDifference = (sum) => Separator(budget-sum);
  const handlePercent = (sum) => `${parseFloat(sum/budget*100).toFixed(1)}%`;

  const { PN, PNBP, PH, BP, BBJ, BM, BPKU, BS, BH, BBS, BL, TD, P } = data;

  return (
    <>
      <Grid>
        <TableHeader />
      </Grid>
      <Grid>
        <TableIncome />
        <TableShopping />
        {/* Header*/}
        <Row>
          <TableBody header={true} no='C' uraian='PEMBIAYAAN' anggaran={budgetSep} />
        </Row>
        {/* Body*/}
        <Row>
          <TableBody uraian='PEMBIAYAAN PENERIMAAN DAN PENGELUARAN' realisasi={Separator(P)} />
        </Row>
        <Row>
          <TableBody uraian='TRANSFER KE DAERAH' realisasi={Separator(TD)} />
        </Row>
        {/* Total*/}
        <Row style={{backgroundColor: colors.disable}}>
          <TableBody 
            uraian='JUMLAH PEMBIAYAAN DAN TRANSFER' 
            anggaran={budgetSep} 
            realisasi={Separator(handleSum([P, TD]))}
            realisasi_dab={handleDifference(handleSum([P, TD]))}
            persen={handlePercent(handleSum([P, TD]))} />
        </Row>
      </Grid>
    </>
  )

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.disable
  },
  headerCol: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6, paddingHorizontal: 4,
  },
  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: 8,
    color: colors.black,
    textAlign: 'center',
  },
  bodyCol: {
    justifyContent: 'center',
    paddingVertical: 6, paddingHorizontal: 4,
    borderBottomWidth: .5,
    borderColor: colors.disable
  },
  bodyText: {
    fontFamily: fonts.regular,
    fontSize: 8,
    color: colors.black,
    textAlign: 'right',
  },
  bodyHeader: {
    color: 'blue',
    fontFamily: fonts.medium
  }
})
