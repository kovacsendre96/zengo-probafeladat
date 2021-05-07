import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/style.scss';
import Form from './components/Form';
import logo from './img/logo.jpg';


function App() {


  const [selectInput, setSelectInput] = useState([{}]);

  const [cities, setCities] = useState(null);



  // Retrieve county names from API, then pass the value obtained to the state

  useEffect(() => {
    axios
      .get('https://probafeladat-api.zengo.eu/api/all_states',
        {
          headers: {
            'token': '6224922a57237ec294f5ef05a8a87b48'
          }
        })
      .then(response => {

        setSelectInput(response.data.data);
      })
      .catch((err) => console.log(err));

  }, []);






  return (
    <>
     
      <header>
        <img className="logo" src={logo} alt="logo" />              
      </header>                                              {/*  It could even be a separate comopnens, but there are few elements in it. */}
      <div className="triangle-container"></div>
      <Form
        selectInput={selectInput}
        cities={cities}
        setCities={setCities}
      />
      <div className={cities === null ? 'triangle-container bottom' : 'triangle-container bottom active'}></div>
      <div className={cities === null ? 'illustration-wrapper' : 'illustration-wrapper hide'}></div>
    </>

  );
};

export default App;