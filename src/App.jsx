import { useEffect, useState } from "react";
import { List, Item, Header } from "./components";

function App() {
  const [user, setUser] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  }, []);



  return (
    <div className="container">
      <Header />

      <h1 className="ms-5 mt-5 title">Users</h1>
      <p className="ms-5 mt-3 w-50 text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas delectus eos necessitatibus optio suscipit?
      </p>

      {loading && (
        <div
          className="spinner-border text-primary d-block m-auto mt-5 mb-3"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {err && (
        <div className="alert alert-danger mt-5" role="alert">
          <strong className="text-center">Internet is not working</strong>
        </div>
      )}
      {user.length > 0 && (
        <List>
          {user.map((item) => (
            <Item key={item.id} user={item} />
          ))}
        </List>
      )}
    </div>
  );
}

export default App;
