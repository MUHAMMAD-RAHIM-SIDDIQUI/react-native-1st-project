import { StyleSheet, Text, View } from 'react-native';
import { Login } from './login';

export const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate totam velit saepe, quasi ipsum laborum, et aliquid in, quia aliquam quos adipisci nemo exercitationem doloremque similique. Incidunt, repellat iusto?</Text>
      </View>
      <View style={styles.body}>
        <Login/>
      </View>
      <View style={styles.footer}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
     backgroundColor: 'orange',
  },
  header: {
    flex: 2,
    

  },
  body: {
    flex: 9,
   
  },
  footer: {
    flex: 1,
   
  }
})