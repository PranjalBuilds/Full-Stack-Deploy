import { useState, useEffect } from "react"

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => {
      console.error("Error fetching message", err)
    })
  }, []);

  return (
    <>
      <h1>Hello Pranjal, from Vite React!</h1>

      <h2> {message} </h2>
    </>
  )
}

export default App
