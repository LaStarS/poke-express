import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

// function Show(props) {
//     return (
//         <DefaultLayout>
//             <div className='show-view'>
//             <h1>Show View</h1>
//             <p>The <strong>{props.pokemon.name}</strong></p>
//             <p>It looks like this: <span style={{ img: props.pokemon.img }}>{props.pokemon.img}</span></p>


//             <a href={`/pokemon/${props.pokemon._id}/edit`}>Edit</a>
            
//             <br /><br />


//             <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} method="POST">
//                 <button>Delete</button>
//             </form>

//             <br />

            

//             <a href="/pokemon">Back</a>
//         </div>
//         </DefaultLayout>
//     )
// }

// export default Show;

const myStyle = {
    color: '#191970',
    textAlign:'center',
    fontSize: '20px',
    fontFamily: "monospace",
    fontWeight: 'bold',
    padding: '10px'
    };

export default function Show(props) {
    let name = props.pokemon.name
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    let imageSrc = props.pokemon.img + '.jpg'

    return (
        <div style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{capitalizedName}</h2>
            <img src={imageSrc} alt="pokemon img"></img>
            <br /><br />
           <a href="/pokemon"><h2>Back</h2></a>
        </div>
    )
}