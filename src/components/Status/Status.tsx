import { styled, keyframes } from "styled-components"
import { statusProps } from "types/appTypes"
import { SavingIcon } from "icons/SavingIcon"
import { EditingIcon } from "icons/EditingIcon"
import { SavedIcon } from "icons/SavedIcon"

type StatusIconProps = {
  status: statusProps
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
