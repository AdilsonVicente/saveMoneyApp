/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const ActionFooter = ({chidren}) => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            {chidren}
        </View>

    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export const ActionSecondaryButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.SecondaryButton}>
            <Text style={styles.SecondaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryButton: {
        borderRadius: 150,
        borderWidth: 1,
        borderColor: Colors.green,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    primaryButtonText: {
        fontSize: 18,
        alignItems: 'center',
        color: Colors.green,
    },
    SecondaryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    SecondaryButtonText: {
        fontSize: 18,
        alignItems: 'center',
        color: Colors.white,
    },
});

export default ActionFooter;
