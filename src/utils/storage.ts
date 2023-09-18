import { FileProps } from "types/appTypes"
import localforage from "localforage"
import { Dispatch, SetStateAction } from "react"
import { FileObject } from "./fileObject"

export const getStoredFiles = async (
  setFiles: Dispatch<SetStateAction<FileProps[]>>,
) => {
  const storedFiles = await localforage.getItem<FileProps[]>("files")

  if (storedFiles) {
    setFiles(storedFiles)
  } else {
    const newFile = new FileObject()
    setFiles([newFile])
  }
}

export const storeFiles = async (files: FileProps[]) => {
  await localforage.setItem("files", files)
}
