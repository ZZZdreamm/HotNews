import { Dispatch, SetStateAction } from "react";
import "./styles.scss";

const SearchNews = ({setSearchQuery}:any) => {
    function submitForm(e:any){
        e.preventDefault();
        const form = document.forms[0];
        const input = form.elements[0] as HTMLInputElement;
        if(input.value === "") return alert("Please enter search query");
        setSearchQuery(input.value);
        input.value = "";
    }
    return (
        <form className="search" onSubmit={(e) => submitForm(e)}>
            <input type="text" className="search-input" placeholder="Search new things"/>
            <button type="submit" className="search-button">Search</button>
        </form>
    )
}

export default SearchNews;