import { FileProps } from "types/appTypes"

export const inactivateFiles = (files: FileProps[]) =>
  files.map((file) => ({ ...file, active: false }))

export const activateClickedFile = (fileId: string, files: FileProps[]) => {
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
