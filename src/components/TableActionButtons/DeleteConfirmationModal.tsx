import React from "react";

interface DeleteConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
  facultyName: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  show,
  onClose,
  onDelete,
  facultyName,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p>
          Are you sure you want to delete {facultyName}? This action cannot be
          undone.
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-200 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
