
import { useEffect, useState } from 'react'
import './Styles/Test.css'
const fetch = require('node-fetch')
export const Test = () => {
    
    const [text,setText] = useState('fuck some hoes')
    const [kanye,setKanye] = useState('nothing fucking works!')
   function createRainbowText(text){
        const spaceText = [...text]
        return(
            <p>
                {
                    spaceText.map((letter) => {
                        const a1 = Math.floor(Math.random() * 255) + 1
                        const a2 = Math.floor(Math.random() * 255) + 1
                        const a3 = Math.floor(Math.random() * 255) + 1
                        return(
                            <h1 style={{fontSize:'20rem'}}>
                            <span style={{color:`rgb(${a1},${a2},${a3})`}}>
                                {letter}
                            </span>
                            </h1>
                        )
                    })
                }
            </p>
        )
    }
    

    async function getKanye(){
        const response = await fetch('https://api.kanye.rest/')
        const data = await response.json()
        await setKanye(data.quote)
    }


    useEffect(getKanye,[])
    
    return(
        <div className='dumb'>
            <div className="first">

            </div>

            <div className="second">

            </div>

            <div className="third">

            </div>

            <h1> m </h1>
            <h1> y </h1>
            <h1>   </h1>
            <h1> n </h1>
            <h1> a </h1>
            <h1> m </h1>
            <h1> e </h1>
            <p className='rainbow'>
                <span className="t"> t </span>
                <span className="h"> h </span>
                <span className="i"> i </span>
                <span className="s"> s </span>
                <span className="is"> is </span>
                <span className="a"> a </span>
                <span className="test"> test </span>

            </p>
            <div className="dumbShit" style={{display:'flex' , alignContent:'center' , justifyContent:'center'}}>
                <input 
                    style={{height:'20rem',width:'60rem',fontSize:'4rem',backgroundColor:'blue',color:'white'}}
                    type='text' placeholder='u dumb fuck' 
                    onChange={(e) => setText(e.target.value)}
                />
                <img src='https://r72.cooltext.com/rendered/cooltext389918497925509.gif' alt='dumb'/>
            </div>
            {
                createRainbowText(text)
            }
            <h1 className='kanye'> <span style={{paddingRight:'3rem'}}>kanye once said:</span> "{ kanye }"</h1>
        </div>
    )
}