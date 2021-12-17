import './styles/global.scss'
import {AddCallForm} from "./components/AddCallForm/AddCallForm";
import {CallsList} from "./components/CallsList/CallsList";
import {Storage} from "./storage";
import React, {useState} from "react";
import "./components/AddCallForm/addCallForm.scss";
import Header from "./components/Header/Header";
import NextCall from "./components/NextCall/NextCall";
import {ContractContext} from "./context/context";
import {createStore} from 'redux';
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


function App() {
    let store = createStore(rootReducer, composeWithDevTools());
    store.subscribe(() => console.log(store.getState()))
    const {getItemsFromStorage,addItemToStorage} = Storage();
    const getCalls = () => {
        console.log(getItemsFromStorage());
        return  getItemsFromStorage();
    }
    const [calls, setCalls] = useState(() => {
      return getCalls();
    });

    const createCall = (newCall) => {
        setCalls([...calls, newCall]);
        console.log(calls);
        addItemToStorage(calls);
    }
    const removeCalls = (call) => {
        setCalls(calls.filter(c => c.id !== call.id));
        addItemToStorage(calls);
    }

    //по возростанию
    const sortTimeAscending = () => {
        setCalls( (prev) => {
          return prev.sort((a, b) =>  (a.milisec - b.milisec) );
        });
    }
    //по убиванию
    const sortTimeDescending = () => {
        setCalls( (prev) =>{
          return prev.sort((a, b) => (b.milisec - a.milisec));
        });
    }
    return (
        <ContractContext.Provider value={{calls, store}}>
            <div className="App">
               <Header />
                <div className="container">
                    <div className="main-wrap">
                        <NextCall />
                        <div className="calls-wrap">
                            <AddCallForm create={createCall}/>

                            <CallsList
                                remove={removeCalls} calls={calls}
                                sortTimeAsc={sortTimeAscending}
                                sortTimeDesc={sortTimeDescending}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </ContractContext.Provider>
    );
}

export default App;
