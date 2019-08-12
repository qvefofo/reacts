import React from 'react'
import ReactDOM from 'react-dom'

// const div = (
//     React.createElement('div', null,
//         React.createElement('p', null,
//             React.createElement('span', null, 'hi')))
// )

// 先声明再使用
const Header = (
    <header>
        header
    </header>
)
const Header2 = function (props) {
    return (
        <header>
            header {props.name}
        </header>
    )
}
const Bottom = (
    <div>
        Button
    </div>
)
const Bottom2 = function () {
    const [n, setN] = React.useState(0) // 初始化
    return (
        <div>
            {n}
            <button onClick={function () {
                setN(n + 1) // 使用 useState 修改内部值
            }}>+1</button>
        </div>
    )
}

const div = (
    <div>
        {Header}
        {Header2({ name: 'jack' })}
        <Header2 name="jacks" />
        <p>
            <span>hi</span>
        </p>
        <Bottom2 />
    </div >
)



console.log(div) // 虚拟的 element

// document.body.appendChild(div)
ReactDOM.render(div, document.getElementById('root'))
