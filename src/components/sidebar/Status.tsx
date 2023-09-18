import { styled, keyframes } from "styled-components"
import { StatusProps } from "types/appTypes"
import { EditingIcon, SavingIcon, SavedIcon } from "icons"

type StatusIconProps = {
  status: StatusProps
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const Icon = {
    editing: EditingIcon,
    saving: Saving,
    saved: SavedIcon,
  }[status]

  return <Icon />
}

const Rotation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`

const Saving = styled(SavingIcon)`
  animation: ${Rotation} 600ms linear infinite;
`
