// import { View, Text, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor:'teal,'
//       }}
//     >
//       <Text style={styles.text}>Universal <Text style={styles.react}>React</Text> with Expo </Text>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   text: {
//     color: 'red'
//   },
//   react: {
//     color: 'blue'
//   },
// });




import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewWhite}></View>
      <View style={styles.viewRed}>
        <Text>bonjour je m'appelle radji </Text>
        <Text>bonsoir, j'habite a bois d'arcy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',

  },
  viewWhite: {
    flex: 1,
    backgroundColor: 'white'
  },
  viewRed: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection:'row',
    gap: 19,
  },
});