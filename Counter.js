import React,{ Component } from 'react';
import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet} from 'react-native';
import { getContacts } from './actionCreators/index';
import { connect } from 'react-redux';

class Counter extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getContact();
    }

    _keyExtractor=(item,index)=>item.email;

    render(){ 
        if(this.state.isLoading){
            return(
                <ActivityIndicator size={25} color={'white'}/>
            )
        }
        else{
        return(
        <View>
            <Text style={{fontSize:25,textAlign:'center'}}>My Contacts</Text>
            <FlatList
                keyExtractor={this._keyExtractor}
                data={this.props.data}
                renderItem={
                    ({item})=>
                    <View style={{flexDirection:'row',margin:10,borderColor:'blue',borderWidth:StyleSheet.hairlineWidth,borderRadius:50}}>
                        <Image source={{uri:item.picture.large}} style={{height:100,width:100,borderRadius:50}}></Image>
                        <View style={{flexDirection:'column',paddingLeft:5}}>
                            <Text style={{paddingTop:15,color:'green'}}>{item.email}</Text>
                            <Text style={{color:'blue'}}>{item.phone}</Text>
                            <Text style={{color:'blue'}}>{item.cell}</Text> 
                        </View>
                    </View>
                }
            
            />
            </View>
            
        );
    }
    }
    }

    function mapDispatchToProps(dispatch){
        getContact : ()=>dispatch(getContacts());
    }

    function mapStateToProps(state){
        data:state.contacts
    }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

