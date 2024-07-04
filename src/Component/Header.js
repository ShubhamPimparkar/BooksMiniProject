import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Books Orbit</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
         <NavLink className="nav-link"to={"/home"}>
          Home <span class="sr-only">(current)</span>
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to={"/store"}>
          Store
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to={"/form"}>
          Form
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to={"/about"}>
          About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}
