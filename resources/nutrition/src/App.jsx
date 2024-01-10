import React from "react";
import {useState} from "react";
import "./App.css";
import FoodData from "../../FoodData";
import Search from "./Component/Search";
import FoodBox from "./Component/FoodBox";

function App(){
  const [search,setSearch]=useState("")

  const filteredSearch=FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <h1 className="search">Search</h1>
      <Search setSearch={setSearch}/>
      {
        filteredSearch.length <=0?(
          <h3>No data found</h3>
        ) : (
          filteredSearch.map((e,i)=>{
            return <FoodBox key={i} ele={e} index={i} />
          })
        
        )
      }
    </>
  )
}
export default App;