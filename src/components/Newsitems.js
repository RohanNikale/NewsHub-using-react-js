import React from 'react'
import '../style/style.css'
const Newsitems = (props) => {
  return (
    <>
    <div className="news">
        <a href={props.link}>
      <div className="item">
        <figure>
        <img src={props.img} alt="" />
        <figcaption>
          <h3>{props.title}</h3>
          {props.description}
        </figcaption>
        </figure>
      </div>
        </a>
    </div>
    </>
  )
}

export default Newsitems
