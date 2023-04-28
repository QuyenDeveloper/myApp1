import React, {useState} from 'react';

import SearchBarComponent from '../component/searchBarComponent';
import {
  View,
  Text,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Button,
} from 'react-native';

export default function MainPage() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <SearchBarComponent />
        <View style={styles.viewContainer}>
          <Text>This is the main page.</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
