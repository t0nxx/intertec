import React, { Component } from "react";
import NameChangeForm from "./name-change-form";
import "./index.scss";
import leftArrow from "../../../assets/previewInfoArrowIcon.svg";
import { Image } from "react-bootstrap";
import { PreviewInformation } from "./index";
import AttachmentFile from "./attachment-file/attachment-file";
import PreviewScreenComponent from "./initial-preview-step/PreviewScreenComponent";

const INITIAL_INFORMATION_SCREEN = "INITIAL_INFORMATION_SCREEN";
const CHANGE_NAME_FORM_SCREEN = "CHANGE_NAME_FORM_SCREEN";
const ATTACHMENT_SCREEN = "ATTACHMENT_SCREEN";
const PREVIEW_SCREEN = "PREVIEW_SCREEN";
const SUCCESS_SCREEN = "SUCCESS_SCREEN";

/**
 * This will be container for ChangeNameOfPharmaceuticalEstablishment Service
 */
class ChangeNameOfPharmaceuticalEstablishment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNameChange: true,
      isBackVisible: true,
      activeComponent: CHANGE_NAME_FORM_SCREEN,
      initialInfo: false,
      changeName: true,
      attachmentStep: false,
      previewStep: false,
      isSuccessScreen: false,
      nameChangeFormData: {},
      attachmentFormData: {},
    };
  }

  /**
   * This will handle name change success
   */
  handleNameChangeFormSuccess = (nameChangeFormData) => {
    this.setState(
      {
        activeComponent: ATTACHMENT_SCREEN,
      },
      () => this.handleActiveComponent()
    );
    this.setState({ nameChangeFormData });
  };

  /**
   * This will handle attachment success
   */
  handleAttachmentSuccess = (attachmentFormData) => {
    this.setState(
      {
        activeComponent: PREVIEW_SCREEN,
      },
      () => this.handleActiveComponent()
    );
    this.setState({ attachmentFormData });
  };

  handleOnlyAttachments = (attachmentFormData) => {
    this.setState({ attachmentFormData });
  };

  handlePreviewSuccess = () => {
    this.setState(
      {
        activeComponent: SUCCESS_SCREEN,
      },
      () => this.handleActiveComponent()
    );
  };

  handleApprovalAttachmentSuccess = () => {
    this.setState(
      {
        activeComponent: SUCCESS_SCREEN,
      },
      () => this.handleActiveComponent()
    );
  };

  /**
   * This will handle active component
   */
  handleActiveComponent = () => {
    const { activeComponent } = this.state;
    let updateState = {
      initialInfo: false,
      changeName: false,
      attachmentStep: false,
      previewStep: false,
      isBackVisible: false,
      isSuccessScreen: false,
    };
    if (activeComponent === INITIAL_INFORMATION_SCREEN) {
      updateState = {
        ...updateState,
        initialInfo: true,
      };
      // this.props.progressAction({ progress: 5 });
    } else if (activeComponent === CHANGE_NAME_FORM_SCREEN) {
      updateState = {
        ...updateState,
        changeName: true,
        isBackVisible: true,
      };
      setTimeout(() => {
        // this.props.progressAction({ progress: 45 });
      }, 600);
    } else if (activeComponent === ATTACHMENT_SCREEN) {
      updateState = {
        ...updateState,
        attachmentStep: true,
        isBackVisible: true,
      };
      // this.props.progressAction({ progress: 65 });
    } else if (activeComponent === PREVIEW_SCREEN) {
      updateState = {
        ...updateState,
        previewStep: true,
        isBackVisible: true,
      };
      // this.props.progressAction({ progress: 95 });
    } else if (activeComponent === SUCCESS_SCREEN) {
      updateState = {
        ...updateState,
        isBackVisible: false,
        isSuccessScreen: true,
      };
    }
    this.setState({ ...updateState });
  };

  handleInitialPreviewSuccess = () => {
    this.setState(
      {
        activeComponent: CHANGE_NAME_FORM_SCREEN,
      },
      () => this.handleActiveComponent()
    );
  };

  handlePreviousClick = () => {
    const { changeName, attachmentStep, previewStep } = this.state;
    let activeComponent = CHANGE_NAME_FORM_SCREEN;
    if (changeName === true) {
      activeComponent = INITIAL_INFORMATION_SCREEN;
    } else if (attachmentStep === true) {
      activeComponent = CHANGE_NAME_FORM_SCREEN;
    } else if (previewStep === true) {
      activeComponent = ATTACHMENT_SCREEN;
    }
    this.setState(
      {
        activeComponent,
      },
      () => this.handleActiveComponent()
    );
  };

  render() {
    const {
      isBackVisible,
      initialInfo,
      changeName,
      attachmentStep,
      previewStep,
      isSuccessScreen,
      nameChangeFormData,
      attachmentFormData,
    } = this.state;
    return (
      <React.Fragment>
        {initialInfo && (
          <PreviewInformation
            handlePreviewSuccess={this.handleInitialPreviewSuccess}
          />
        )}
        {changeName && (
          <NameChangeForm
            handleNameChangeFormSuccess={this.handleNameChangeFormSuccess}
            nameChangeFormData={nameChangeFormData}
          />
        )}
        {attachmentStep && (
          <AttachmentFile
            handleAttachmentSuccess={this.handleAttachmentSuccess}
            attachmentFormData={attachmentFormData}
            handleOnlyAttachments={this.handleOnlyAttachments}
          />
        )}
        {previewStep && (
          <PreviewScreenComponent
            nameChangeFormData={nameChangeFormData}
            attachmentFormData={attachmentFormData}
            handleOnlyAttachments={this.handleOnlyAttachments}
            handlePreviewSuccess={this.handlePreviewSuccess}
          />
        )}
        {isBackVisible && (
          <div className={"left-icon-holder"}>
            <Image
              src={leftArrow}
              className="ml-3 mr-4"
              onClick={() => this.handlePreviousClick()}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ChangeNameOfPharmaceuticalEstablishment;
