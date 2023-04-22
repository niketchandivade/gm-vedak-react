import React from 'react'

import './PageTitle.css'

const PageTitle = ({title = ''}) => {
  return (
    <div className='title'>
        {title}
    </div>
  )
}

export default PageTitle