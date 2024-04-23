import * as React from "react";

const List = (props) => {
  console.log("App")
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
}

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

const Search = (props) => {
  console.log("Search")
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={props.search} onChange={props.onSearch} />
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
  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div>
      <h1>Hacker stories</h1>
      <Search onSearch={handleSearch} search={searchTerm} />
      <hr />
      <List list={searchedStories} search={searchTerm} />
    </div>
  );
}


export default App;
