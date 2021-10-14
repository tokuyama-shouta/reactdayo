import React from 'react'

const  Button = (props) => {
  return (
    <div>
      <button className="ui basic button">
       <i class="icon user"></i>
            {props.title}
      </button>
      
    </div>
  )
}

export default Button