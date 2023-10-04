import { styled, css } from "styled-components"
import { RemoveFileIcon } from "icons/RemoveFileIcon"
import { FileStyleProps, LinkProps } from "types/appTypes"

const RemoveButton = styled(RemoveFileIcon)<any>`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.white};
    height: fit-content;
    transition-duration: 0.2s;

    display: none;
  `}
`
const Root = styled.li<FileStyleProps>`
  ${({ active, theme }) => css`
    width: 100%;
    height: 42px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    transition-duration: 0.2s;
    cursor: pointer;

    border: 0;
    border-radius: 4px;

    ${active &&
    css`
      background-color: ${theme.colors.hoverColor};
    `}

    &:hover {
      background-color: ${theme.colors.hoverColor};

      ${!active && RemoveButton} {
        display: block;
      }
    }
  `}
`

const Link = styled.a<LinkProps>`
  ${({ theme, active }) => css`
    font-size: 16px;
    color: ${theme.colors.gray};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;

    ${active &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.hoverColor};

      svg {
        color: ${theme.colors.primary};
      }
    `}

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`

export const ListingFileItem = {
  RemoveButton,
  Root,
  Link,
}
