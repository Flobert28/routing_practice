import { redirect, useParams } from "react-router-dom";

const Hello =(props)=>{
  const{clr} = useParams()
  const{background} = useParams()
  const{hello} = useParams()

  return(
    <div>
      <h1 style={{color: clr, backgroundColor: background}}>The Word is: {hello}</h1>
    </div>
  )
}

export default Hello;