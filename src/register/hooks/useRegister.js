import { useContext } from 'react'
import RegisterContext from '../core/RegisterContext'

/**
 * @returns A {@link Register} object 
 */
const useRegister = ()=> {
    const ctx = useContext(RegisterContext)
    if (!ctx) {
      throw new Error('useRegister must be used within a RegisterProvider')
    }
    return ctx;
  }

export default useRegister;