import { useParams } from "react-router-dom";

const Number =(props)=>{
  const{ nmb } = useParams()

  return(
    <div>
      <h1>The Number is: {nmb}</h1>
    </div>
  )
}

export default Number;