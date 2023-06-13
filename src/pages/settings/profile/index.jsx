import { useState } from 'react';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(true);

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null; // Return null if the modal is closed
  }

  return (
    <div className="modal">
      {/* Modal content */}
      <h2>Modal Page</h2>
      <p>This is the content of the modal.</p>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default ModalPage;