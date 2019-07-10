import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { colorPallete, rem } from '../../style';

const Modal = (props) => {
    const {
        handleClose, children 
    } = props;
  
    return (
      <ModalWrapper {...props}>
        <ModalMain className="modal-main">
            
            <StyledIcon onClick={handleClose} icon={faWindowClose} />
            
            {children}
        </ModalMain>
      </ModalWrapper>
    );
  };

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${colorPallete.white};
    border: ${rem(1)} solid ${colorPallete.primary};
    border-radius: ${rem(3)};
    cursor: pointer;
    font-size: ${rem(40)};
    position: absolute;
    top: 0;
    right: ${rem(-50)};
`;

const ModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.1);
    display: ${({ show }) => show ? 'block' : 'none'};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
`;

const ModalMain = styled.div`
    align-items: center;
    display: flex;
    border-radius: ${rem(3)};
    background: ${colorPallete.white};
    height: auto;
    justify-content: center;
    min-height: ${rem(490)};
    padding: ${rem(32)} ${rem(16)};
    top: 50%;
    left: 50%;
    position:fixed;
    transform: translate(-50%,-50%);
    width: 80%;

`;

export default Modal;