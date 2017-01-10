import { FETCH_WEATHER } from '../actions/index';

//initial state is array instead of null because user searches many data
export default function(state = [], action){

  // console.log('Action received', action);
  switch(action.type){
    case(FETCH_WEATHER):
      //handle the data that comes from payload
      return [ action.payload.data, ...state ]; // ends like [city, city, city...] like collection of city
  }
  return state;
}
