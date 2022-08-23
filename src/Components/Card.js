import React from 'react'
// import kety from '../image/kety.jpg'
import star from '../image/star.jpg'
import '../style.css'
/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
function Card(props){
    console.log(props)
    return(
        <div className='card'>
            <img className='card--kety'
        src={props.img}/>
            <div className='card--span'>
                <img className='card--star'
                    src={star}/>
                <span >{props.rating}</span>
                <span className='grey'>{props. reviewCount} • </span>
                <span className='grey'>{props.country}</span>
            </div>
            <p className='card--life'>
            {props.title}
            </p>
            <p className='card--from'>
               <b>From $</b>{props.price}/ Person
            </p>
            
        </div>

    )
}
export default Card