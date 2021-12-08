//import { Ui5DialogDomRef } from '@ui5/webcomponents-react/interfaces/Ui5DialogDomRef';
// import { Ui5PopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef';

import { DialogDomRef as Ui5DialogDomRef } from '@ui5/webcomponents-react/webComponents/Dialog';
import { PopoverDomRef as Ui5PopoverDomRef } from '@ui5/webcomponents-react/webComponents/Popover';

import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal, findDOMNode } from 'react-dom';

type HTMLElRef = MutableRefObject<HTMLElement>;

export type UseTeleportOptions = {
  appendTo?: HTMLElement;
  isOpen?: boolean;
};

export function useTeleport({
  appendTo,
  isOpen: defaultIsOpen = false,
}: UseTeleportOptions = {}) {
  const portal = useRef(document.createElement('div')) as HTMLElRef;

  const popoverRef = useRef<Ui5PopoverDomRef>(null);
  const dialogRef = useRef<Ui5DialogDomRef>(null);

  const [isOpen, makeOpen] = useState(defaultIsOpen);
  const open = useRef(isOpen);

  const setOpen = useCallback((v: boolean) => {
    open.current = v;
    makeOpen(v);
  }, []);

  useEffect(() => {
    if (!portal.current) portal.current = document.createElement('div');
  }, [portal]);

  const elToMountTo = useMemo(() => {
    return (appendTo && findDOMNode(appendTo)) || document.body;
  }, [appendTo]);

  const openTeleport = useCallback(() => {
    setTimeout(() => {
      setOpen(true);
    }, 0);
  }, [setOpen]);

  const closeTeleport = useCallback(() => {
    if (open.current) setOpen(false);
  }, [setOpen]);

  const openPopover = (opener: HTMLElement | EventTarget): void => {
    openTeleport();
    setTimeout(() => {
      popoverRef.current?.showAt(opener);
    }, 0);
  };

  const openDialog = (): void => {
    openTeleport();
    setTimeout(() => {
      dialogRef.current?.show();
    }, 0);
  };

  useEffect(() => {
    if (
      !(elToMountTo instanceof HTMLElement) ||
      !(portal.current instanceof HTMLElement)
    )
      return;

    const node = portal.current;
    elToMountTo.appendChild(portal.current);

    return () => {
      elToMountTo.removeChild(node);
    };
  }, [elToMountTo]);

  const Teleport = useCallback(
    ({ children }: { children: ReactNode }) => {
      if (portal.current != null) return createPortal(children, portal.current);
      return null;
    },
    [portal]
  );

  const commonObjects = {
    isOpen: open.current,
    close: closeTeleport,
    Teleport,
  };

  return {
    ...commonObjects,
    popoverRef,
    dialogRef,
    openPopover,
    openDialog,
  };
}
