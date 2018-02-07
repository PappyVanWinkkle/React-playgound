import React from "react";

const isSearched = searchTerm => item => 
item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends React.Component {
    render () {
        const { list, pattern, onDismiss } = this.props
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item => 
                  <div key={item.objectID}>
                    <h2>{item.title}
                      <a href={item.url}> </a>
                    </h2>
                    <h3>{item.author}</h3>
                    <h4>{item.num_comments}</h4>
                    <h4>{item.points}</h4>
                    <button 
                      onClick={() => onDismiss(item.objectID)}
                      type="button"
                      >
                      Dismiss 
                      </button>
                  </div>
                )}
            </div>
        )
    }
}

export default Table;