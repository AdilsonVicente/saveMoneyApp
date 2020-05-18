/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

const BalanceLabel = ({currentBalance}) => {
  const currentBalance = 2065.35;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient style={styles.panel} colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        color: Colors.white,
    },
    value: {
      color: Colors.white,
        fontSize: 28,
    },
    panel: {
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginVertical: 10,
    },
});

export default BalanceLabel;
