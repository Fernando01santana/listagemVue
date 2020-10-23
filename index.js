const { default: Axios } = require('axios');
var exios = require('axios');
var numbers = '';
Axios.get('http://localhost/entrevista/axios/').then((response)=>{
    numbers = response.data
});


