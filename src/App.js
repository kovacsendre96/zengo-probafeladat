import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/style.scss';
import Form from './components/Form';
import logo from './img/logo.jpg';


function App() {


  const [selectInput, setSelectInput] = useState();

  const [cities, setCities] = useState(null);



  // Lekérem a megyéket az API-tól amit a SelectInput state-hez adok hozzá, majd ezt map-elem és option-ként tér vissza

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
        console.log(response.data.data)
      })
      .catch((err) => console.log(err));

  }, []);






  return (
    <>
      <header>
        <img className="logo" src={logo} />
      </header>
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