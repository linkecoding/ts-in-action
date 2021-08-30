import React  from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/demo/Hello'

ReactDOM.render(
    <Hello name="React Sample"/>,
    document.querySelectorAll('.app')[0]
)