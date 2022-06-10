import React, { ReactElement } from "react";
import styled from "styled-components";
import ModalTemplate from "components/ModalTemplate";

interface ErrorModalProps {
  isModal: boolean;
  onToggleModal: () => void;
  onClick: () => void;
}

function ErrorModal({
  isModal,
  onToggleModal,
  onClick,
}: ErrorModalProps): ReactElement {
  return (
    <ModalTemplate
      width={328}
      height={100}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <ErrorModalInner>
        <ModalText>test</ModalText>
        <ModalButtonGroups>
          <StyledBtn onClick={onToggleModal}>취소</StyledBtn>
        </ModalButtonGroups>
      </ErrorModalInner>
    </ModalTemplate>
  );
}

const ErrorModalInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
  font-size: 12px;
`;

const ModalText = styled.span`
  display: flex;
  flex: 1 auto;
  align-items: center;
  justify-content: center;
`;

const ModalButtonGroups = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin-right: 10px;
  }
`;

const StyledBtn = styled.button`
  border-radius: 10px;
  width: 65px;
  height: 25px;
  background-color: #3e403f;
  color: white;
`;

export default ErrorModal;
