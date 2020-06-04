/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import useBalance from '../../hooks/useBalance';

import Colors from '../../styles/Colors';

const BalanceLabel = ({currentBalance}) => {
  const [balance] = useBalance();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient style={styles.panel} color={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{balance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 12,
        color: Colors.white,
    },
    value: {
      color: Colors.white,
      fontSize: 28,
      textAlign: 'center',
    },
    panel: {
      borderRadius: 10,
      minWidth: 200,
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginVertical: 10,
    },
});

export default BalanceLabel;
