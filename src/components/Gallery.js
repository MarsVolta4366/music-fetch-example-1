import { useContext } from 'react'

import { DataContext } from '../context/DataContext.js'
import GalleryItem from './GalleryItem'

function Gallery() {
    const data = useContext(DataContext)
    const myData = data.result.read()

    const display = myData.map((song, index) => {
        return (
            <GalleryItem song={song} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery