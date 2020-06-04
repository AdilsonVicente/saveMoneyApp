/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const InputMoney = ({value, startWithDebit = true,  onChangeDebit, onChangeValue}) => {

    const seDefaultDebit = () => {
        if (value === 0) {
            return startWithDebit ? -1 : 1;
        } else {
            return value <= 0 ? -1 : 1;
        }
    };

    const seDefaultDebitPrefix = () => {
        if (value === 0) {
            return startWithDebit ? '-' : '';
        } else {
            return value <= 0 ? '-' : '';
        }
    };
    const [debit, setDebit] = useState(seDefaultDebit());
    const [debitPrefix, setDebitPrefix] = useState(seDefaultDebitPrefix());

    const onChangeDebitCredit = () => {
        if (debit < 0) {
          setDebit(1);
          setDebitPrefix('');
          onChangeDebit && onChangeDebit(false);
        } else {
            setDebit(-1);
            setDebitPrefix('-');
            onChangeDebit && onChangeDebit(true);
        }

        onChangeValue(value * -1);
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.debitButton} onPress={onChangeDebitCredit}>
          <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
          <Text style={styles.debitButtonText}>RS</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: '',
            suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
            onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    input: {
        flex: 1,
        fontSize: 28,
        color: Colors.white,
        textAlign: 'right',
        paddingLeft: 0,
        paddingRight: 20,
    },
    debitButton: {
       flexDirection: 'row',
       paddingVertical: 20,
       paddingHorizontal: 20,
    },
    debitButtonPrefix: {
        fontSize: 28,
        color: Colors.white,
        minWidth: 8,
    },
    debitButtonText: {
        fontSize: 28,
        color: Colors.white,
    },
});

export default InputMoney;
