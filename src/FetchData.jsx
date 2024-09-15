import React,{useState,useEffect} from 'react';
import axios from 'axios';

function FetchData(){
    const [data,setData] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3005/api/v1/autogestion/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
}