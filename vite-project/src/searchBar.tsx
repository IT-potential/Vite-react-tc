import React from "react";

export class SearchBar extends React.Component {
    state = {
        searchText: localStorage.getItem("searchText") || "",
    };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchText: e.target.value,
        });
    };
    componentWillUnmount = () => {
        localStorage.setItem('searchText', this.state.searchText);
        console.log('enter');
    }
    render() {
        return (
            <div>
                <input className="search" placeholder='search something'
                    onChange={this.handleChange}
                    value={this.state.searchText}
                ></input>
                <img className="search__magnifier" src="src\assets\magnifier.svg" />
            </div>
        )
    }
}