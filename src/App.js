// App.js
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    // App.js

useEffect(() => {
  const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      console.log(resData)
      if (resData.results.length > 0) {
          setData(resData.results)
      } else {
          setMessage('Not Found')
      }
  }
  fetchData()
}, [search])

    return (
        <div>
            <Searchbar setSearch={setSearch} />
            {message}
            <Gallery />
        </div>
    )
}

export default App
