'use strict';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import iconSnap from '../../../assets/icons/circle.png';
import { addEvidenceTransaction } from '../../../store/actions/transactionAction';

class CameraTransaction extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.captureContainer}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Image source={iconSnap} style={{
              width: 80, height: 80
            }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.3, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.props.addEvidenceTransaction(data);
      this.props.handler();
    }
  };
}

export default connect(null, { addEvidenceTransaction })(CameraTransaction);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    position: 'relative'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: { 
    flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%', height: 140
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
