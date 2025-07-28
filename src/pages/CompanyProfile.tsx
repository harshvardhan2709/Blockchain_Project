import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Important for accessibility

const CompanyProfile = () => {
  const [company, setCompany] = useState({
    name: '',
    regNumber: '',
    country: '',
    year: '',
    employeeCount: '',
    stockExchange: '',
    website: '',
    nicCode: '',
    corpOffice: '',
    fiscalYear: '',
    listedYear: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!company.name || !company.regNumber) {
      return 'Company Name and Registration Number are required';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      setIsModalOpen(true);
      return;
    }

    // All validations passed — log the data object
    console.log("✅ Submitted Company Profile:", company);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <div>
            <button className="bg-green-700 text-white px-4 py-2 rounded mr-4">Company Profile</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Admin Dashboard</button>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded">Upload New Logo</button>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 bg-white p-6 rounded shadow">
          {Object.entries(company).map(([key, value]) => (
            <input
              key={key}
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              value={value}
              onChange={handleChange}
              className="p-2 border rounded"
              type={key.toLowerCase().includes('year') || key.toLowerCase().includes('count') ? 'number' : 'text'}
            />
          ))}
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Update Changes
            </button>
          </div>
        </form>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Validation Error"
          className="bg-white p-6 max-w-md mx-auto mt-40 rounded shadow"
          overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start"
        >
          <h2 className="text-xl font-bold text-red-600 mb-4">Validation Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-6 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Close
          </button>
        </Modal>
      </main>
    </div>
  );
};

export default CompanyProfile;
