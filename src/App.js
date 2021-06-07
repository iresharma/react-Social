import { Navbar } from "./Components/navabr";
import { RouterView } from "./router/index";
import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { useStats, userContext } from "./hooks/context";

function App() {
  const [user, setUser] = useState({
    name: "",
    img: "",
    bio: "",
    posts: [],
    liked: [],
  });
  const [stats, setstats] = useState({});
  useEffect(() => {
    db.collection("stats")
      .doc("stats")
      .get()
      .then((data) => {
        setstats(data.data());
        console.log(data.data());
      })
      .catch((error) => console.warn(error));
  });

  return (
    <useStats.Provider value={stats}>
      <userContext.Provider value={{ ...user, setUser }}>
        <Navbar />
        <RouterView />
      </userContext.Provider>
    </useStats.Provider>
  );
}

export default App;
