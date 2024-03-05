type InputProps ={
    value:string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
} 
const Input = (props: InputProps) => {
  return (
    <div>
        <input type="text" value={props.value} onChange={(event)=> props.handleChange(event)}/>
    </div>
  )
}

export default Input