import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  
} from 'react-native';
import { Audio } from 'expo-av';
export default class Soundbutton extends React.Component {
 /* constructor(props){
    super(props);
    this.state={
    pressButtonIndex:'',
    }
  }*/
  playSound = async soundChunk =>{
    var soundlink='https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {uri:soundlink},
      {shouldPlay:true}

    )
}
  render() {
    return (
      <View>
      <TouchableOpacity style={styles.bttn}
    onPress={()=>{
      this.playSound(this.props.soundChunk);

    }}
    
    >
    <Text style={styles.txt}>{this.props.wordChunk}</Text>
     </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  bttn:{
    backgroundColor:'black',
    width: 100,
    height: 40,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 10,
    marginTop:20,
    color:'white'

  },
  txt:{
    color:"white",
    alignSelf:"center"
  }
});
