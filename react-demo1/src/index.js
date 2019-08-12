import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const Cell = function (props) {
    const [text, setText] = React.useState('')
    const onClickButton = function () {
        console.log('click')
        setText('x')
    }
    return (
        <div className="cell" onClick={onClickButton}>
            {props.text}
        </div>
    )
}

const cells = [
    // [null, null, null],
    // [null, null, null],
    // [null, null, null],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
]

const Chessboard = function () {
    return (
        <div>
            {cells.map(items => <div className="row">
                {items.map(item => <div className="col">
                    <Cell text={item} />
                </div>)}
            </div>)}
        </div>
    )
}

ReactDOM.render(<div>
    <Chessboard />
</div>, document.getElementById('root'))