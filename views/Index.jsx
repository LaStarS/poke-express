import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F2F2F2",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F44336",
    width: "100%",
    height: "60px",
    marginBottom: "30px",
  };
  
  const titleStyle = {
    color: "#FFFFFF",
    fontFamily: "Pokemon",
    fontSize: "36px",
    textTransform: "uppercase",
    letterSpacing: "5px",
  };
  
  const contentStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "800px",
    width: "100%",
  };
  
  const listStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "20px",
  };
  
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "250px",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };
  
  const nameStyle = {
    fontFamily: "Pokemon",
    fontSize: "24px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    margin: "0",
    textAlign: "center",
  };
  
  export default function Index(props) {
    return (
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Pokédex</h1>
        </header>
        <div style={contentStyle}>
          <ul style={listStyle}>
            {props.pokemon.map((item) => (
              <a href={`/pokemon/${item._id}`} key={item._id}>
                <li style={cardStyle}>
                  <div style={{ height: "150px", width: "150px", backgroundColor: "#EBEBEB", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "40px" }}>?</div>
                  <h2 style={nameStyle}>{item.name}</h2>
                </li>
              </a>
            ))}
            <a href="/pokemon/new">
              <li style={cardStyle}>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/poke-ball-set-free/150/Poke_Ball-512.png"
                  alt="Add Pokemon"
                  height="150px"
                />
                <h2 style={nameStyle}>Add Pokemon</h2>
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }

// function Index(props) {
//     // can't use hooks or state 
//     // can't use event listeners in the same way
//     return (
//         // <DefaultLayout>
//         <div className='index-view'>
//             <h1>Index View</h1>
//             <ul>
//                 {props.pokemon.map((item, index) => 
//                     <li key={index}>
//                         <a href={`//${item._id}`}><strong>{item.name}</strong></a>
//                     </li>
//                 )}
//             </ul>
//             <a href="/pokemon/new">Add...</a>
        
// <br /> <br /> <br />

//         <form action = '/fruits/seed' method='POST'>
//             <button>SEED</button>
//         </form>

//         <br /> <br />

// <form action = '//clear?_method=DELETE' method='POST'>
//     <button>Clear</button>
// </form>

//         </div>
//         // </DefaultLayout>
//     )
// }

// export default Index;