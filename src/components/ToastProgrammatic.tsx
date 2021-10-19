import React from 'react';
import { render } from 'react-dom';
import { ToastPlacement } from '@ui5/webcomponents-react';
import { ToastContainer, ToastDisplayType } from '../containers/ToastContainer';

const dispatchToast = (
  message: string,
  type: ToastDisplayType = 'INFO',
  duration?: number,
  placement: ToastPlacement = ToastPlacement.BottomEnd
): void => {
  let containerDomNode = document.createElement('div');
  let containerId = `toast-${Math.floor(Math.random() * 1000)}`;
  containerDomNode.id = containerId;
  document.body.appendChild(containerDomNode);

  const removeElementFromBody = () => {
    let element = document.getElementById(containerId);
    if (element) document.body.removeChild(element);
  };

  render(
    <ToastContainer
      duration={duration}
      placement={placement}
      type={type}
      onEnd={removeElementFromBody}
    >
      {message}
    </ToastContainer>,
    containerDomNode
  );
};

export default dispatchToast;
