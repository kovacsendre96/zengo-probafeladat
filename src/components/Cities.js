/* import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getCitiesApi, editCityApi, deleteCityApi } from './axiosHelper';









const Cities = (cities,setCities,countyId,city) =>{


    const [cityId, setCityId] = useState(); //[3.1]


    const [changeCityName, setChangeCityName] = useState();  //[4.1]


    const li = document.querySelectorAll('li');
    const modifyInput = document.querySelectorAll('.selected-item');



    const clickedCityHandler = (e) => {            //[3.1]


        const li = document.querySelectorAll('li');
        for(let i =0;i<li.length;i++){
            li[i].className=""
            li[i].nextElementSibling.className="selected-wrapper hide"
        }    
       
    
        setCityId(cities.filter(f => f.name === e.target.innerText)[0].id); //[3.4]
        e.target.nextSibling.className = "selected-wrapper";
        e.target.className = "hide";                            //[3.5]
        
    }
    
    const closeButton = () => {                     //[3.6]
       for (let i = 0; i < li.length; i++) {
            li[i].className=""
            li[i].nextElementSibling.className="selected-wrapper hide"
            modifyInput[i].value = li[i].innerText;
        }; 
       
    
    };
    
    
    
    const onChangeCityNameHandler = (e) => {        //[4.2]
        setChangeCityName(e.target.value);
    };
    
    const acceptButton = () => {        //[4.3]
    
        const index = cities.findIndex(i => i.id === cityId); // [4.4]
       
        editCityApi(cityId, changeCityName, setCities, cities, index);    //[4.5]
    
        for (let i = 0; i < li.length; i++) {
            li[i].className = "";                                   //[4.6]
            li[i].nextSibling.className = "selected-wrapper hide";
    
        };
    
    };
    
    
    const removeButton = () => {            //[5.1]
        deleteCityApi(cityId);              //[5.2]
        getCitiesApi(countyId,setCities);          //[5.3]
       
        for (let i = 0; i < li.length; i++) {
            li[i].className = "";
            li[i].nextSibling.className = "selected-wrapper hide";
          
        };
    };

    return(

       <>
            <li key={city.id} onClick={clickedCityHandler}> {city.name}</li>
            <div className="selected-wrapper hide ">
                <input onChange={onChangeCityNameHandler} defaultValue={city.name} className="selected-item" ></input>
                <button onClick={acceptButton} className="button modify"><FontAwesomeIcon icon={faCheck} /></button>
                <button onClick={closeButton} className="button cancel"><FontAwesomeIcon icon={faTimes} /></button>
                <button onClick={removeButton} className="button delete"><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
        </>
    );

};

export default Cities; */