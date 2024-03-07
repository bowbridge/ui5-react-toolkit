import React, { useRef, RefObject, useEffect, FC } from 'react';
import {
  Toast,
  ToastPropTypes,
  ToastDomRef as Ui5ToastDomRef,
} from '@ui5/webcomponents-react';
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Icon,
} from '@ui5/webcomponents-react';
import { ThemingParameters, spacing } from '@ui5/webcomponents-react-base';

export type ToastDisplayType = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';

interface ToastContainerProps extends ToastPropTypes {
  onEnd: () => void;
  type: ToastDisplayType;
}

const iconSize = {
  height: '1.5rem',
  width: '1.5rem',
};

const innerIconStyle = {
  error: {
    ...iconSize,
    color: ThemingParameters.sapNegativeColor,
  },
  success: {
    ...iconSize,
    color: ThemingParameters.sapPositiveColor,
  },
  warning: {
    ...iconSize,
    color: ThemingParameters.sapWarningColor,
  },
  info: {
    ...iconSize,
    color: ThemingParameters.sapInformationColor,
  },
};

export const ToastContainer: FC<ToastContainerProps> = ({
  onEnd,
  duration,
  children,
  placement,
  type,
}) => {
  const toastRefHandler = useRef<Ui5ToastDomRef>(null);

  let timerDuration: number;
  duration ? (timerDuration = duration + 500) : (timerDuration = 3500);

  setTimeout(() => {
    onEnd();
  }, timerDuration);

  const showToast = (refHandler: RefObject<Ui5ToastDomRef>): void => {
    refHandler.current?.show();
  };

  useEffect(() => {
    if (toastRefHandler) showToast(toastRefHandler);
  }, []);

  return (
    <>
      <Toast ref={toastRefHandler} placement={placement} duration={duration}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
          alignItems={FlexBoxAlignItems.Center}
        >
          <FlexBox style={spacing.sapUiSmallMarginEnd}>
            {type === 'SUCCESS' && (
              <Icon style={innerIconStyle.success} name="accept" />
            )}
            {type === 'ERROR' && (
              <Icon style={innerIconStyle.error} name="error" />
            )}
            {type === 'INFO' && (
              <Icon style={innerIconStyle.info} name="message-information" />
            )}
            {type === 'WARNING' && (
              <Icon style={innerIconStyle.warning} name="alert" />
            )}
          </FlexBox>
          <FlexBox>{children}</FlexBox>
        </FlexBox>
      </Toast>
    </>
  );
};
