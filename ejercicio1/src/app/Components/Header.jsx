import { List } from "./List";
import css from "./css/Header.css";

export const Header =()=>{
    return (
       <header>
        <h1 className="title">Lista de peliculas disponibles </h1>
        <List></List>
       </header>
    )

}