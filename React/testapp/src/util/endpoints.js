
var axios = require('axios');

export const list = () =>{
    var config = {
        method: 'get',
        url: 'http://localhost:8080/crud/all',
        headers: { }
      };
      
      return axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        return response.data;
    })
      .catch(function (error) {
        console.log(error);
      });
      
}

export const create = (name) =>{
    var data = JSON.stringify({
        "name": name
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:8080/crud/create',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      return axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
}

export const read = (id) =>{
    var config = {
        method: 'get',
        url: `http://localhost:8080/crud/read?id=${id}`,
        headers: { }
      };
      
      return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      

}

export const update=(id,name)=>{
    var data = JSON.stringify({
        "name": name,
        "id" : id
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:8080/crud/create',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      
}

export const _delete = (id) =>{
    var data = JSON.stringify(id);

    var config = {
    method: 'delete',
    url: 'http://localhost:8080/crud/delete',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    });
}