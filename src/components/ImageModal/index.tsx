import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import ProfilePicture from "../ProfilePicture";
import LikeButton from "../LikeButton";

import { Photo } from "../../schemas/photo";

import "./style.css";

interface Props {
  show: boolean;
  onHide: () => void;
  data?: Photo;
}

const ImageModal = ({ show, onHide, data }: Props) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen
      centered
      contentClassName="image-modal-content"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="contained-modal-title-vcenter">
          <ProfilePicture name={data?.user.name || ""} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="image-modal-body">
        <div className="position-relative">
          <Image src={data?.urls.regular} className="image-modal-img" />
          <LikeButton
            className="modal-content-action box-shadow"
            variant="circle"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
