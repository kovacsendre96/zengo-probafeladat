import axios from 'axios';


/*
This js file is responsible for the operation of api.
Functions are created that can be imported to the appropriate location.
They are separated from the other codes for easier transparency.

Roles of functions:
                        -[1] Getting cities from API
                        -[2] Creating a new city +error alert
                        -[3] Edit city name  +error alert
                        -[4] Delete city





/*
[1] Getting cities from API
method:post
params: -state_id : count id 
*/
export function getCitiesApi(stateId, setState) {
    axios.post('http://probafeladat-api.zengo.eu/api/state_city',
        { state_id: stateId },
        {
            headers: {
                'token': '6224922a57237ec294f5ef05a8a87b48'
            }
        })
        .then(response => {


            setState(response.data.data);


        })
        .catch((err) => console.log(err));
}









/*
[2] Creating a new city in the API
method:put
params: -name: name of the new city
        -state_id : count id 
*/
export function newCityApi(newCityName, stateId, setState, cities) {
    axios.put('http://probafeladat-api.zengo.eu/api/city',
        {
            name: newCityName,
            state_id: stateId,
        },

        {
            headers: {
                'token': '6224922a57237ec294f5ef05a8a87b48'
            }
        })
        .then(response => {
            setState([...cities, response.data.data]);



            if (response.data.errorMessage) {               
                alert(response.data.errorMessage.name[0])
            }





        })
        .catch((err) => console.log(err));
}







/*
[3] Edit city name
method:patch
params: -name: name of the new city
        -city_id : city id 
*/
export function editCityApi(cityId, cityModify, setState, cities, index) {
    axios.patch('http://probafeladat-api.zengo.eu/api/city',
        {
            city_id: cityId,
            name: cityModify,
        },

        {
            headers: {
                'token': '6224922a57237ec294f5ef05a8a87b48'
            }
        })
        .then(response => {

            if (response.data.data !== "") {
                setState([...cities, cities[index].name = response.data.data.name]);

            }

            if (response.data.errorMessage) {
                alert(response.data.errorMessage.name[0])
            }

        })
        .catch((err) => console.log(err));
}






/*
[4] Delete city
method:delete
params: -city_id : city id 
*/
export function deleteCityApi(cityId) {
    axios.delete('http://probafeladat-api.zengo.eu/api/city',
        {
            data:
                { city_id: cityId },
            headers: { "token": "6224922a57237ec294f5ef05a8a87b48" }
        }
    ).then(response => {

        console.log(response.data)


    })
        .catch((err) => console.log(err));

}