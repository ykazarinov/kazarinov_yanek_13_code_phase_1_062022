import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import profileReducer from "./slices/profile";
import newProfileReducer from "./slices/newProfile";

// A reducer is a function that receives the current state 
//and an action object, decides how to update the state if necessary, 
//and returns the new state: (state, action) => newState. 
//You can think of a reducer as an event listener which handles events
// based on the received action (event) type.
const reducer = {
  auth: authReducer,
  message: messageReducer,
  profile: profileReducer,
  newProfile: newProfileReducer
}

//The current Redux application state lives in an object called the store .

// configureStore is a friendly abstraction over the standard Redux createStore 
// function that adds good defaults to the store setup 
// for a better development experience.
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;