import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
function Comments() {

    let [get, setget] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setget(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
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