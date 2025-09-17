import {useState} from 'react'

const ComponentMaintainState = ({initState = null, readState, setState})=>{
   const [state, setState] = useState(initState)
   
   return null;
}

export default ComponentMaintainState;