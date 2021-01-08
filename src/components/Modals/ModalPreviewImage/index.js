import React from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { ButtonNav } from '../../Buttons';
import iconClose from '../../../assets/icons/x-circle.png';
import { colors } from '../../../utils/colors';

export const ModalPreviewImage = ({ 
  modalVisible = false,
  image,
  handler,
}) => {
  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
      transparent={true}
    >
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{
          backgroundColor: colors.transparent,
          position: 'absolute',
          top: 24, right: 24,
          width: 40, height: 40,
          justifyContent: 'center', alignItems: 'center',
          borderRadius: 12
        }}>
          <ButtonNav icon={iconClose} handler={handler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  image: {
    flex: 1
  },
})
