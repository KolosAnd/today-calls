import './styles/global.scss'
import {AddCallForm} from "./components/AddCallForm/AddCallForm";
import {CallsList} from "./components/CallsList/CallsList";
import React, { useEffect, useState} from "react";
import "./components/AddCallForm/addCallForm.scss";
import Header from "./components/Header/Header";
import NextCall from "./components/NextCall/NextCall";
import {ContractContext} from "./context/context";
import {createStore} from 'redux';
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import deleteCall from "./utils/indexUtil";


function App() {
    let store = createStore(rootReducer, composeWithDevTools());
    store.subscribe(() => console.log(store.getState()))
    const getCalls = () => {
        let calls = JSON.parse(localStorage.getItem('list'));
        if (calls == null) {
            return [];
        }
        return calls;
    }
    const [calls, setCalls] = useState(() => {
      return getCalls();
    });


    const removeCalls = (callID) => {
        let removeCalls = deleteCall(calls, callID) ;
        setCalls(removeCalls);
    }

    const updateCalls = (newArrCalls) => {
        setCalls([...newArrCalls]);
    }

    useEffect( () => {
        if(calls.length) {
            localStorage.setItem('list', JSON.stringify(calls));
        }
    },[calls]);



    const addOneCall = ((oneCall )=> {
       setCalls([...calls,oneCall]);
    });

    return (
        <ContractContext.Provider value={{calls,updateCalls}}>
            <div className="App">
               <Header />
                <div className="container">
                    <div className="main-wrap">

                        <NextCall calls={calls}/>

                        <div className="calls-wrap">
                            <AddCallForm addOneCall={addOneCall} typeForm={'create'}/>

                            <CallsList remove={removeCalls} calls={calls}/>
                        </div>

                    </div>
                </div>

            </div>
        </ContractContext.Provider>
    );
}

export default App;
