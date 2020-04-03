import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./gitHubContext";
import GithubReducer from "./gitHubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  ALL_USERS
} from "../../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const allUsers = async () => {
    setLoading();
    const res = await axios.get("/users");
    // const res = await axios.get(
    // 	'https://api.github.com/users?client_id=91fe9df1524217e18848&client_secret=2f7a446b77d61beb3cccb1f432f2ede0fe4ab694'
    // );
    dispatch({
      type: ALL_USERS,
      payload: res.data
    });
  };

  //search users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(`/search/${text}`);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data
    });
  };
  //Clear Users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS
    });
  };

  //get Single User
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`/user/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  //get individual user repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(`/repos/${username}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        allUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
