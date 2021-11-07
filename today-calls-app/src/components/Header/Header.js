import React from "react";
import mainClass from "./Header.module.css";
import {Title} from "../Title/Title";

const Header = (props) => {
    return (
        <header className={mainClass.header}>
            <div className={`${mainClass.header__container}  container`}>
                <Title classes={`${mainClass.header__title} main-title`} text={"Today calls app"} />
            </div>
        </header>
    )
}
export default Header;