import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function ArtistView() {
    const {id} = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])
    console.log(artistData)
    const justAlbums = artistData.filter(entry => entry.collectionType === "Album")
    const renderAlbums = justAlbums.map((album, index) => {
        return (
            <div key={index}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h2>List of Albums:</h2>
            {renderAlbums}
        </div>
    )
}

export default ArtistView