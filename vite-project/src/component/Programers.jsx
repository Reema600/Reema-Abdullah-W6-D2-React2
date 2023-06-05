

export default function (props) {
  return (
    <div>
        <img className="img" src={props.img}></img>
        <p>Name : {props.Name}</p>
        <p>programming languages: {props.programming}</p>
        <p>Experience : {props.experience}</p>
        <p>Company : {props.company}</p>

    </div>
  )
}
