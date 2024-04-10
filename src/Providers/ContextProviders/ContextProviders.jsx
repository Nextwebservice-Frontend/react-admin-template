import { createContext, useState } from 'react'
//create context
export const ContextData = createContext({})
const ContextProviders = ({ children }) => {
    //states
    const [show, setShow] = useState(false)
    const [showText, setShowText] = useState(true)
    const [openAccordion,setOpenAccordion]=useState({name:false,show:false,prev:false,prevOpen:false})
    const [showProfiePopUp, setShowprofilePopUp] = useState(false);
  const [showSortcutPopUp, setshowSortcutPopUp] = useState(false);
    // context data
    const sharedData = {
        setShow,
        show,
        setShowText,
        showText,
        setOpenAccordion,
        openAccordion,
        showProfiePopUp,
        setShowprofilePopUp,
        showSortcutPopUp,
        setshowSortcutPopUp
    }
    return (
        <ContextData.Provider value={sharedData}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProviders
