import { createContext, useState } from 'react'
//create context
export const ContextData = createContext({})
const ContextProviders = ({ children }) => {
    //states
    const [show, setShow] = useState(false)
    const [showText, setShowText] = useState(true)
    // context data
    const sharedData = {
        setShow,
        show,
        setShowText,
        showText
    }
    return (
        <ContextData.Provider value={sharedData}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProviders
