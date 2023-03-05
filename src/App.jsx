import { useEffect, useState } from "react";
import { List, Item } from "./components";

function App() {

  const [user, setUser] = useState([]) 

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  console.log(user);

  return (
    <>
    <h1 className="text-center text-primary">Users</h1>
      {user.length > 0 && 
      <List>
        {user.map(item => <Item key={item.id} user={item} />
        )} 
      </List>

      }
    </>
  );
}

export default App;
