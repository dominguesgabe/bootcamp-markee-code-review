import { StatusProps } from 'types/appTypes'
import { v4 as uuidv4 } from 'uuid'

export class FileObject {
  public id: string = uuidv4()
  public name: string = 'Sem título'
  public active: boolean = true
  public content: string = ''
  public status: StatusProps = 'saved'
}
