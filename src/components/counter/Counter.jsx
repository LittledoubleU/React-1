import './Counter.css'

export function Counter(props) {
    return (
        <div className={`display`}>
            <p className={`${props.animation}`} onAnimationEnd={props.handleAnimationEnd}>{props.count}</p>
        </div>
    )
}