import { useState } from "react";
import Home from "./pages/Home";
import { Birthady } from "./pages/Birthady";
import './App.css'

function App() {
  const [showBirthday, setShowBirthday] = useState(false);

  return (
    <>
      {!showBirthday ? (
        <Home onOpen={() => setShowBirthday(true)} />
      ) : (
        <Birthady onBack={() => setShowBirthday(false)} />
      )}
    </>
  )
}

export default App
