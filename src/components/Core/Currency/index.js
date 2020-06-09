/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import NumberFormat from 'react-number-format';

const Currency = ({value}) => {
  return (
    <View>
      <NumberFormat
        value={parseFloat(value)}
        displayType={'text'}
        thousandSeparator={'.'}
        decimalSeparator={true}
        fixedDecimalScale={true}
        prefix={'R$ '}
        renderText={(item) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Currency;
