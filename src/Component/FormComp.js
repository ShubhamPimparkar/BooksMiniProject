import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Service from '../BookService/Service';
export default function FormComp() {
  const [book, setbook] = useState({ name: "", auth: "", price: "" })


  const handleChange = (event) => {
    var name = event.target.name;
    setbook({ ...book, [name]: event.target.value })

  }
  const navigate = useNavigate()

  const submitForm = () => {
    if (book.name === "" || book.auth === "" || book.price === "") {
      navigate("/form/warn")
      return
    }
    Service.addBook(book).then((result) => {
      console.log(result)
    })
    setbook({ name: "", auth: "", price: "" })
    navigate("/store")
  }

  return (
    <div>
    <Outlet></Outlet>
      <div className='shadow-lg p-3 mb-5 bg-white  myForm'>
        <form>
          <div className="form-group">
            <h4 className="form-text">Enter the Book Details :</h4>
            <br></br>
            <label for="name">Name:</label>
            <input type="email" className="form-control" value={book.name} id="name" name='name' aria-describedby="emailHelp" onChange={handleChange} />
            <small id="emailHelp" className="form-text text-muted">Enter the name of book to be added</small>
            <br></br>
            <label for="auth">Author:</label>
            <input type="email" className="form-control" value={book.auth} onChange={handleChange} name='auth' id="auth" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">Enter the Author name of book to be added</small>
            <br></br>
            <label for="price">Price:</label>
            <input type="email" className="form-control" value={book.price} onChange={handleChange} name='price' id="price" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">Enter the price of book to be added</small>
          </div>

          <br></br>
          <button type="button" className="btn btn-info" onClick={submitForm}>Submit</button>
        </form>

      </div>
      </div>
  )
}