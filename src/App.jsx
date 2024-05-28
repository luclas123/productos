import { Component, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      categorias: [],
      productos: []
    }
  }
  

  buscarCategorias(){
    const url = "https://productos.ctpoba.edu.ar/api/categorias"
    axios.get(url)
    .then((res) => {
      this.setState({categorias : res.data.categorias})
    })
    .catch((error)=>{
    console.log(error);
    })
  }

  buscarProducto(){
    const url = "https://productos.ctpoba.edu.ar/api/productos"
    axios.get(url)
    .then((res)=>{
      this.setState({productos : res.data.productos})
    })
    .catch((error)=>{
      console.log(error);
    })
  }

 
  render(){
    return(
    <div>
      <span>APP</span>
      <input
      type='button'
      value="buscar"
      onClick={()=> this.buscarCategorias()}
      ></input>
      
      <select
      value={this.state.categoria_id}
      onChange={(e)=> this.setState({categoria_id: e.target.value})}
      >
      {this.state.categorias.map((categoria, i) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
            ))}
      </select>

      <input
      type='button'
      value='buscar'
      onClick={()=> this.buscarProducto()}></input>

     {this.state.productos.map((producto, i)=>(
      <div key={producto.id} className='listaProducto'>
        {producto.nombre} <br />
        {producto.descripcion} <br />
        {producto.precio} <br />
        {producto.categoria} <br />
        

      </div>
    ))}
    </div>
    
    )
  }
}
