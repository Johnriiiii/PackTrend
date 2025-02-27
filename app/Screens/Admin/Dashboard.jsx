import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './actions'  // Assuming you have an action to handle logout

const Dashboard = () => {
  const name = useSelector(state => state.name.value)
  const email = useSelector(state => state.email.value)  // Example: assuming email is also in your Redux state
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())  // Dispatch your logout action
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi there, {name}</Text>
      <Text style={styles.email}>Email: {email}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
})

export default Dashboard
