import React, { Component } from "react";

import "./App.css";

// declare the state
const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  }
];
// using es6 higher order func
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="page">
        <div className="interactions">
        <Search value={this.state.searchTerm} onChange={this.onSearchChange}>

          Search
        </Search>
        </div>
        {/*
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => (
          <div key={item.objectID}>
            <h2>
              <a href={item.url}>{item.title}</a>
            </h2>
            <h3>{item.author}</h3>
            <h4>{item.num_comments}</h4>
            <h4>{item.points}</h4>
            <button 
             onClick={() => this.onDismiss(item.objectID)}
             type="button"
             >
             Dismiss
             </button>
          </div>
        ))} 
      */}
        <Table
          pattern={this.state.searchTerm}
          onDismiss={this.onDismiss}
          list={this.state.list}
        />
      </div>
    );
  }
}
{/*
class Table extends React.Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID}>
            <h2>
              {item.title}
              <a href={item.url}> </a>
            </h2>
            <h3>{item.author}</h3>
            <h4>{item.num_comments}</h4>
            <h4>{item.points}</h4>
            <button onClick={() => onDismiss(item.objectID)} type="button">
              Dismiss
            </button>
          </div>
        ))}
      </div>
    );
  }
}
*/}

// with destructuring arrow func 
const Search = ({ value, onChange, children }) => (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
);


function Table (props) {
  const { list, pattern, onDismiss } = props
  return (
    <div className="table">
      {list.filter(isSearched(pattern)).map(item => 
        <div key={item.objectID} className="table-row">
          <span style={{ width: '40%'}}>
          <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '30%'}}>{item.author}</span>
          <span style={{ width: '10%'}}>{item.num_contacts}</span>
          <span style={{ width: '10%'}}>{item.points}</span>
          <button onClick={() => onDismiss(item.objectID)} className="button-inline">
            Click Me
          </button>
        </div>
      )}
    </div>
  )
}

export default App;
