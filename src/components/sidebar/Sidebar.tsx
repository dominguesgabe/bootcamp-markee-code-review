import { AddFileButton } from "Styles"
import { FileItem } from "../FileItem"
import {
  Divider,
  DividerName,
  FilesListingWrapper,
  MainLogoBox,
  SidebarWrapper,
} from "./Styles"
import { sideBarProps } from "types/appTypes"
import { AddFileIcon } from "icons/AddFileIcon"

export const Sidebar = ({
  files,
  inputRef,
  switchActiveFile,
  onAddFile: handleAddFile,
  onRemoveFile: handleRemoveFile,
}: sideBarProps) => {
  return (
    <SidebarWrapper>
      <MainLogoBox>
        <img src="/main-logo.png" alt="app logo" />
      </MainLogoBox>
      <Divider>
        <DividerName>Arquivos</DividerName>
      </Divider>
      <AddFileButton onClick={handleAddFile}>
        <AddFileIcon />
        Adicionar
      </AddFileButton>
      <FilesListingWrapper>
        {files.map((file) => (
          <FileItem
            key={file.id}
            file={file}
            switchActiveFile={switchActiveFile}
            handleRemoveFile={handleRemoveFile}
            inputRef={inputRef}
          />
        ))}
      </FilesListingWrapper>
    </SidebarWrapper>
  )
}
