import { Ui5PopoverDomRef } from "@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef"
import { useRef } from "react"

export function usePopover() {
  const popoverRef = useRef<Ui5PopoverDomRef>(null)

  const openPopover = (
    opener: HTMLElement | EventTarget,
    preventInitialFocus?: boolean
  ): void => {
    popoverRef.current?.showAt(opener, preventInitialFocus)
  }

  const closePopover = (): void => {
    popoverRef.current?.close()
  }

  return {
    ref: popoverRef,
    openPopover,
    closePopover,
  }
}
