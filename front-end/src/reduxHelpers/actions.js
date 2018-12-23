import { ROUTE_CHANGE , LOAD_USER_DATA , LOG_OUT_USER } from './constants';
const loadUser = (data) =>({
    type: LOAD_USER_DATA,
    payload: data
});
const onRouteChange = (data)=>({
    type: ROUTE_CHANGE,
    payload: data
});
const logOut = (data)=>({
    type: LOG_OUT_USER,
    payload: data
});
export {
    logOut,
    loadUser,
    onRouteChange
}