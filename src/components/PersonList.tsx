type personListProps ={
    names:{
        first:string,
        last:string
    }[]
}

const PersonList = (props:personListProps) => {
  return (
    <div>
        {
            props.names.map((names, index)=>{
                return (
                    <h4 key={index}>{names?.first} {names?.last}</h4>
                )
            })
        }
    </div>
  )
}

export default PersonList