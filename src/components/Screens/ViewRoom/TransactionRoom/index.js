import React, { useEffect, useState, useRef } from 'react'
import { ActivityIndicator, Alert, BackHandler, Button, Dimensions, FlatList, ScrollView, SectionList, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionAPI } from '../../../../api/transactionAPI';
import { addTransaction } from '../../../../store/actions/transactionAction';
import { colors } from '../../../../utils/colors';
import { LoaderDefault } from '../../../Loaders/LoaderDefault';
import { NavbarTransaction } from '../../../Navbar';
import { Transaction } from '../../Transaction';
import { TransactionInput } from '../../TransactionInput';

export const TransactionRoom = ({ navigation }) => {

  const [page, setPage] = useState([
    { title: <Transaction />, key: '1' },
    { title: <TransactionInput />, key: '2' },
  ]);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageScroll, setPageScroll] = useState(0);

  // handle slideScroll page and back holder
  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const backAction = () => {
      if(pageScroll >= screenWidth) {
        pageIndex.scrollToIndex({ index: 0 });
      } else {
        navigation.goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [pageScroll]);

  // handle content is ready or not
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setIsDone(true);
  }, []);

  return isDone ? (
    <View style={styles.container}>
      <NavbarTransaction scroll={pageScroll} refPage={pageIndex} />
      <FlatList
        ref={ref => setPageIndex(ref)}
        data={page}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        // onMomentumScrollEnd={e => setPageScroll(e.nativeEvent.contentOffset.x)}
        onScroll={e => setPageScroll(e.nativeEvent.contentOffset.x)}
        renderItem={({ item }) => item.title}
      />
    </View>
  ) : <LoaderDefault />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  listContainer: {
    width: '100%', height: 340,
    borderWidth: 1, borderColor: colors.red,
  },
})
