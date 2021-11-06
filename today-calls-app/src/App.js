import './styles/global.scss'
import {Title} from "./components/Title/Title";
import {Button} from "./components/Button/Button";
import {AddCallForm} from "./components/AddCallForm/AddCallForm";
import {CallsList} from "./components/CallsList/CallsList";

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="container header__container">
                    <Title text={"Today calls app"} />
                </div>
            </header>
            <div className="container">
                <div className="main-wrap">
                    <div className="next-call">
                        <div className="next-call__wrap">
                            <Title text={"Next call"} />
                            <div className="next-call__inputs-wrap">
                                <div className="next-call__input name">User 1</div>
                                <div className="next-call__input phone">032984234234</div>
                                <div className="next-call__input time"> 4:20</div>
                            </div>
                        </div>
                    </div>
                    <div className="calls-wrap">
                        <AddCallForm />

                        <CallsList />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
