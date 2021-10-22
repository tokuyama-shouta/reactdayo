import React, {useState} from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App=()=> {
  const [images, setImages] = useState([]);
  const onSearchSubmit= async(term)=>{
    try{
      const params={
        key:"18403602-3bc7efb75c96821e59b30df03",
        q : term,
      };
      const responce = await axios.get("https://pixabay.com/api/",{params});
      setImages(responce.data.hits);
      if(responce.data.total===0){
        window.alert('お探しの画像はありません。')
      }
    }catch{
       window.alert('写真の取得に失敗しました。')
    }
  }
  return(
    <div className='ui container' style={{marginTop:'20px'}}>
      <SearchBar onSubmit={onSearchSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App

//18403602-3bc7efb75c96821e59b30df03