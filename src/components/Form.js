import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getCitiesApi, newCityApi, editCityApi, deleteCityApi } from './axiosHelper';

/*
This js contains the operation of the program
I group the code details into blocks according to their roles.

There are basically 5 blocks
                                            -[1] Retrieve cities belonging to the county
                                                requires:        
                                                                -[1.1] a useState which will store the county's id.
                                                                -[1.2] a handler that passes the id of the clicked county to the useState. 
                                                                -[1.3] I call the function from axiosHelper.js which get the cities 
                                                                    and I give it the required parameters.

                                            -[2] Add a new city to the selected county
                                                requires:
                                                                -[2.1] a useState, which will store the value written to the input, which will be the name of the new city.
                                                                -[2.2] an onChange handler that passes the data written to the input to the useState
                                                                -[2.3] a submit handler
                                                                -[2.4] I call the function from axiosHelper.js which create the new city from axiosHelper.js
                                                                        and I pass it the required parameters.
                                                                

                                            -[3] Click on the listed city names and get their ID
                                                requires:
                                                                - [3.1] a useState which will store the clicked city's id.
                                                                - [3.2] an onChange handler
                                                                - [3.3] a function which will be responsible for resetting the elements style. I will use this several times
                                                                - [3.4]  I pass the id of the clicked city to the useState
                                                                - [3.5] the clicked city gets the class name, which turns it into input
                                                                
                                        
                                                                    

                                            -[4] Edit cities
                                                requires:
                                                                - [4.1] a useState which will store the value of input field which will be the new name of the city
                                                                - [4.2] an onChange handler which passes the value from the input field to useState 
                                                                - [4.3] an onCclick handler
                                                                - [4.4] Search index of the selected city to be able to pass as function parameter. So I can immediately update the names of the cities
                                                                - [4.5] I call the function from axiosHelper.js which changes the name of the selected city in the API
                                                                    and I give it the required parameters.
                                                                

                                            -[5] Delete cities
                                                requires:
                                                                - [5.1] an onClick handler
                                                                - [5.2] I call the function from axiosHelper.js which delete the selected city in the API
                                                                        and I give it the required parameters.                                                                                                                                                                                                                                                                            
*/

const Form = ({ selectInput, cities, setCities, }) => {


    ///////////////////////// States /////////////////////////


    const [countyId, setCountyId] = useState();     //[1.1]


    const [newCityinput, setNewCityInput] = useState(); //[2.1]


    const [cityId, setCityId] = useState(); //[3.1]


    const [changeCityInputValue, setChangeCityInputValue] = useState('');  //[4.1]




    ///////////////////////// Reusable function /////////////////////////         [3.3]

    function closeCity() {
        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].className = ""
            li[i].nextElementSibling.className = "selected-wrapper hide"

        };
    }

    ///////////////////////// Handlers /////////////////////////



    const selectValueHandler = (e) => {         //[1.2]


        const count = selectInput.filter(f => f.name === e.target.value);
        setCountyId(count[0].id);
        getCitiesApi(count[0].id, setCities);  //[1.3]
        closeCity()   // [3.3]
    };



    const onChangeNewCityHandler = (e) => {    //[2.2]
        setNewCityInput(e.target.value);
    };

    const submitNewCityHandler = (e) => {      //[2.3]
        e.preventDefault();                    // prevents the page from reloading
        newCityApi(newCityinput, countyId, setCities, cities);           //[2.4]

        setNewCityInput('');                   // clears the input
    };




    const clickedCityHandler = (e) => {            //[3.1]

        closeCity()   // [3.3]

        setChangeCityInputValue(cities.filter(f => f.name === e.target.innerText)[0].name);

        setCityId(cities.filter(f => f.name === e.target.innerText)[0].id); //[3.4]
        e.target.nextSibling.className = "selected-wrapper";
        e.target.className = "hide";                            //[3.5]

    }



    const onChangeCityNameHandler = (e) => {        //[4.2]
        setChangeCityInputValue(e.target.value);
    };

    const acceptButton = () => {        //[4.3]

        const index = cities.findIndex(i => i.id === cityId); // [4.4]
        editCityApi(cityId, changeCityInputValue, setCities, cities, index);    //[4.5]
        closeCity()                           //[3.3]



    };


    const removeButton = () => {            //[5.1]
        deleteCityApi(cityId, countyId, setCities);              //[5.2]
        closeCity()   //[3.3]
    };


    ///////////////////////// Render /////////////////////////

    return (
        selectInput !== undefined &&
        <>

            <div className='form-container'>
                <h2>Megye</h2>
                <select onChange={selectValueHandler}>
                    <option className="default-option" selected disabled hidden>Válassz megyét!</option>
                    {selectInput.map(county => <option key={county.id} value={county.name}>{county.name}</option>)}
                </select>
            </div>

            {
                cities !== null &&
                <>
                    <div className="rectangle blue"></div>
                    <div className="new-city-container">
                        <h2>Új város</h2>
                        <form onSubmit={submitNewCityHandler}>
                            <input placeholder="Település neve" value={newCityinput} onChange={onChangeNewCityHandler} type="text"></input>
                            <button className="new-city__button" type="submit">Felveszem</button>
                        </form>
                    </div>
                    <div className="rectangle green"></div>
                    <div className="cities-container">
                        <div className="cities__top">
                            <h6 className="cities__top-title">Megye</h6>
                            <h6 className="cities__top-county">{selectInput.filter(f => f.id === countyId)[0].name}</h6>
                        </div>
                        <div className="cities__content">
                            <h6 className="cities__content-title">Városok</h6>
                            <ul className="cities__content-list">
                                {
                                    cities.map(city => <>
                                        <li key={city.id} onClick={clickedCityHandler}> {city.name}</li>

                                        <div className="selected-wrapper hide">
                                            <input onChange={onChangeCityNameHandler} value={changeCityInputValue} className="selected-item" ></input>
                                            <button onClick={removeButton} className="button delete"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                            <button onClick={acceptButton} className="button modify"><FontAwesomeIcon icon={faCheck} /></button>
                                            <button onClick={closeCity} className="button cancel"><FontAwesomeIcon icon={faTimes} /></button>
                                        </div>
                                    </>
                                    )}

                            </ul>
                        </div>
                    </div >
                </>
            }
        </>
    );
};

export default Form;