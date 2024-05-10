'use client'
export default function Halloviele(props){
    return(
        <>
            <ul>
            {
              props.namen.map((index, item)=>{ return <li key={index}>Hallo {item}</li>})
            }
            </ul>
        </>
    )
}