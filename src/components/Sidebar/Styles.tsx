import { styled, css } from "styled-components"
import { DividerNameProps, GenericProps } from "types/appTypes"

export const SidebarWrapper = styled.div<GenericProps>`
  ${({ theme }) => css`
    width: 18%;
    height: 100vh;
    padding: 45px 32px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    background: ${theme.colors.black};
  `}
`

export const DividerName = styled.p<DividerNameProps>`
  ${({ theme }) => css`
    margin: 0;
    z-index: 2;
    padding: 0 5px;
    position: relative;
    width: fit-content;
    font-weight: 500;
    background-color: ${theme.colors.black};
  `}
`

export const Divider = styled.div<GenericProps>`
  ${({ theme }) => css`
    width: 100%;
    padding-left: 20px;
    font-size: 16px;
    margin-top: 60px;
    color: ${theme.colors.white};
    font-family: "DM Sans", sans-serif;
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 2px;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 2px;
      margin: auto;
      position: absolute;
      background-color: ${theme.colors.primary};
      z-index: 0;
    }
  `}
`

export const MainLogoBox = styled.div<GenericProps>`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FilesListingWrapper = styled.ul<GenericProps>`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 38px;
    padding: 0;
    color: ${theme.colors.gray};
  `}
`
