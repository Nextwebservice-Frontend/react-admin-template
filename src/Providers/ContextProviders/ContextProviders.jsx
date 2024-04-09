import { createContext, useState } from 'react'
//create context
export const ContextData = createContext({})
const ContextProviders = ({ children }) => {
    //states
    const [show, setShow] = useState(false)
    const [showText, setShowText] = useState(true)
    const [openAccordion,setOpenAccordion]=useState({name:false,show:false})
    // context data
    const sharedData = {
        setShow,
        show,
        setShowText,
        showText,
        setOpenAccordion,
        openAccordion
    }
    return (
        <ContextData.Provider value={sharedData}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProviders
