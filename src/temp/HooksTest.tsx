import React from 'react';
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

import { useTeleport } from '../hooks/useTeleport';

export const HooksTest = () => {
  const DialogHooks = useTeleport();
  const ActionSheetHooks = useTeleport();
  const ResponsivePopoverHooks = useTeleport();
  const MessageBoxHooks = useTeleport();
  const PopoverHooks = useTeleport();

  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <FlexBox>
        <Button
          onClick={MessageBoxHooks.openDialog}
          style={{ marginTop: '1rem' }}
        >
          Open MessageBox
        </Button>
      </FlexBox>
      <FlexBox>
        <Button
          style={{ marginTop: '1rem' }}
          onClick={e => ActionSheetHooks.openPopover(e.target)}
        >
          Open Actionsheet
        </Button>
      </FlexBox>
      <FlexBox>
        <Button
          style={{ marginTop: '1rem' }}
          onClick={e => ResponsivePopoverHooks.openPopover(e.target)}
        >
          open Responsive Popover
        </Button>
      </FlexBox>
      <FlexBox>
        <Button style={{ marginTop: '1rem' }} onClick={DialogHooks.openDialog}>
          open Dialog Box
        </Button>
      </FlexBox>
      <FlexBox>
        <Button
          style={{ marginTop: '1rem' }}
          onClick={e => PopoverHooks.openPopover(e.target)}
        >
          Open Popover
        </Button>
      </FlexBox>

      {PopoverHooks.isOpen && (
        <PopoverHooks.Teleport>
          <Popover
            ref={PopoverHooks.popoverRef}
            onAfterClose={PopoverHooks.close}
          >
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
        </PopoverHooks.Teleport>
      )}

      {ActionSheetHooks.isOpen && (
        <ActionSheetHooks.Teleport>
          <ActionSheet
            headerText="ActionSheet Header"
            ref={ActionSheetHooks.popoverRef}
            onAfterClose={ActionSheetHooks.close}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Label>Test ActionSheet using hooks</Label>
              <Label>Test ActionSheet using hooks</Label>
              <Label>Test ActionSheet using hooks</Label>
            </FlexBox>
          </ActionSheet>
        </ActionSheetHooks.Teleport>
      )}
      {MessageBoxHooks.isOpen && (
        <MessageBoxHooks.Teleport>
          <MessageBox
            stretch
            ref={MessageBoxHooks.dialogRef}
            open={MessageBoxHooks.isOpen}
            onClose={MessageBoxHooks.close}
          >
            <Title> Appuram Sollave Illa</Title>
          </MessageBox>
        </MessageBoxHooks.Teleport>
      )}
      {ResponsivePopoverHooks.isOpen && (
        <ResponsivePopoverHooks.Teleport>
          <ResponsivePopover
            placementType={PopoverPlacementType.Bottom}
            ref={ResponsivePopoverHooks.popoverRef}
            onAfterClose={ResponsivePopoverHooks.close}
          >
            <Button>Option One</Button>
            <Button>Option Two</Button>
            <Button>Option Three</Button>
          </ResponsivePopover>
        </ResponsivePopoverHooks.Teleport>
      )}

      {DialogHooks.isOpen && (
        <DialogHooks.Teleport>
          <Dialog ref={DialogHooks.dialogRef}>
            <Title>Dialog Title Message</Title>
            <Button style={{ marginTop: '1rem' }} onClick={DialogHooks.close}>
              Close Dialog
            </Button>
          </Dialog>
        </DialogHooks.Teleport>
      )}
    </div>
  );
};
