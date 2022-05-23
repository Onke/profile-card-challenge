import "./App.css";
import { Card } from "./Components/Card/card";

function App() {
  const user = {
    name: "Sterling",
    surname: "Archer",
    age: "32",
    city: "Michigan",
    stats: {
      followers: 302,
      likes: 897,
      photos: 1.3,
    },
  };

  return (
    <div className="background">
      <Card user={user} />
    </div>
  );
}

export default App;
