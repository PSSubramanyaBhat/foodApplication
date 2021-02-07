import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({dividerColor}) => {
  return (
    <View
      style={{
        height: 40,
        marginHorizontal: 10,
        opacity: 0.8,
        borderBottomWidth: 1,
        borderColor: dividerColor,
      }}></View>
  );
};
export default Divider;
