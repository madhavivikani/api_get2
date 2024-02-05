import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';



function Photos() {

    let [get, setget] = useState([]);
    let [load, setload] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setget(response.data);
                setload(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setload(false);
            })
            .finally(function () {
                // always executed
            });
    }, []);


    return (
        <div>
            <Header />
            <div className='posts users'>
                {
                    load ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (

                        <div>
                            <p className='title'>PH<font className="red">O</font>ToS PAGE...!!</p>
                            <div className='main'>
                                {
                                    get.map((item, index) => {
                                        return (
                                            <Card style={{ width: '27rem' }}>
                                                <Card.Img className='card' variant="top" src={item.url} />
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button className='btn'><a href={item.thumbnailUrl} target='_blank'>SHOW MORE..!</a></Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}
export default Photos;