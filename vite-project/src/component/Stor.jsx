 

export default function Stor(props) {
  return (
    <div className="card-porder">
        <img className="img" src={props.img}></img>
        <p>{props.text}</p>
    </div>
  )
}
