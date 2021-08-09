import './Simpson.css'

export default function Simpson(props) {
    let {name ,surname,age,info,photo} = props
    return (
        <div className={'simpson'}>
            <h2>{name} {surname}, age - {age}</h2>
            <h2>{info}</h2>
            <img src={photo} alt=""/>
        </div>
    );
}
