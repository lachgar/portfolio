import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
        
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>

    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;

