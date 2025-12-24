import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1" // Import the default export and call it slice1Reducer locally.

const stores = configureStore({
    reducer:{
      slice1: slice1Reducer,
    }
})

export default stores;

// slice name: Reducer