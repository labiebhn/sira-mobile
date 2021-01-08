import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

export const FormSearch = ({
  label = 'Label',
  required = true,
  data = [],
  filterKey = [],
  valueSearch = '',
  handler,
}) => {

  const KEYS_TO_FILTERS = filterKey;

  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggest, setShowSuggest] = useState(false);

  const filteredData = data.filter(createFilter(searchTerm, filterKey));

  const handleSearchChange = e => {
    setSearchTerm(e);
    setShowSuggest(true);
  }

  const handleSuggestPress = data => {
    setSearchTerm(data.namaAkun);
    setShowSuggest(false);
    handler(data);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.label}>{label}</Text>
        {required ? <Text style={styles.required}>*</Text> : null}
      </View>
      <SearchInput
        onChangeText={(term) => handleSearchChange(term)}
        style={styles.input}
        placeholder=''
        defaultValue={searchTerm}
      />
      <ScrollView>
        {searchTerm && showSuggest ? filteredData.map(data => {
          return (
            <TouchableOpacity key={data.kodeAkun} style={styles.touchList} onPress={() => handleSuggestPress(data)}>
              <View>
                <Text>{data.namaAkun}</Text>
              </View>
            </TouchableOpacity>
          )
        }) : null}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black,
  },
  required: {
    color: colors.red,
    marginLeft: 4
  },
  input: {
    borderColor: colors.black,
    borderBottomWidth: .7,
    fontFamily: fonts.regular,
    fontSize: 16,
    padding: 6,
    color: colors.black,
    marginTop: -4,
    marginBottom: 4
  },
  alert: {
    fontFamily: fonts.medium,
    fontSize: 10,
    marginVertical: 4
  },
  touchList: {
    padding: 6,
  }
})
