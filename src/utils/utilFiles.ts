import { fileProps } from "types/appTypes"

export const inactivateFiles = (files: fileProps[]) =>
  files.map((file) => ({ ...file, active: false }))

export const activateClickedFile = (fileId: string, files: fileProps[]) => {
  return files.map((file) => {
    if (file.id === fileId) {
      return {
        ...file,
        active: true,
      }
    } else {
      return {
        ...file,
        active: false,
        status: "saved",
      }
    }
  })
}
