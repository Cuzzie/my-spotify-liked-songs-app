import React from "react"
import "./App.css"
import { Main, Title, SearchBar } from "./components"

function App() {
  return (
    <div className="App">
      <Main>
        <Title>My Spotify Playlist</Title>
        <SearchBar />
      </Main>
    </div>
  )
}

export default App
