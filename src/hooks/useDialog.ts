import { Ui5DialogDomRef } from "@ui5/webcomponents-react/interfaces/Ui5DialogDomRef"
import { useRef } from "react"

export function useDialog() {
  const dialogRef = useRef<Ui5DialogDomRef>(null)

  const openDialog = (): void => {
    dialogRef.current?.show()
  }

  const closeDialog = (): void => {
    dialogRef.current?.close()
  }

  return {
    ref: dialogRef,
    openDialog,
    closeDialog,
  }
}
