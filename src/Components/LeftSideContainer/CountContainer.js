import React, { useState } from 'react'
import style from './CountContainer.module.css'

function CountContainer(props) {
    
 
    
    return (
        <div className={style.container} onClick={props.onClick}> 
            {
               props.casesType =='cases'?<div className={style.div} style={{backgroundColor:props.color}}></div>:null
            }
            <div className={style.subContainer}>
            <p  className={style.p1}>{props.title}</p>
            <h2 className={style.h2}>+{props.cases}</h2>
            <p  className={style.p2}>{props.total} Total</p>
            </div>

        </div>
    )
}

export default CountContainer
