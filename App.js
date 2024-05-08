import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import SectionListBasics from './components/SectionListBasics';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#61dafb" hidden={false}/>
      <Text style={styles.titleText} >
        {"Modes"}
      </Text>
      <FlatList
        data={[{ key: 'sectionList' }]}
        renderItem={() => <SectionListBasics />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
