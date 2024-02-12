import React from 'react'
import './MemeGenerator.css';

function MemeGenerator() {


  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://t3.ftcdn.net/jpg/05/48/63/18/240_F_548631876_pX3pcK7lupzm6ZrXquBdMylRrgoMvap5.jpg" 
})
const [allMemes, setAllMemes] = React.useState([])


React.useEffect(() => {
  async function getMemes() {
      
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
      const data = await res.json();
      const images = data.map(item => item.url);
      setAllMemes(images);
  }
  getMemes();
}, []);


function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber];
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }));
}

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

return (
    <main>
        <h1 className="meme-title">Craft a fun cat image for unexpected delights!</h1>
        <div className="container">
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Change Image
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </div>
    </main>
)
}

export default MemeGenerator