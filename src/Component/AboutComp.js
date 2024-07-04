import React from 'react'
import utopia from './this-site-appaears-to-be-under-construction-memes.jpg'
import { Link } from 'react-router-dom'
export default function AboutComp() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded about card" style={{'width': '18rem'}}>
  <img src={utopia} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Beta Testing</h5>
    <p className="card-text">CRUD operation testing underprocess time remaining t-30 days. <br/> Check out the Store :3</p>
    <Link to="/store" className="btn btn-info">Store</Link>
  </div>
</div>
  )
}
