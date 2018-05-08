import React  from "react";
import {Text,Button,View} from 'react-native';
import * as counterActions from './actionCreators';
import {connect} from 'react-redux';

const Counter = ({counter,increment,decrement})=>(
    <View style={{flexDirection:'row'}}>
        <Button title="+" onPress={increment}/>
        <Text>{counter}</Text>
        <Button title="-" onPress={decrement}/>
    </View>
)

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increment: ()=> dispatch(counterActions.incrementActionCreators()),
        decrement: () => dispatch(counterActions.decrementActionCreators())
    }
}

const connectFactory=connect(mapStateToProps,mapDispatchToProps);

export default connectFactory(Counter);

//export default connect(mapStateToProps,mapDispatchToProps)(counter)