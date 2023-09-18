import { fileProps } from "types/appTypes"
import localforage from "localforage"
import { Dispatch, SetStateAction } from "react"
import { FileObject } from "./fileObject"

export const getStoredFiles = async (
  setFiles: Dispatch<SetStateAction<fileProps[]>>,
) => {
  const storedFiles = await localforage.getItem<fileProps[]>("files")

  if (storedFiles) {
    setFiles(storedFiles)
  } else {
    const newFile = new FileObject()
    setFiles([newFile])
  }
}

export const storeFiles = async (files: fileProps[]) => {
  await localforage.setItem("files", files)
}
