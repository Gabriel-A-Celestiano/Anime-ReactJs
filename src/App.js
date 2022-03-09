import React, { useState} from 'react'
import SearchInput from './components/SearchInput'
import Card from './components/Card'
import './App.css'

export default function App() {
  const [info, setInfo] = useState({})
  const [text,setText] = useState('')

  function buscador() {
    if(text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=10`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
          console.log(response)
        })
    }
  }

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput value={ text } 
                    onChange={(search) => setText(search)} />
      <button className="btn-search" onClick={()=>{buscador()}} >Search</button>              
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <Card key={anime.id} 
                  img={anime.attributes.posterImage.small} 
                  Alt={anime.attributes.canonicalTitle} 
                  title={anime.attributes.canonicalTitle}
                  synopsis={anime.attributes.synopsis}
                  imagem={anime.attributes.posterImage.small}
            />
          ))}
        </ul>
      )}
    </div>
  )
}