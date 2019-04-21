import * as ACTIONS from "../constants/path";
const { REACT_APP_PATH_API } = process.env;

export const getPaths = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_PATHS_REQUESTED
    });
    return fetch(`${REACT_APP_PATH_API}`)
      .then(response => response.json(), error => console.log(error))
      .then(payload => dispatch({ type: ACTIONS.GET_PATHS, payload }));
  };
};
export const addPath = payload => {
  return dispatch => {
    dispatch({
      type: ACTIONS.ADD_PATH_REQUESTED
    });
    return fetch(`${REACT_APP_PATH_API}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: ACTIONS.ADD_PATH, payload }));
  };
};
