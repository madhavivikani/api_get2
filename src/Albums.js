import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Albums() {

    let [get, setget] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
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