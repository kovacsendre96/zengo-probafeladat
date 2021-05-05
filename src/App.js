import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/style.scss';
import Form from './components/Form';


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
      <Form
        selectInput={selectInput}
        cities={cities}
        setCities={setCities}
      />
    </>

  );
};

export default App;