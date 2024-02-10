import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datafetch from "./Datafetch";

function Albums() {

    let [get, setget] = useState([]);

    // useEffect(() => {

    //     fetch('https://jsonplaceholder.typicode.com/albums')
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
    // var url = 'https://jsonplaceholder.typicode.com/albums';
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

    // const {get2} = Datafetch();
    useEffect(() => {
        Datafetch('albums', setget);
    }, []);



    return (
        <div>
            <Header />
            <div className="posts">
                <p className='title'>A<font className="red">L</font>BuMS PAGE...!!</p>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>TITLE</th>
                        </tr>
                    </thead>

                    {
                        // get2.map((item, index) => {
                        get.map((item, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
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
export default Albums; 