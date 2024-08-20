import "../css/NavBar.css"
export function NavBar(){
    return (
        <div id="nav">
            <button className={"nav-button"}>About</button>
            <button className={"nav-button"}>Projects</button>
            <button className={"nav-button"}>Contact</button>
        </div>
    )
}