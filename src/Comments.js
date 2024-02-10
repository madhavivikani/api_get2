import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Datafetch from "./Datafetch";
function Comments() {

    let [get, setget] = useState([]);

    // useEffect(() => {

    //     fetch('https://jsonplaceholder.typicode.com/comments')
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
    // var url = 'https://jsonplaceholder.typicode.com/comments';
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

    // const {get1} = Datafetch();

    useEffect(() => {
        Datafetch('comments', setget);
    }, []);


    return (
        <div>
            <Header/>
            <div className="posts">
                <p className='title'>C<font className="red">O</font>MMeNTS PAGE...!!</p>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    {
                        // get1.map((item, index) => {
                        get.map((item, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.body}</td>
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
export default Comments; 