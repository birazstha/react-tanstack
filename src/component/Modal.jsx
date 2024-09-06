import { useState } from "react";
import { Button, Modal, Placeholder } from "rsuite";
import Input from "./Input";

export default function ModalBox({ btnTitle }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {btnTitle}
      </button>

      <Modal open={open} onClose={handleClose} className="bg-gray-400">
        <Modal.Header>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="flex gap-4 flex-col">
              <Input name="title" />
              <Input name="description" />
              <Input name="date" type="date" />
              <Input name="location" />
              <Input name="location" />
            </div>
          </form>

          <Modal.Footer>
            <Button type="submit" appearance="primary">
              Create
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
