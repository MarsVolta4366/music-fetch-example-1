import './App.css';
import { useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ArtistView from './components/ArtistView'
import AlbumView from './components/AlbumView'
import { createResource as fetchData } from "./helper"
import { DataContext } from "./context/DataContext"
import Spinner from './components/Spinner';

function App() {
  let [data, setData] = useState(null)
  let [message, __setMessage] = useState('Search for Music!')

  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term))
  }

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <SearchBar handleSearch={handleSearch} />
              <DataContext.Provider value={data}>
                {renderGallery()}
              </DataContext.Provider>
            </div>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;