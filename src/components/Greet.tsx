type GreetProps = {
    name : string,
    msgCount: number,
    isLogedIn: boolean
}
const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>
            {props.isLogedIn ? `Welcome ${props.name}! You have ${props.msgCount} unread messages.` : 'Welcome Guest'}</h2>
    </div>
  )
}

export default Greet