import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUser] = useState([]);
  const [posts, setPost] = useState([]);
  const [load, setLoaded] = useState(true);
  console.log(users.length);
  console.log(posts.length);
  // console.log(users.length);
  console.log(posts);

  const fetchData1 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setPost([])
        setUser(json);
        setLoaded(!false)
      });
  }
  const fetchData2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setUser([])
        setPost(json);
        setLoaded(!false)
      });
  }

  useEffect(()=>{
    fetchData1()
  },[])

  const handleClick = () => {
    fetchData1()
  }
  const handleFetchClick = () => {
    console.log('clicked');
    fetchData2();
  }

  return <div>
    <button onClick={handleClick}>Primary</button>
    <button onClick={handleFetchClick}>Secondary</button>
    {
      load && users.map(user => <li>{user.email}</li>)
    }
    {
      load && posts.map(post => <li>{post.title}</li>)
    }
    </div>;
};

export default Home;
