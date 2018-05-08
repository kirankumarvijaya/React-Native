import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const productItem=({image,title})=>(
    <TouchableOpacity style={styles.listContainer} onPress={()=>Alert.alert('Hi',title)}>
        <Image source={{uri:image}} style={styles.image}/>
        <View style={{flexDirection:'row',flex:1}}>
            <Text style={{color:'grey',flex:6,fontSize:17}}>{title}</Text>
            <Ionicons name='ios-heart' style={{flex:1}} size={32} color="green"/>
        </View>
    </TouchableOpacity>);

const styles = StyleSheet.create({
    listContainer:{
        flexDirection:'row',
        margin:10,
        borderWidth:StyleSheet.hairlineWidth
    },
    image:{
        width:100,
        height:100,
        resizeMode:'contain'
    }
  });

export default productItem;