import { useState, useEffect } from "react"

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
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
