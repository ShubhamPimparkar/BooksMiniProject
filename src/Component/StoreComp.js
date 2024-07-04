import React, { useEffect, useState } from 'react'
import Service from '../BookService/Service'
import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';
export default function StoreComp() {

    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        Service.getAllBooks().then((res) => {
            console.log(res);
            setbooks(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteproduct=(id)=>{
        Service.delBooks(parseInt(id))
        .then((res) => {
            console.log(res);
            fetchData();
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='myTable'>
           
            <button type='button' className='btn-dark btn' onClick={fetchData}>Refresh</button>
          <Link to="/form">  <button type='button' className='btn-info btn' >Form</button> </Link>
            <br></br>
            <br></br>
            <table className="table  table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                {books.map(prod=><tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.auth}</td>
                    <td>{prod.price}</td>
                    <td>
                    <button type="button" name="del" id="del" className="btn btn-danger" onClick={()=>{deleteproduct(prod.id)}} >Delete</button>
                    </td>
                   
                </tr>)}
                    
                </tbody>
            </table>
        </div>
    )
}
