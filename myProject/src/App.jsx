import * as React from "react";

const List = ({list, onRemoveItem }) => {
  return (
    <ul>
      { list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
}

const Item = ({item}) => (
  <li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title} </a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

const Search = ({search, onSearch}) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch} 
      />
    </div>
  );
};

const App = () => {
  const initialStories = [
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
  const [stories, setStories] = React.useState(initialStories);
  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');
  const handleRemoveStory = (item) =>{
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories)
  }
  React.useEffect(()=>{
    localStorage.setItem('search', searchTerm);
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div>
      <h1>Hacker stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <Search onSearch={handleSearch} search={searchTerm} />
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}

const InputWithLabel =({
  id,
  value,
  onInputChange,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type="text"
      value={value}
      onChange={onInputChange}/>
  </>
);



export default App;
