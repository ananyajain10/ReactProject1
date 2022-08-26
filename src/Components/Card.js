import React from 'react'
// import kety from '../image/kety.jpg'
// import star from '../image/star.jpg'
import '../style.css'

function Card(props){
    console.log(props)
    return(
        <div className='card'>
            <img className='card--kety'
        src={props.img}/>
            <div className='card--span'>
                <img className='card--star'
                    src='../image/star.jpg'/>
                <span >{props.rating}</span>
                <span className='grey'>{props. reviewCount} • </span>
                <span className='grey'>{props.location}</span>
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