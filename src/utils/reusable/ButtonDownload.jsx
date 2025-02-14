import React from 'react'
import { download } from '../../assets/images'
import image from '../../components/Main/styles/presentation.module.css'

const ButtonDownload = () => {
  return (
    <>
         <a href="https://docs.google.com/document/d/1td2i9LevhUeumaWId5vCzuFGl7MQe1J7ybinvv8DvsQ/edit?usp=sharing" target="_blank">
          <img src={download} alt="download" width={23} height={23} className={image.imageSocial}/>
        </a>
    </>
  )
}

export default ButtonDownload
