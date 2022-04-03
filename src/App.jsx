import {useState} from "react"
import GridArt from "./components/GridArt"
import Search from "./components/Search"
import Title from "./components/Title"

function App() {
  
  const [artQuery, setArtQuery] = useState({query: '', limit: 10});
  
  return (
    <>
      <Title />
      <Search setArtQuery={setArtQuery} />
      <GridArt artQuery={artQuery}/>
      <footer className="footer">
        <p>Created by Xen</p>
        <span className="footer__text">@xen_uwu</span>
      </footer>

    </>
  )
}

export default App
