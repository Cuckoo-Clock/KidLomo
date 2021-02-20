import React from 'react';
import  Main from "./Components/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from "./Components/Loading";

const {persistor, store} = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        Loading={<Loading/>}
        persistor={persistor}
      >
        <Main/>
      </PersistGate>
    </Provider>
  );
}

