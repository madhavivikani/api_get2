import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';


function Users() {

    let [get, setget] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
            <div className='posts'>
                <p className='title'>U<font className="red">S</font>eRS PAGE...!!</p>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ADDRESS</th>
                            <th>PHONE</th>
                            <th>WEBSITE</th>
                            <th>COMPANY</th>
                        </tr>
                    </thead>
                    {
                        get.map((item, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <table border={0}>
                                                <tr>
                                                    <td><b>Street:</b>{item.address.street}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Suite</b>:{item.address.suite}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>City:</b>{item.address.city}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Zipcode:</b>{item.address.zipcode}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Geo:</b>
                                                        <table>
                                                            <tr>
                                                                <td><b>Lat:</b>{item.address.geo.lat}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Lng:</b>{item.address.geo.lng}</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
                                        <td>
                                            <table>
                                                <tr>
                                                    <td><b>Name:</b>{item.company.name}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>CatchPhrase:</b>{item.company.catchPhrase}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Bs:</b>{item.company.bs}</td>
                                                </tr>
                                            </table>
                                        </td>
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
export default Users;