import { Editor } from "@tinymce/tinymce-react"
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { useContext, useEffect, useMemo, useState } from "react";
const TinyMCE = () => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const {
        theme
    } = useContext(ContextData)
    const [currentTheme, setCurrentTheme] = useState(darkModeQuery.matches ? 'dark' : 'light')
    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }
    useEffect(() => {
        if (localStorage.theme === 'dark' || darkModeQuery.matches) {
            setCurrentTheme('dark')
        } else {
            setCurrentTheme('light')
        }
    }, [theme])
    const tinynce = useMemo(() => {
        return (
            <div className="pt-5 dark:tinymce" >
                <Editor
                    apiKey={import.meta.env.VITE_TINYMCE_KEY ? import.meta.env.VITE_TINYMCE_KEY : 'please add your api key'}
                    initialValue="<p>This is tinymce editor</p>"
                    init={{
                        selector: 'textarea',
                        skin: `${currentTheme === 'dark' ? 'oxide-dark' : 'oxide'}`,
                        content_css: `${currentTheme === 'dark' ? "dark" : "light"}`,
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                    onChange={handleEditorChange}
                />
            </div>
        )
    }, [currentTheme])
    return tinynce
}
export default TinyMCE