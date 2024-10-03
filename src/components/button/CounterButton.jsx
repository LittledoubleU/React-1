import './CounterButton.css'

export default function CounterButton(props) {
    return (
        <div className='btn'>
            <button onClick={props.func}>
                <img src={props.img} alt="btn" />
            </button>
        </div>
    )
}