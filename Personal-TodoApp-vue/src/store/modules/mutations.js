const addUserName = (state, userName) => {
  localStorage.setItem('userName', userName);
  state.userName = userName;
};

export { addUserName };
