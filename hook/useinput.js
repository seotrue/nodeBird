import {useCallback, useState} from 'react'

export  default (initailValue = null) =>{
    const [value, setValue] =  useState(initailValue);
    const handler = useCallback((e)=>{
        setValue(e.target.value);
    },[])
    return [value, handler]
}