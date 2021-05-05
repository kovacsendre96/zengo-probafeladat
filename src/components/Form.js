import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getCitiesApi, newCityApi, editCityApi, deleteCityApi } from './axiosHelper';



const Form = ({ selectInput, cities, setCities, }) => {

    let count;

    const [countyId, setCountyId] = useState();

    const [cityId, setCityId] = useState();
    const [newCityinput, setNewCityInput] = useState('');
    const [cityModify, setCityModify] = useState();

    const [cityName, setCityName] = useState();

    const li = document.querySelectorAll('li');
    const modifyInput = document.querySelectorAll('.selected-item');

    // Lekezelem a kattintást ezzel a függvénnyel
    const clickedCity = (e) => {
        // Lekérem az összes li itemet, hogy mindegyikhez hozzátudjak férni. Azzal kezdem a függvényt, ami az alap állapot,
        // tehát az input hide-olva van a li-nek pedig nincs class neve
        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].className = "";
            li[i].nextSibling.className = "selected-wrapper hide";
        }

        const cityIdHelper = cities.filter(f => f.name === e.target.innerText)
        console.log(cityIdHelper[0])
        setCityId(cityIdHelper[0].id);


        e.target.className = "hide";
        e.target.nextSibling.className = "selected-wrapper";


        //a kattintott elem megkapja a megfelelő classnevet, hogy a sima li eltűnjön az input pedig megjelenjen



        /*       cities.filter(f => f.name === e.target.innerText);
             console.log(cityIdHelper[0].id) */
        setCityName(e.target.innerText)
        console.log(cityName)
    }


    const selectValueHandler = (e) => {
        //létrehozok egy változót city néven és megkeresem a filterrel azt az elemet amire rákattintottam
        // hogy megtudjam az elem id-jét ez lesz a countyId amit kér az API
        count = selectInput.filter(f => f.name === e.target.value);

        console.log(count[0].id)

        setCountyId(count[0].id)


        getCitiesApi(count[0].id, setCities);

        //Lekérem a városokat, a state_id:nek egy változót adok értékül, ami megfog egyezni a kiválasztott megye id-jával



    }







    const newCityinputHandler = (e) => {
        setNewCityInput(e.target.value)
    }

    const addHandler = (e) => {
        e.preventDefault();
        newCityApi(newCityinput, 2);
        getCitiesApi(2, setCities);
        setNewCityInput('');

    }


    const closeButton = () => {
        for (let i = 0; i < li.length; i++) {
            li[i].className = "";
            li[i].nextSibling.className = "selected-wrapper hide";
            modifyInput[i].value = li[i].innerText;
        }

    }


    const modifyCityHandler = (e) => {
        setCityModify(e.target.value);
    }





    const acceptButton = () => {

        editCityApi(cityId, cityModify);
        getCitiesApi(2, setCities);


        for (let i = 0; i < li.length; i++) {
            li[i].className = "";
            li[i].nextSibling.className = "selected-wrapper hide";
            li[i].innerHTML = modifyInput[i].value;
        }


    }
    console.log(cityId);
    const removeButton = () => {
        // delete API hívás

        deleteCityApi(cityId);
        getCitiesApi(2, setCities);
        for (let i = 0; i < li.length; i++) {
            li[i].className = "";
            li[i].nextSibling.className = "selected-wrapper hide";
            li[i].innerHTML = modifyInput[i].value;
        }
    }

    return (
        selectInput !== undefined &&
        <div>
            <div className='form-container'>
                <h2>Megye</h2>
                <select onChange={selectValueHandler}>
                    <option value="" selected disabled hidden>Válassz megyét!</option>
                    {selectInput.map(county => <option>{county.name}</option>)}
                </select>
            </div>
            {
                cities !== null &&
                <>
                    <div className="rectangle blue"></div>
                    <div className="new-city-container">
                        <h2>Új város</h2>
                        <form onSubmit={addHandler}>
                            <input value={newCityinput} onChange={newCityinputHandler} type="text"></input>
                            <button type="submit">Felveszem</button>
                        </form>
                    </div>
                    <div className="rectangle green"></div>
                    <div className="cities-container">
                        <div className="cities__top">
                            <h6 className="cities__top-title">Megye</h6>
                            <h6 className="cities__top-county">{setCities}</h6>
                        </div>
                        <div className="cities__content">
                            <h6 className="cities__content-title">Városok</h6>
                            <ul className="cities__content-list">
                                {
                                    cities.map(city => <>
                                        <li onClick={clickedCity}> {city.name}</li>
                                        <div className="selected-wrapper hide ">
                                            <input onChange={modifyCityHandler} defaultValue={city.name} className="selected-item" ></input>
                                            <button onClick={acceptButton} className="button modify"><FontAwesomeIcon icon={faCheck} /></button>
                                            <button onClick={closeButton} className="button cancel"><FontAwesomeIcon icon={faTimes} /></button>
                                            <button onClick={removeButton} className="button delete"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </div>
                                    </>
                                    )}

                            </ul>
                        </div>
                    </div >
                </>
            }
        </div >
    )
}

export default Form;