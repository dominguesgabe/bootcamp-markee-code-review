import { Sidebar } from "components/sidebar/index"
import { MainContent } from "components/MainContent/MainContent"
import { useFiles } from "utils/useFiles"
import { AppWrapper } from "components/appStyles"

export function App() {
  const {
    files,
    setFiles,
    handleAddFile,
    handleRemoveFile,
    switchActiveFile,
    handleUpdateFileName,
    handleUpdateFileContent,
    inputRef,
  } = useFiles()

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        setFiles={setFiles}
        inputRef={inputRef}
        onAddFile={handleAddFile}
        onRemoveFile={handleRemoveFile}
        switchActiveFile={switchActiveFile}
      />
      <MainContent
        files={files}
        inputRef={inputRef}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
      />
    </AppWrapper>
  )
}
