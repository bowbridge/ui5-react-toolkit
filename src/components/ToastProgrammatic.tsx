import React from 'react';
import { createRoot } from 'react-dom/client';
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

  createRoot(containerDomNode).render(
    <ToastContainer
      duration={duration}
      placement={placement}
      type={type}
      onEnd={removeElementFromBody}
    >
      {message}
    </ToastContainer>
  );
};

export default dispatchToast;
