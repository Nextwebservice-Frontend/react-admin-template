import { Editor } from "@tinymce/tinymce-react"

const TinyMCE = () => {
    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }
    return (
        <div className="pt-5 dark:tinymce" id="tinymce" >
            <Editor
                apiKey={import.meta.env.VITE_TINYMCE_KEY ? import.meta.env.VITE_TINYMCE_KEY : 'please add your api key'}
                initialValue="<p>This is tinymce editor</p>"
                init={{
                    selector:'textarea',
                    skin: "oxide-dark",
                    content_css: "dark",
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
                onChange={handleEditorChange}
            />
        </div>
    )
}
export default TinyMCE