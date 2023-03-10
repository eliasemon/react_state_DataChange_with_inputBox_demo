import { useState } from 'react'

const InputCompunent = ({ id ,data , changeData}) =>{
  const {name , price} = data
    const changeDataHandel = (type , e) => {
      e.preventDefault()
      changeData(id ,type , e?.target?.value)
    }

    return(
      <div style={{marginTop : "40px"}}>
        <label htmlFor="name">Name</label>
        <input onChange={(e)=> changeDataHandel("name" , e) } type="text" name="" id="name" />

        <label htmlFor="price"></label>
        <input onChange={(e)=> changeDataHandel("price" , e) } type="number" id="price" />
        <button onClick={(e)=> changeDataHandel("delete" , e)}>Delete</button>
      </div>
    )

}


const App = () => {
  const [items, setItems] = useState({})
  console.log(items)
  const changeData = (id , type , value) =>{
    setItems((prv) =>{
      if(type === "delete"){
        delete prv[id]
        return {...prv}
      }
      const data = prv[id] 
      data[type] = value
      prv[id] = data
      return {...prv}
    })
  } 

  const addItems = () =>{
     setItems((prv) =>{
      prv[`${Math.round((Math.random() * 1000000)).toString()}`] = {name : "" , price : 0}
      return {...prv}
     })
  }
  return (
    <div>
      {Object.keys(items).map((id)=>{
        return <InputCompunent id = {id} data = {items[id]}  changeData={changeData} />
      })}
      <button onClick={addItems}>
        Add Items
      </button>
    </div>
  )
}

export default App
