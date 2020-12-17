import React, { useState, useEffect } from "react";

function Memegenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState('https://i.imgflip.com/23ls.jpg')
  const [memeApi, setMemeApi] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json()
    .then(JsonResponse => {
      const {memes} = JsonResponse.data;
      setMemeApi(memes);
    }))
  }, [])


  const handleTopTextChange = (event) => {
    setTopText(event.target.value)
  }

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomMeme = Math.floor(Math.random() * memeApi.length);
    setMeme(memeApi[randomMeme].url)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" value={topText} onChange={handleTopTextChange} placeholder="Top text"/>
          <input type="text" value={bottomText} onChange={handleBottomTextChange} placeholder="Bottom text"/>
          <button>Generate meme</button>
      </form>

      <div className="memeContainer">
        <img src={meme} alt="Meme" />
        <h2 className="topText">{topText}</h2>
        <h2 className="bottomText">{bottomText}</h2>
      </div>
    </div>  
  );
}

export default Memegenerator;
