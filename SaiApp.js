// // import Rreact from "react";
// // import {View, Text, StyleSheet} from "react-native";

// // export default function App () {
// //     return(
// //          <View style={styles.container}>
// //             <Text>My name is SaiThakare</Text>
// //          </View>
// //     );
// // }


// // const styles = StyleSheet.create({
// //       container: {
// //           flex: 1,
// //           backgroundColor: '#fff',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //       },
// // });

// // Import componets
// import { StatusBar } from 'expo-status-bar'
// import {StyleSheet, Text, View} from 'react-native'

// // state [var name = "sai"]
// // name = "sai"
// // setState, name

// export default function App() {
//   return (
//     <View style = {component.parentDiv}>
//        <Text> Hellow world!!</Text>
//        <StatusBar></StatusBar>
//     </View> 
   
//   )
// }

// const component = StyleSheet.create({
//   'parentDiv': {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     alignItems: 'center',
//     justifyContent: '',  
//   }
// }) 


// // import React from "react";
// // import { View, Text, StyleSheet, Image, Button, Alert, ScrollView, SafeAreaView } from "react-native";

// // export default function App() {

// //   const imagePath = 'C:/Users/thaka/Downloads/Japanese_Theme_Folder/Japanese Theme/Wallpaper.jpg';
  
// //   const ButtonLikeNo = () => {
// //       alert('You have disliked the image');
// //       console.log('you have disliked the image');
// //   };

// //   const ButtonLikeYes = () => {
// //     alert('You have liked the image!!');
// //     console.log('you have liked the image');
// //   }
// //   return (
// //       <SafeAreaView>
// //         <ScrollView>
// //           <View style={styles.container}>
// //             <View style={styles.headerContainer}>
// //               <Text style={styles.headerText}>Princess Sakura</Text>
// //             </View>
            
// //             <Image style={styles.image} source={require('./assets/Wallpaper.jpg')} />

// //             <View style={styles.buttonView}>
// //               <Button title="Like" onPress={ButtonLikeYes} color='black'/>
// //             </View>
            
// //             <View style={styles.buttonView2}>
// //               <Button title="Dislike" onPress={ButtonLikeNo} color='black'/>
// //             </View>
          
// //             <View style={styles.descriptionView}>
// //               <Text style={styles.HighlightPrincessStory}> &bull; Story Of The Princess{'\n'}</Text>
// //               <Text style={styles.descriptionText}>Seated on a Japanese house, Princess Sakura, regally attired, embraces a serene sunset day. Pagodas in the palace gardens glow softly, adding magic to her evening walks. Nestled in the mountains, the palace heightens the enchantment, each step mirroring the serene beauty of the fading daylight.</Text>
// //             </View>
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
    
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },

// //   headerContainer: {
// //     borderWidth: 2,
// //     borderRadius: 3,
// //     height: 60,
// //     marginBottom: 10,
// //     paddingTop: 11,
// //     paddingLeft: 48,
// //     paddingRight: 48,
// //     backgroundColor: 'lightblue',
// //     marginTop: 10,
// // },
    
// //   headerText: {
// //      color: 'black',
// //      fontWeight: 'bold',
// //      fontSize: 24,
// //    },

// //   image: {
// //     height: 200,
// //     width: 300,
// //     borderRadius: 10,
// //     opacity: 1 ,
// //     borderColor: 'black',
// //     borderWidth: 3,
// //   },

// //   buttonView: {
// //     borderRadius: 5,
// //     color: 'black',
// //     paddingRight: 40,
// //     paddingLeft: 40,
// //     backgroundColor: '#3498db',
// //     borderWidth: 1, 
// //     borderColor: 'black',
// //     right: 83,
// //     top: 7,
// //   },

// //   buttonView2: {
// //     borderRadius: 5,
// //     paddingRight: 35,
// //     paddingLeft: 35,
// //     backgroundColor: '#FF6F61',
// //     borderWidth: 1, 
// //     borderColor: 'black',
// //     top: -33,
// //     right: -77,
// //   },

// //   descriptionView: {
// //     borderColor: 'black',
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     height: 230,
// //     width: 310,
// //     padding: 10, 
// //     marginTop: -14,
// //     marginBottom: 10,
    
// //   },

// //   descriptionText: {
// //     fontSize: 16,
// //     textAlign: 'left', 
// //     color: 'black',
// //   },

// //   HighlightPrincessStory: {
// //      fontWeight: 'bold',
// //      fontSize: 16,
// //   },

// // });




// import Rreact from "react";
// import {View, Text, StyleSheet} from "react-native";

// export default function App () {
//     return(
//          <View style={styles.container}>
//             <Text>My name is SaiThakare</Text>
//          </View>
//     );
// }


// const styles = StyleSheet.create({
//       container: {
//           flex: 1,
//           backgroundColor: '#fff',
//           alignItems: 'center',
//           justifyContent: 'center',
//       },
// });

// Import componets
// import { StatusBar } from 'expo-status-bar'
// import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native'
// import { useState } from 'react';

// // state [var name = "sai"]
// // name = "sai"
// // setState, name
// // this is temperature convetions application x degree centergredes or celcius x degree kelvin 
// // how to use icons in react native 
// // 

// export default function App() {

// //   const [name, setName ] = useState('Nidhi');
// const [name, setName ] = useState('C');
// if (name === 'C') {
//   setName = 'K'
// }
// else {
//   setName = 'c'
// }
//   function changeNameOfVariable () {
//     if (name === 'Nidhi') {
//       setName('sai');
//     }
//     else{setName("Nidhi")};  
//    }
//   return (
//     <SafeAreaView style = {component.parentDiv}>
//        <Text>Hellow world!! {name}</Text>
//        <View style={component.viewButton}>
//           <Button title='Like' onPress={changeNameOfVariable, }></Button>
//        </View>
//     </SafeAreaView> 
   
//   )
// }

// const component = StyleSheet.create({
//   'parentDiv': {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',  

//   },
//   // 'viewButton' : {
    
//   // }
// }) 




// // Import componets
// import { StatusBar } from 'expo-status-bar'
// import {StyleSheet, Text, View, Button} from 'react-native'


// // name = "sai"
// // setState, name


// export default function App() {
  
//   return (
//     <View style = {component.parentDiv}>
//        <Text>Celsius to Fahrenheit</Text>
//        <Text>Temperature</Text>
//        <Button title='Change' ></Button>
//        <StatusBar></StatusBar>
//     </View> 
   
//   )
// }

// const component = StyleSheet.create({
//   'parentDiv': {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     alignItems: 'center',
//     justifyContent: 'center',  
//   }
// }) 



// //import components
// import {StatusBar} from 'expo-status-bar';
// import {useState} from 'react';
// import { Text, StyleSheet,View,  Button, TextInput, SafeAreaView} from 'react-native';

// //create and export component.
// export default function App(){
//   const[unit , setUnit] = useState('°C');
//   function changeUnit() {
//     if (unit === '°C') {
//       setUnit('Kelvin');
//     }
//     else {
//       setUnit('°C');
//     }
//   }

//   const[temprature , setTemprature] = useState(32);
//   function changeTemprature () {
//     if (temprature === 32) {
//       setTemprature(parseInt(temprature) + 273.15);
//     }
//     else {
//       setTemprature(32);
//     }
//   }

//   function Output(){
//     changeTemprature()
//     changeUnit()
//   }

//   const [text, setText] = useState();

//   return(
 
//     <View style={saiStyles.parentDiv}>
//       <TextInput 
//         style={{height: 40, borderWidth: 1, width: 60}}
//         placeholder="From"
//         onChangeText={(e) => setText(e)}
//         value={text}
//         inputMode = 'decimal'
//       />
//       <Text style={saiStyles.textStyles}>Temprature Application</Text>
//       <Text style={saiStyles.textStyles}>Temprature (Celcius to Kelvin) : {temprature} {unit}</Text>
//       <Button title = 'Press' onPress = {Output} colour= "#17A6DB"/>
//       <StatusBar  translucent={true}/>
//     </View>
 
//   )
// }

// const saiStyles = StyleSheet.create({
//     'parentDiv':{
//       flex : 1,
//       backgroundColor:'#f4f4f4',
//       alignItems:'center',
//       justifyContent:'center',
//       marginVertical : 'left',
//       margin : 'round',
//       borderColor: 'black',
//     },
//     'textStyles':{
//       color: '#9900cc',
//       fontSize: 8,
//       margin : 'round'
//       
//     }
// })





// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, Text, View , Button, StatusBar, TextInput} from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

// const data = [
//   { label: 'Celcius', value: 'Celcius' },
//   { label: 'Kelvin', value: 'Kelvin' },

// ];


// const DropdownComponent = () => {
//   const [value, setValue] = useState(0);
//   // const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');
//   const[unit , setUnit] = useState('°C');
//   const[temprature , setTemprature] = useState(32);

//   console.log(value);
//   //functions
//   function changeUnit() {
//     if (unit === '°C') {
//       setUnit('Kelvin');
//     }
//     else {
//       setUnit('°C');
//     }
//   }

//   function changeTemprature () {
//     if (temprature === 32) {
//       setTemprature(parseInt(temprature) + 273.15);
//     }
//     else {
//       setTemprature(32);
//     }
//   }

//   function Output(){
//     changeTemprature()
//     changeUnit()
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.parentDiv}>
//       <Text style={styles.textStyles}>Temprature Application</Text>
//       <Text style={styles.textStyles}>Temprature (Celcius to Kelvin) : {temprature} {unit}</Text>
//       <Button title = 'Press' onPress = {Output} colour= "#17A6DB"/>
//       <StatusBar  translucent={true}/>
//       <Dropdown
//         style={[styles.dropdown]} // used for styling of the dropdown element
//         placeholderStyle={styles.placeholderStyle} // styling for the placeholder text
//         selectedTextStyle={styles.selectedTextStyle} // the text in the dropdown box styling
//         data={data}
//         placeholder={'From'}
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         value = {value}
//         onChange={item => {
//           setValue(item.value);
          
//         }}/>
//       <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="Enter Number: "
//         keyboardType="numeric"
//       />
//       </SafeAreaView>
//      </View>
//     </View>
//   );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//   'parentDiv':{
//     backgroundColor:'#f4f4f4',
//     alignItems:'center',
//     justifyContent:'center',
//     marginVertical : 'left',
//     margin : 'round',
//     borderColor: 'black',
//   },

//   'textStyles':{
//     color: '#9900cc',
//     fontSize: 10,
//     alignItems : 'center',
//     justifyContent : 'center'
//   },

//   dropdown: {
//     height: 50,
//     width: 100,
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 8,
//     // backgroundColor: 'blue'
//   },

//   container: {
//     padding: 13,
//     width: 320,
//     alignContent: 'center',
//     justifyContent: 'center',
//   },

//   placeholderStyle: {
//     fontSize: 14,
//   },

//   selectedTextStyle: {
//     fontSize: 16,
//     color: '#000080',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 8,
//   }
// });



