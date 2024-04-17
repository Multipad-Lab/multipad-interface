import { Editor } from "@tinymce/tinymce-react"
import { useRef } from "react"
import { VITE_TINYMCE_API_KEY } from "src/const/env"
import { AdminProjectFormType } from "src/types/adminProjectList"

const TextEditor = ({
  initValue,
  onChangeForm,
  height = 500
}: {
  initValue: string
  onChangeForm: ({
    field
  }: {
    field: keyof AdminProjectFormType
    value: AdminProjectFormType[keyof AdminProjectFormType]
  }) => void
  height?: number
}) => {
  const editorRef = useRef<any>(null)

  const log = () => {
    if (editorRef.current) {
      onChangeForm({ field: "fulltextInfoProject", value: editorRef.current.getContent() })
    }
  }

  const baseConfig = {
    width: "100%",
    height,
    resize: true,
    autosave_ask_before_unload: false,
    powerpaste_allow_local_images: true,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "code",
      "help",
      "wordcount"
    ],
    toolbar:
      "insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image",
    spellchecker_dialog: true,
    spellchecker_ignore_list: ["Ephox", "Moxiecode"],
    tinydrive_demo_files_url: "../_images/tiny-drive-demo/demo_files.json",
    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
    file_picker_types: "image",
    skin: "oxide-dark",
    content_css: "dark"
  }

  return (
    <Editor
      apiKey={VITE_TINYMCE_API_KEY}
      init={baseConfig}
      value={initValue}
      onInit={(_, editor) => (editorRef.current = editor)}
      onEditorChange={log}
    />
  )
}

export default TextEditor
