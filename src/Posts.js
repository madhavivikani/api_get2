import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';



function Posts() {

    let [get, setget] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setget(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, []);
    return (


        <div className="App">
            <Header/>
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
