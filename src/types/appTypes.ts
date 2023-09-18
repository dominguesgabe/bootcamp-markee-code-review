import {
  ReactNode,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react"

export type statusProps = "editing" | "saving" | "saved"

export type fileProps = {
  id: string
  name: string
  content: string
  active: boolean
  status: statusProps
}

export type MainContentProps = {
  files: fileProps[]
  inputRef: RefObject<HTMLInputElement>
  onUpdateFileName: (id: string, newName: string) => void
  onUpdateFileContent: (id: string, newName: string) => void
}

export type sideBarProps = {
  files: fileProps[]
  inputRef: RefObject<HTMLInputElement>
  setFiles: Dispatch<SetStateAction<fileProps[]>>
  onAddFile: () => void
  switchActiveFile: (id: string) => void
  onRemoveFile: (id: string) => void
}

export type editingAreaProps = {
  file: fileProps
}

export type fileItemProps = {
  file: fileProps
  inputRef: RefObject<HTMLInputElement>
  switchActiveFile: (id: string) => void
  handleRemoveFile: (id: string) => void
}

export type genericProps = {
  children: ReactNode
}

export type linkProps = {
  onClick: (event: any) => void
  active: boolean
}

export type fileStyleProps = genericProps & {
  active: boolean
}

export type DividerNameProps = {
  children: string
}

export type OutputAreaProps = {
  file: fileProps
}

export type editingFileNameProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
