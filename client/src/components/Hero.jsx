import "../css/Hero.css"
import {NavBar} from "./NavBar.jsx";
export function Hero(){
    return (
        <>
            <div id="main-hero">
                <NavBar className="nav"/>
                <NameTag/>
            </div>


        </>
    )
}

function NameTag(){
    return (
        <>
            <h1 id="name">Hondo Reilly</h1>
            <h2 id="bio">Designer, Developer, Engineer</h2>
        </>
    )
}