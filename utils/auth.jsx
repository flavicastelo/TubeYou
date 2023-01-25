
const isLogged = localStorage.getItem('token') !== null;
const login = (token) => localStorage.setItem('token', token);
const logout = () => localStorage.removeItem('token');
// const setId = (_id) => localStorage.setItem('_id', _id);

export {isLogged, login, logout};