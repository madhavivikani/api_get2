import { useEffect, useState } from "react";

// function fetchData(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json(); // Parse response as JSON
//         })
//         .catch(error => {
//             console.error('There was a problem fetching the data:', error);
//             throw error;
//         });
// }

// function Datafetch() {
//     let [get, setGet] = useState([]);
//     let [get1, setGet1] = useState([]);
//     let [get2, setGet2] = useState([]);
//     let [get3, setGet3] = useState([]);
//     let [get4, setGet4] = useState([]);
//     let [get5, setGet5] = useState([]);

//     useEffect(() => {
//         // Fetch data from the first URL
//         fetchData('https://jsonplaceholder.typicode.com/posts')
//             .then(data => {
//                 setGet(data); // Set state with fetched data
//             })
//             .catch(error => {
//                 console.error("Error fetching posts data:", error);
//             });

//         fetchData('https://jsonplaceholder.typicode.com/comments')
//             .then(data => {
//                 setGet1(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching comments data:", error);
//             });

//         fetchData('https://jsonplaceholder.typicode.com/albums')
//             .then(data => {
//                 setGet2(data); // Set state with fetched data
//             })
//             .catch(error => {
//                 console.error("Error fetching albums data:", error);
//             });
//         fetchData('https://jsonplaceholder.typicode.com/photos')
//             .then(data => {
//                 setGet3(data); // Set state with fetched data
//             })
//             .catch(error => {
//                 console.error("Error fetching albums data:", error);
//             });
//         fetchData('https://jsonplaceholder.typicode.com/todos')
//             .then(data => {
//                 setGet4(data); // Set state with fetched data
//             })
//             .catch(error => {
//                 console.error("Error fetching albums data:", error);
//             });
//         fetchData('https://jsonplaceholder.typicode.com/todos')
//             .then(data => {
//                 setGet5(data); // Set state with fetched data
//                 console.log(get5);
//             })
//             .catch(error => {
//                 console.error("Error fetching albums data:", error);
//             });
//     }, []);

//     return { get, get1, get2, get3, get4 , get5};
// }
// export default Datafetch;


const Datafetch = (url, callback) => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            callback(data); // Call the callback function with the fetched data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

export default Datafetch;