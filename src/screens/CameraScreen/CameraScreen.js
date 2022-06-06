import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image,TouchableOpacity  } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import IonIcons from 'react-native-vector-icons/Ionicons';
import axios from "axios"
import {TouchableRipple } from 'react-native-paper';

export default function CameraScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }
  tabBarIcon: ({color, size, }) => (
    <IonIcons name="md-camera" color={'black'} size={70}
   
    style={{
       width: 80,
       height: 80,
       justifyContent: 'center',
       backgroundColor: 'white',
       borderRadius: 40,
       textAlign: 'center',
       bottom: 20
             
   }}
   />
)

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      let body = new FormData();
        body.append('photo', {uri: photo.uri, name: 'photo.png',filename :'imageName.png',type: 'image/png'});
            body.append('Content-Type', 'image/png');

        fetch("http://127.0.0.1:8000/photo",{ method: 'POST',headers:{  
            "Content-Type": "multipart/form-data",
            "otherHeader": "foo",
            } , body :body} )
          .then((res) => checkStatus(res))
          .then((res) => res.json())
          .then((res) => { console.log("response" +JSON.stringify(res)); })
          .catch((e) => console.log(e))
          .done()
      // MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      //   setPhoto(undefined);
      // });
    };
    const baseUrl = "https://4aac-88-230-229-180.eu.ngrok.io"

    const fetchData = () =>{
      axios.get(`${baseUrl}/products`)
      .then(resp=>{
        console.warn(resp.data);
      });
    
    };
    
  

    return (
      <View style={styles.container1}>
        <View style={styles.photoContainer}>
          <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        </View>
        <View style={styles.buttonContainer1}>
          <View style={styles.button}>
            {hasMediaLibraryPermission ? <TouchableRipple onPress={fetchData}> 
            <Text style={{color:"white",fontSize:20}}>SORGULA</Text>
            </TouchableRipple>: undefined}
          </View>
          <View style={styles.button}>
            <Image /><TouchableRipple onPress={() => setPhoto(undefined)}>
            <Text style={{color:"white",fontSize:20}}>TEKRAR ÇEK</Text>
            </TouchableRipple>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} ratio = {"1:1"}>
      {/* <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View> */}
      <View style={styles.take}>
        <TouchableOpacity onPress={takePic}>
        <Image style = {{width:50,height:50,borderWidth:50}}source={require("../../../assets/camerabutton.png")}/>
      
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 150,
    left: 5,
    display: "flex",
    width : 400,
    height: 500,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    display:"flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
  photoContainer: {
    justifyContent:"center",
    alignItems: "center",
    width: 400,
    height: 500,
    marginTop:80
  },
  buttonContainer1:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor:"red",
    marginTop:50,
    height:100

  },
  button:{
    width:150,
    height:70,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"#ff542e",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
  },
 
  take:{
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderRadius: 20,
    padding: 10,
    marginBottom: -330,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonContainer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: -500,
    // alignSelf: 'end'

  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
