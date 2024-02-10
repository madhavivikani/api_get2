import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';
import Datafetch from './Datafetch';



function Photos() {

    let [get, setget] = useState([]);
    let [load, setload] = useState(true);

    // useEffect(() => {
        
    //     fetch('https://jsonplaceholder.typicode.com/photos')
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
    // var url = 'https://jsonplaceholder.typicode.com/photos';
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

    // const {get3} = Datafetch();

    useEffect(() => {
        Datafetch('photos', setget);
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
                                    // get3.map((item, index) => {
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