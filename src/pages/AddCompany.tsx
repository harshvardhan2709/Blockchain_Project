// src/pages/CompanyProfile.tsx - Removed upload logo button
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Building, MapPin, Calendar, Users } from 'lucide-react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddCompany = () => {
  const [company, setCompany] = useState({
    name: 'ClimCarbon Corp',
    regNumber: 'CC123456789',
    country: 'United States',
    year: '2020',
    employeeCount: '250',
    stockExchange: 'NASDAQ',
    website: 'https://climcarbon.com',
    nicCode: 'NIC001',
    corpOffice: '123 Green Street, San Francisco, CA',
    fiscalYear: '2024',
    listedYear: '2022',
  });

  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!company.name || !company.regNumber) {
      return 'Company Name and Registration Number are required';
    }
    if (company.website && !company.website.startsWith('http')) {
      return 'Website URL must start with http:// or https://';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      setIsModalOpen(true);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("✅ Updated Company Profile:", company);
    }, 1000);
  };

  const formFields = [
    { key: 'name', label: 'Company Name', icon: Building, required: true },
    { key: 'regNumber', label: 'Registration Number', icon: Building, required: true },
    { key: 'country', label: 'Country', icon: MapPin },
    { key: 'year', label: 'Founded Year', icon: Calendar, type: 'number' },
    { key: 'employeeCount', label: 'Employee Count', icon: Users, type: 'number' },
    { key: 'stockExchange', label: 'Stock Exchange', icon: Building },
    { key: 'website', label: 'Website', icon: Building, type: 'url' },
    { key: 'nicCode', label: 'NIC Code', icon: Building },
    { key: 'corpOffice', label: 'Corporate Office', icon: MapPin },
    { key: 'fiscalYear', label: 'Fiscal Year', icon: Calendar, type: 'number' },
    { key: 'listedYear', label: 'Listed Year', icon: Calendar, type: 'number' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4" // Reduced from space-y-6
    >
      {/* Header - Simplified without upload button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Add Company</h1>
            <p className="text-gray-600">Add or edit company information</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Company Information</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.key} className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Icon className="w-4 h-4" />
                    <span>{field.label}</span>
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    name={field.key}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    value={company[field.key as keyof typeof company]}
                    onChange={handleChange}
                    type={field.type || 'text'}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{isLoading ? 'Saving...' : 'Save Changes'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Error Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white p-6 max-w-md mx-auto mt-20 rounded-xl shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-xl">⚠️</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Validation Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Got it
          </button>
        </div>
      </Modal>
    </motion.div>
  );
};

export default AddCompany;
