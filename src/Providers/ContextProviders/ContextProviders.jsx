import { createContext, useState } from 'react'
//create context
export const ContextData = createContext({})
const ContextProviders = ({ children }) => {
    //states
    //show sideber in mobile menu
    const [show, setShow] = useState(false)
    //show sideber text
    const [showText, setShowText] = useState(true)
    //mouse enter In sideber 
    const [mouseEnterInSIderber, setmouseEnterInSIderber] = useState(false)
    //current accordion status and previous accordion status
    const [openAccordion, setOpenAccordion] = useState({ name: false, show: false, prev: false, prevOpen: false })

    //navber  popUps
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
        setshowSortcutPopUp,
        mouseEnterInSIderber, 
        setmouseEnterInSIderber
    }
    return (
        <ContextData.Provider value={sharedData}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProviders
