import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Datafetch from './Datafetch';



function Todos() {

    let [get, setget] = useState([]);

    // useEffect(() => {

    //     fetch('https://jsonplaceholder.typicode.com/todos')
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

    // var xhr = new XMLHttpRequest();
    // var url = 'https://jsonplaceholder.typicode.com/todos';
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

    // const {get4} = Datafetch();
    useEffect(() => {
        Datafetch('todos', setget);
    }, []);


    return (
        <div>
            <Header/>
            <div className='posts'>
                <p className='title'>T<font className="red">O</font>DoS PAGE...!!</p>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>TITLE</th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    {
                        // get4.map((item, index) => {
                        get.map((item, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.completed ? 'TRUE' : 'FALSE'}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>
        </div>
    )
}
export default Todos;