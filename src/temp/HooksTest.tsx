import React from 'react';
import { useTeleport } from '../hooks/useTeleport';
import {
  ActionSheet,
  Button,
  Dialog,
  FlexBox,
  FlexBoxDirection,
  Label,
  MessageBox,
  Popover,
  PopoverPlacementType,
  ResponsivePopover,
  Title,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { useDialog } from '../hooks/useDialog';
import { usePopover } from '../hooks/usePopver';

export const HooksTest = () => {
  const {
    openPopver,
    closePopover,
    isOpen,
    Teleport,
    popoverRef,
  } = useTeleport();

  const {
    openPopver: openActionSheet,
    closePopover: closeActionSheet,
    isOpen: isActionsheetOpen,
    Teleport: ActionSheetPortal,
    popoverRef: ActionSheetRef,
  } = useTeleport();

  const {
    isOpen: msgOpen,
    openTeleport,
    closeTeleport,
    Teleport: MessageBoxPort,
  } = useTeleport();

  const { ref, openDialog, closeDialog } = useDialog();
  const { ref: ppref, openPopover: opnpp, closePopover: clpp } = usePopover();

  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <FlexBox fitContainer direction={FlexBoxDirection.Column}>
        <FlexBox>
          <Button onClick={(e) => openPopver(e.target)}>open Responsive</Button>
        </FlexBox>
        <FlexBox>
          <Button style={{ marginTop: '1rem' }} onClick={openTeleport}>
            open MessageBox
          </Button>
        </FlexBox>
        <FlexBox>
          <Button style={{ marginTop: '1rem' }} onClick={openDialog}>
            Open Dialog
          </Button>
        </FlexBox>
        <FlexBox>
          <Button
            style={{ marginTop: '1rem' }}
            onClick={(e) => opnpp(e.target)}
          >
            Open Popover
          </Button>
        </FlexBox>
        <FlexBox>
          <Button
            style={{ marginTop: '1rem' }}
            onClick={(e) => openActionSheet(e.target)}
          >
            Open Actionsheet
          </Button>
        </FlexBox>
      </FlexBox>
      {isOpen && (
        <Teleport>
          <ResponsivePopover
            placementType={PopoverPlacementType.Bottom}
            ref={popoverRef}
            onAfterClose={closePopover}
          >
            <Button>Option One</Button>
            <Button>Option Two</Button>
            <Button>Option Three</Button>
          </ResponsivePopover>
        </Teleport>
      )}
      {msgOpen && (
        <MessageBoxPort>
          <MessageBox open={msgOpen} onClose={closeTeleport}>
            <Title> Appuram Sollave Illa</Title>
          </MessageBox>
        </MessageBoxPort>
      )}
      <Dialog ref={ref}>
        <Title style={{ cursor: 'pointer' }} onClick={closeDialog}>
          Haiyo Haiyo
        </Title>
      </Dialog>
      <Popover ref={ppref} onAfterClose={clpp}>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
          <Label>Test popover using hooks</Label>
        </FlexBox>
      </Popover>
      {isActionsheetOpen && (
        <ActionSheetPortal>
          <ActionSheet
            headerText="ActionSheet Header"
            ref={ActionSheetRef}
            onAfterClose={closeActionSheet}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Label>Test ActionSheet using hooks</Label>
              <Label>Test ActionSheet using hooks</Label>
              <Label>Test ActionSheet using hooks</Label>
            </FlexBox>
          </ActionSheet>
        </ActionSheetPortal>
      )}
    </div>
  );
};
