import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export const Col3 = ({ styles, title, value }) => {
  return (
    <Grid>
      <Col size={4}><Text style={styles}>{title}</Text></Col>
      <Col size={1}><Text style={styles}>:</Text></Col>
      <Col size={6}><Text style={styles}>{value}</Text></Col>
    </Grid>
  )
}
