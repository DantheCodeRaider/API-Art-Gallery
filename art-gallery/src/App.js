import './App.css';
import {useState, useEffect} from 'react';
import ButtonBar from './ButtonBar.js';

function App() {
  {/* State variables here... */}
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
 
  {/* Functions here... */}
  function Gallery(props){
    return (
        <div className='ImgWidget'>
            <img className='BigImg' src={props.objectImg} alt={props.title}  />
            <h2>{props.artist}</h2>
        </div>
    )}

  {/* useEffects here... */}
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])


    const handleIterate = (e) => {
      setArtId(artId + Number(e.target.value))
      }

{/* Return JSX down here... */}
  return (
    <div className="App">
      <div className='container'>
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
        <ButtonBar handleIterate={handleIterate}/>
      </div>
    </div>
  );
}

export default App;