// import React from "react";

// const App = () => {
//     return (
//         <>
//             <div>Init Page</div>
//         </>
//     );
// };
// export default App;


import React, { useEffect } from 'react';
import axios from 'axios';
// import './App.css';

function App() {
    const callApi = async () => {
        axios.get("/api").then((res) => console.log(res.data.test));
    }

    useEffect(() => {
        callApi();
    }, []);

    return <div>테스트</div>
}

export default App;
