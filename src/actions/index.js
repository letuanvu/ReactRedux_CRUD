import * as types from '../constants/ActionTypes'
import axios from 'axios';

export const deleteConpanyAction = (id) => {
  return function(dispatch){
    const data = new FormData();

    data.append('id',id);

    axios.post('http://localhost/companyManager/delete.php', data)
    .then((response) => {
      if(response.data.success){
        dispatch({
          type: types.DELETE_COMPANY, id
        })
      }
    })
    .catch((error) => {
      console.log(error);
    });

  }
}

export const addCompanyAction = (name,url) => {
  //post api to database
  return function(dispatch){
    const data = new FormData();

    data.append('duongdan', url);
    data.append('ten', name);

    axios.post('http://localhost/companyManager/insert.php', data)
    .then((response) => {
      if(response.data.success){
        dispatch({
          type: types.ADD_COMPANY, name, url
        })
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export const fetchCompanies = () => {
  //lay het du lieu api
  return function(dispatch){
    axios.get('http://localhost/companyManager/index.php/getList')
    .then((response) => dispatch({
      type: types.FETCH_COMPANY, data: response.data
    }))
    .catch((error) => {
      console.log(error);
    });
  }
}
