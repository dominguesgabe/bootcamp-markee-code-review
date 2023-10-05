import { FileTextIcon } from "icons/FileTextIcon"
import { ListingFileItem } from "./Styles"
import { FileItemProps } from "types/appTypes"
import { StatusIcon } from "components"
import { MouseEvent } from "react"

export const FileItem = ({
  file,
  switchActiveFile,
  handleRemoveFile,
}: FileItemProps) => {
  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    switchActiveFile(file.id)
  }

  return (
    <ListingFileItem.Root active={file.active}>
      <ListingFileItem.Link onClick={handleItemClick} active={file.active}>
        <FileTextIcon />
        {file.name}
      </ListingFileItem.Link>
      {file.active && <StatusIcon status={file.status} />}
      <ListingFileItem.RemoveButton
        onClick={() => handleRemoveFile(file.id)}
        title={`remover o arquivo ${file.name}`}
      />
    </ListingFileItem.Root>
  )
}
