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
        <p>Created by Xen using <a href="https://api.artic.edu/docs" target="_blank">Art Institute of Chicago API</a></p>
        <span className="footer__text">
          <a href="https://twitter.com/xen_uwu" target="_blank">@xen_uwu</a>
        </span>
      </footer>

    </>
  )
}

export default App
