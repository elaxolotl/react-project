import * as React from "react";

function getTitle(title) {
  return title;
}

const List = (props) => {
  console.log("App")
  return (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);}

const Item = (list) => (
  <li key={list.item.objectID}>
    <span>
      <a href={list.item.url}>{list.item.title} </a>
    </span>
    <span>{list.item.author}</span>
    <span>{list.item.num_comments}</span>
    <span>{list.item.points}</span>
  </li>
);

const Search = () => {
  console.log("Search")
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event)
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>Searcing for <strong>{searchTerm}</strong></p>
    </div>
  );
};

const App = () => {
  console.log("App")
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleSearch = (event) => {
    console.log(event.target.value)
  }
  return (
    <div>
      <h1>Hacker stories</h1>
      <Search onSearch={handleSearch}/>
      <hr />
      <List list={stories} />
    </div>
  );
}


export default App;
