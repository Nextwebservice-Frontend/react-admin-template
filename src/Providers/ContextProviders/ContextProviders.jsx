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
    const [showNotificationPopUp, setshowNotificationPopUp] = useState(false);
    const [showThemePopUp, setshowThemePopUp] = useState(false);
    const [showLanguagePopUp, setshowLanguagePopUp] = useState(false);
    //searchOption Open
    const [showSearchOption, setshowSearchOption] = useState(false);
    // context data
    const sharedData = {
        //open sideber in tab or mobile
        setShow,
        show,
        //show and hide text in large device
        setShowText,
        showText,
        // open sideber accordion menu
        setOpenAccordion,
        openAccordion,
        //open profile popup in navber
        showProfiePopUp,
        setShowprofilePopUp,
        //open Sortcut popup in navber
        showSortcutPopUp,
        setshowSortcutPopUp,
        //mouse enter in sideber
        mouseEnterInSIderber,
        setmouseEnterInSIderber,
        //open notification popup in navber
        showNotificationPopUp,
        setshowNotificationPopUp,
        //open theme popup in navber
        showThemePopUp,
        setshowThemePopUp,
        //open language changer popup
        showLanguagePopUp, 
        setshowLanguagePopUp,
        //search option open
        showSearchOption, 
        setshowSearchOption
    }
    return (
        <ContextData.Provider value={sharedData}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProviders
