import {useState} from "react"
import GridArt from "./components/GridArt"
import Search from "./components/Search"
import Title from "./components/Title"

function App() {
  
  const [artQuery, setArtQuery] = useState('');
  
  return (
    <>
      <Title />
      <Search setArtQuery={setArtQuery} />
      <GridArt artQuery={artQuery}/>
    </>
  )
}

export default App
