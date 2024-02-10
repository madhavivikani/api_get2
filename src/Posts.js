import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Datafetch from './Datafetch';


function Posts() {

    let [get, setget] = useState([]);

    // using fetch

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response=>{
    //         if(!response.ok){
    //             throw new Error("Network response was not ok");
    //         }
    //         return response.json();
    //     })
    //     .then(data=>{
    //         console.log(data);
    //         setget(data);
    //     })
    //     .catch(error=>{
    //         console.error('There was a problem fetching the data:', error);
    //     })

    // }, []);

    // using Ajax 

    // var xhr = new XMLHttpRequest();
    // var url = 'https://jsonplaceholder.typicode.com/posts';
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) { 
    //         if (xhr.status === 200) { 
    //             var data = JSON.parse(xhr.responseText); 
    //             console.log(data); 
    //             setget(data); 
    //         } else {
    //             console.error('There was a problem fetching the data:', xhr.statusText); 
    //         }
    //     }
    // };
    // xhr.open('GET', url);
    // xhr.send();


    // fetch data one component method fetch j
    // const {get} = Datafetch();

    useEffect(() => {
        Datafetch('posts', setget);
    }, []);

    return (


        <div className="App">
            <Header />
            <p className='title'>P<font className="red">O</font>STS PAGE...!!</p>
            <div className='posts'>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    {
                        get.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>
        </div>
    );
}

export default Posts;
