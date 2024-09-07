import { useState } from "react";
import { Button, Modal } from "rsuite";
import Input from "./Input";

export default function ModalBox({ btnTitle, handleSubmit }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFormData({ title: "", description: "", date: "", location: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {btnTitle}
      </button>

      <Modal open={open} onClose={handleClose} className="custom-modal">
        <Modal.Header>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>

        <Modal.Body className="flex-1 h-auto overflow-auto">
          <form onSubmit={onSubmit}>
            <div className="flex gap-4 flex-col">
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <Input
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
              />

              <Input
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" onClick={onSubmit} appearance="primary">
            Create
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
