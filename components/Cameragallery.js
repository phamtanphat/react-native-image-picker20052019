import React, { PureComponent } from 'react'
import { Text, View , SafeAreaView , TouchableOpacity , Image , StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Entypo';
import ImagePicker from 'react-native-image-picker'


const options = {
    title: 'Open camera',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
}
export default class Cameragallery extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            image : ""
        }
    }
    _takephoto(){
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
              this.setState({image : ""})
            } else if (response.error) {
                this.setState({image : ""})
            } else {
              const source = { uri: response.uri };
              this.setState({image : source})
            }
          });
    }
    _imagegallery(){
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                this.setState({image : ""})
              } else if (response.error) {
                  this.setState({image : ""})
              } else {
                const source = { uri: response.uri };
                this.setState({image : source})
              }
          });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.buttons}>
                    <View style={styles.containerCamera}>
                        <TouchableOpacity 
                            style={styles.touchableCamera}
                            onPress={() => this._takephoto()}>
                            <View style={styles.containertextCamera}>
                                <Icon name="camera" backgroundColor="black" size={20}></Icon>
                                <Text style={styles.textCamera}>Camera</Text>
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerGalley}>
                        <TouchableOpacity 
                            style={styles.touchableGallery}
                            onPress={() => this._imagegallery()}>
                            <View style={styles.containertextGallery}>
                                <Icon name="folder-images" backgroundColor="black" size={20}></Icon>
                                <Text style={styles.textGallery}>Gallery</Text>
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerImage}>
                    <Image 
                        style={styles.image}
                        source={this.state.image !== "" ? this.state.image : require('../assets/noimage.jpeg')}/>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex : 1 , 
        flexDirection : 'column'
    },
    buttons:{
        paddingHorizontal : 20 ,
        flex : 0.15, 
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center'
    },
    containerCamera:{ 
        alignItems : 'flex-start' 
    },
    touchableCamera:{
        margin : 5 ,
        padding : 15 , 
        borderRadius : 5 , 
        borderWidth : 1, 
        backgroundColor : '#DEE0E6'
    },
    containertextCamera:{
        flexDirection : 'row', 
        justifyContent : 'space-around'
    },
    textCamera:{
        marginLeft : 10 ,
        color : 'red' , 
        fontSize : 17
    },
    containerGalley:{ 
        alignItems : 'flex-start' 
    },
    touchableGallery:{
        margin : 5 , 
        padding : 15 , 
        borderRadius : 5 , 
        borderWidth : 1, 
        backgroundColor : '#DEE0E6'
    },
    containertextGallery:{
        flexDirection : 'row'
    },
    textGallery:{
        marginLeft : 10 , 
        color : 'red' , 
        fontSize : 17
    },
    containerImage:{
        flex : 0.85 , 
        justifyContent : 'center' , 
        alignItems : 'center'
    },
    image:{
        width : 300 , 
        height : 300
    }

})