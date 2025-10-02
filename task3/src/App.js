import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);
  const [selectPost, setSelectPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10)))
      .catch(() => setError("Lỗi khi lấy dữ liệu post"))
      .finally(() => setLoading(false));
  }, []);

  const handleDetail = (post) => {
    setLoading(true);
    setSelectPost(post);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(res => res.json())
      .then(data => setComment(data))
      .catch(() => setError("Lỗi khi lấy dữ liệu comments"))
      .finally(() => setLoading(false));
  };

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 style={{ marginLeft: "20px" }}>Tất cả tin tức</h1>
      <input 
        type="text" 
        placeholder="Tìm kiếm bài viết..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        style={{ margin: "20px", padding: "5px"}}
      />
      {error && <p>{error}</p>}
      <ul>
        {filteredPosts.map(p => {
          return (
            <li key={p.id} onClick={() => handleDetail(p)} style={{cursor: "pointer"}}>
              {p.title}
            </li>
          );
        })}
      </ul>

      <h2 style={{ marginLeft: 20 }}>Chi tiết của tin tức</h2>

      {loading && <p style={{marginLeft: 20}}>Loading...</p>}
      {selectPost && !loading && (
        <div style={{ marginTop: "10px", margin: "20px" }}>
          <h3>{selectPost.title}</h3>
          <p>{selectPost.body}</p>
          <h3>Comments</h3>
          <ul>
            {comment.map(comment => (
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
