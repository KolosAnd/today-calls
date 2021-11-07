import './styles/global.scss'
import {AddCallForm} from "./components/AddCallForm/AddCallForm";
import {CallsList} from "./components/CallsList/CallsList";
import {Storage} from "./storage";
import React, { useState} from "react";
import "./components/AddCallForm/addCallForm.scss";
import Header from "./components/Header/Header";
import NextCall from "./components/NextCall/NextCall";


function App() {
    const {getItemsFromStorage, deleteItemsFromStorage} = Storage();
    const getCalls = () => {
        return  getItemsFromStorage();
    }
    const [calls, setCalls] = useState(() => {
      return getCalls();
    });

    const [filter, setFilter] = useState('all');

    const createCall = (newCall) => {
        setCalls([...calls, newCall])
    }
    const removeCalls = (call) => {
        setCalls(calls.filter(c => c.id !== call.id));
        deleteItemsFromStorage(call.milisec);
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
    );
}

export default App;
