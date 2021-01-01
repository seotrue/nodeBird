/*
커스텀 훅
중복 되는 부분을 커스텀 훅으로 만드다.
*/
import {useCallback, useState} from 'react'

export default(initialValue = null)=>{
    const [value,setValue] = useState(initialValue)
    const handler = useCallback((e) => {
            setValue(e.target.value)
        },[input])
        return [value,handler]
}