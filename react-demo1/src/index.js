import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

// 初始化每个棋盘
const Cell = function (props) {
    return (
        <div className="cell" onClick={props.onClick}>
            {props.text}
        </div>
    )
}


const Chessboard = function () {
    const [cells, setCells] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]) // 初始化数据
    const [finished, setFinished] = useState(false) // 判断是否结束
    const [n, setN] = useState(0) // 每次的点击次数
    const tell = (cells) => {
        console.log('tell 判断谁赢')
        console.log(cells)
        // 判断行的
        for (let i = 0; i < 3; i++) {
            if (cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2] && cells[i][0] !== null) {
                console.log(cells[i][0] + '赢了')
                setFinished(true)
                break;
            }
        }
        // 判断列的
        for (let i = 0; i < 3; i++) {
            if (cells[0][i] === cells[1][i] && cells[1][i] === cells[1][i] && cells[2][i] !== null) {
                console.log(cells[0][i] + '赢了')
                setFinished(true)
                break;
            }
        }
        // 判断斜的
        if (cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2] && cells[0][0] !== null) {
            console.log(cells[0][0] + '赢了')
            setFinished(true)
        }
        if (cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0] && cells[1][1] !== null) {
            console.log(cells[1][1] + '赢了')
            setFinished(true)
        }
    }
    const onClickCell = (row, col) => {
        // n + 1
        setN(n + 1)
        // 改变 cells
        const copy = JSON.parse(JSON.stringify(cells)) // 深拷贝
        copy[row][col] = n % 2 === 0 ? 'x' : 'o';
        setCells(copy)
        // 判断谁赢
        tell(copy)
    }
    return (
        <div>
            <div >n:{n}</div>
            {cells.map((items, row) => <div key={row} className="row">
                {items.map((item, col) => <div key={col} className="col">
                    <Cell text={item} onClick={() => onClickCell(row, col)} />
                </div>)}
            </div>)}
            {finished && <div className="gameOver">游戏结束</div>}
        </div>
    )
}

ReactDOM.render(<div>
    <Chessboard />
</div>, document.getElementById('root'))