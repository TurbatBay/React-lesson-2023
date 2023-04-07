import React from 'react'

const Button = (props:any): JSX.Element => {
  return (
    <div>
        <button className='button'>{props.children} Blick me</button>
        <style jsx>
            {
                `
                    .button {
                        padding: 1em;
                        border-radius: 1em;
                        border: none;
                        background: green;
                        color:white;
                    }
                `
            }
        </style>
    </div>
  )
}

export default Button