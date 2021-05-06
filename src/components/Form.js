import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getCitiesApi, newCityApi, editCityApi, deleteCityApi } from './axiosHelper';

/*
 Ez a file tartalmazza az egész program működését
 Blokkokba fogom csoportosítani a kód részleteket működésüknek megfelelően.


 Alapvetően 5 főcsoportot fogok megkülönböztetni:
                                                    -[1] A megyéhez tartozó városok lekérése
                                                        szükséges hozzá: -[1.1] egy state, ami majd tárolja a megye id-ját.
                                                                         -[1.2] egy kezelő, amely a kattintott megye id-ját átadja a state-nek. 
                                                                         -[1.3] meghívom az axiosHelper.js nevű file-ból
                                                                                a városok lekéréséhez szükséges függvényt és átadom neki a megfelelő paramétereket

                                                    -[2] Új város hozzáadása a választott megyéhez
                                                        szükséges hozzá: -[2.1] egy state, ami majd tárolja az inputba írt értéket, amely az új város neve lesz.
                                                                         -[2.2] egy onChange kezelő ami az inputba írt adatot átadja a statenek
                                                                         -[2.3] egy kezelő, ami a submitot kezeli le. 
                                                                         -[2.4] meghívom az axiosHelper.js nevű file-ból
                                                                          az új város létrehozásához szükséges függvényt és átadom neki a megfelelő paramétereket
                                                                       

                                                    -[3] Városnév kattintásra város id megszerzése és kinézet megváltoztatása
                                                    szükséges hozzá:    - [3.1] egy state, ami majd tárolja a kattintott város id-ját
                                                                        - [3.2] egy kezelő, amely lekezeli a kattintást
                                                                        - [3.3] egy ciklus amely az összes li elem class nevét alaphelyzetbe teszi, így majd mindig csak
                                                                                a kattintott városnév fog átváltozni inputtá
                                                                         -[3.4] a kattintott városnév id-ját átadom a statenek
                                                                         -[3.5] a kattintott város megkapja a class nevet ezzel átváltozik inputtá
                                                                         -[3.6] ha megakarom szakítani a folyamatot szimplán csak visszaállítom a class neveket, és az input értékét is
                                               
                                                                         

                                                    -[4] Városok szerkesztése
                                                    szükséges hozzá:    - [4.1] egy state, ami majd tárolja a megváltoztatni kívánt város nevét amit beírtunk az input mezőbe
                                                                         -[4.2] egy onChange kezelő ami az inputba írt adatot átadja a statenek
                                                                         -[4.3] egy kezelő, ami az accept gombot kezeli le
                                                                         -[4.4] megkeresem a kattintott város indexét hogy át bírjam adni. Így egyből lebírom frissíteni a városok nevét
                                                                         -[4.5] meghívom az axiosHelper.js nevű file-ból a függvényt amivel a kattintot város nevét
                                                                                megváltoztatom az API-ban, és átadom neki a szükséges paramétereket.
                                                                         -[4.6] kattintás után elvesszük a class neveket

                                                    -[5] Városok törlése
                                                    szükséges hozzá:    - [5.1] Mivel már minden elő van készítve , csakegy onClick kezelőre van szükség
                                                                         -[5.2] meghívom az axiosHelper.js nevű file-ból a függvényt amivel a kattintot várost
                                                                                kitörlöm az API-ból, és átadom neki a szükséges paramétereket.
                                                                     
                                                                    
                                                                        
                                                                        






*/

const Form = ({ selectInput, cities, setCities, }) => {


    ///////////////////////// States /////////////////////////


    const [countyId, setCountyId] = useState();     //[1.1]
    let count;

    const [newCityinput, setNewCityInput] = useState(); //[2.1]


    const [cityId, setCityId] = useState(); //[3.1]


    const [changeCityInputValue, setChangeCityInputValue] = useState();  //[4.1]


    const li = document.querySelectorAll('li');
 



    ///////////////////////// Handlers /////////////////////////



    const selectValueHandler = (e) => {         //[1.2]


        count = selectInput.filter(f => f.name === e.target.value);
        setCountyId(count[0].id);
        getCitiesApi(count[0].id, setCities);  //[1.3]
        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].className = ""
            li[i].nextElementSibling.className = "selected-wrapper hide"

        };
    };



    const onChangeNewCityHandler = (e) => {    //[2.2]
        setNewCityInput(e.target.value);
    };

    const submitNewCityHandler = (e) => {      //[2.3]
        e.preventDefault();                    // megakadájozza az oldal újratöltését
        newCityApi(newCityinput, countyId, setCities, cities);           //[2.4]

        setNewCityInput('');                   // kiüríti az inputot
    };




    const clickedCityHandler = (e) => {            //[3.1]

        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].className = ""
            li[i].nextElementSibling.className = "selected-wrapper hide"
        }




        setChangeCityInputValue(cities.filter(f => f.name === e.target.innerText)[0].name);

        setCityId(cities.filter(f => f.name === e.target.innerText)[0].id); //[3.4]
        e.target.nextSibling.className = "selected-wrapper";
        e.target.className = "hide";                            //[3.5]

    }

    const closeButton = () => {                     //[3.6]
        for (let i = 0; i < li.length; i++) {
            li[i].className = ""
            li[i].nextElementSibling.className = "selected-wrapper hide"
            setChangeCityInputValue(li[i].innerText);
        };

    };



    const onChangeCityNameHandler = (e) => {        //[4.2]
        setChangeCityInputValue(e.target.value);
    };

    const acceptButton = () => {        //[4.3]

        const index = cities.findIndex(i => i.id === cityId); // [4.4]

        editCityApi(cityId, changeCityInputValue, setCities, cities, index);    //[4.5]

        for (let i = 0; i < li.length; i++) {
            li[i].className = "";                                   //[4.6]
            li[i].nextSibling.className = "selected-wrapper hide";

        };

    };


    const removeButton = () => {            //[5.1]
        deleteCityApi(cityId,countyId,setCities);              //[5.2]
        
        for (let i = 0; i < li.length; i++) {
            li[i].className = "";
            li[i].nextSibling.className = "selected-wrapper hide";
        };
       
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
                            <input value={newCityinput} onChange={onChangeNewCityHandler} type="text"></input>
                            <button type="submit">Felveszem</button>
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
        </>
    );
};

export default Form;