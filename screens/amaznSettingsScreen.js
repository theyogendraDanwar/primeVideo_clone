import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native'
import MenuListItem from '../components/component/MenuListItem'

export default amaznSettingsScreen = () => {
  const [switchValue, toggleSwitch] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MenuListItem title="Stream & Download" />
      <MenuListItem title="Notifications"  />
      <MenuListItem title="AutoPlay" isSwitch toggleValue={switchValue} toggleSwitch={toggleSwitch} />
      <MenuListItem title="Parental Controls" />
      <MenuListItem title="Registered Devices" />
      <MenuListItem title="Notification" last/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b252f'
  }
})

