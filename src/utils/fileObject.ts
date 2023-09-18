import { StatusProps } from "types/appTypes"
import { v4 as uuidv4 } from "uuid"

export class FileObject {
  public id: string = uuidv4()
  public name = "Sem título"
  public active = true
  public content = ""
  public status: StatusProps = "saved"
}
