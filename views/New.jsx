import React from 'react'

function New() {

    return(
        <div>
           <h1> Create New Pokemon</h1>
           <form action = "/pokemon" method ='POST'>
           <label>Name:  </label>
           <input type="text" name = "name"></input><br/><br/>
           <label>Image:  </label>
           <input type="text" name = "img"></input><br/><br/>
           <button>Submit</button>
           </form>
        </div>
    )
}

export default New
