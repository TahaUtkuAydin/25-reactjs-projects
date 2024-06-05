import { useRef } from "react";

export default function ScrollToSection() {
  const refs = useRef([]);
// const navbarHeight = 60 fixed bir Navbar var ise
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrolltoSection(index) {
    if(refs.current[index]) {
        const pos = refs.current[index].getBoundingClientRect().top + window.scrollY  // - navbarHeight; fixed Navbar var ise
        window.scrollTo({
            top:pos,
            behavior:"smooth"
        })
    }
  }

return (
    <div>
        <h1>Scroll to particular section</h1>
        {data.map((item,index)=>(
            <button key={index} onClick={()=>handleScrolltoSection(index)} >Scroll to {item.label}</button>
        ))}
        {data.map((item,index)=>(
            <div key={index} ref={(e)=> (refs.current[index] = e)} style={item.style} >
                <h3>{item.label} </h3>
            </div>
        ))}
    </div>
)
  
}
