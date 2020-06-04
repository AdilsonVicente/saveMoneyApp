/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Image, StyleSheet} from 'react-native';

import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

import Colors from '../../styles/Colors';

import Logo from '../../assets/logo-white.png';

const Welcome = ({navigation}) => {
    const [amount, setAmount] = useState(0);

    const onsavePress = () => {

    };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
          <Image source={Logo} />
      </View>
      <WelcomeMessage />
      <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
      <ActionFooter>
          <ActionPrimaryButton title="Continuar" onPress={onsavePress} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Welcome;
