import React from 'react';
import db from './localdb';
import Soundbutton from './components/Soundbutton';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds:[],
    };
  }
  render() {
    return (
      <View style={styles.header}>
        <Header
         
          centerComponent={{
            text: 'Monkey talk',
            style: { color: 'black', fontSize: 30, fontWeight:600 },
          }}></Header>
        <Image
          source={{
            uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
          style={styles.img}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text1) => {
            this.setState({ text: text1 });
          }}
          value={this.state.text}></TextInput>

        <TouchableOpacity style={styles.btn}>
          <Text
            style={styles.txt}
            onPress={() => {
              var word = this.state.text.toLowerCase();
              db[word]
                ? (this.setState({ chunks: db[word].chunks }),this.setState({phonicSounds:db[word].phones}))
                : Alert.alert('hi');
            }}>
            hello
          </Text>
        </TouchableOpacity>
        <View>
        {this.state.chunks.map((item,index)=>{
          return(
            <Soundbutton 
            wordChunk={this.state.chunks[index]}
            soundChunk={this.state.phonicSounds[index]}
            />
          );
        })}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  txt: {
    fontSize: 30,
    display: 'flex',
    paddingVertical: 20,
    paddingHorizontal: 30,
    color: 'white',
  },
  textinput: {
    width: 200,
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});
