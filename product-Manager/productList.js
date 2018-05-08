import React from 'react';
import {ActivityIndicator} from 'react-native';
import ProductItem from './productItem';

let uri='http://172.16.107.153:4000/images'

export default class productList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            product:[],
            isLoading:true
        }
    }

    componentDidMount(){
        fetch("http://172.16.107.153:4000/products")
        .then(response => response.json())
        .then(data => {
            this.setState({
                product:data,
                isLoading:false
            })
        })

    }

    render(){
        if(this.state.isLoading){
            return(
            <ActivityIndicator/>)
        }
        else{
        return this.state.product.map((selector,key) => (
            <ProductItem style={{flexDirection:'column',justifyContent:'flex-start'}} title={selector.title} image={`${uri}/${selector.image}`}/>
        ))
        }   
    }
}