import React, { useState } from 'react';
import { Building2, MapPin, Calendar, X, AlertCircle } from 'lucide-react';

interface CompanyData {
  companyName: string;
  registrationNumber: string;
  country: string;
  yearOfIncorporation: string;
  nicIsicCode: string;
  numberOfEmployees: string;
  listedYear: string;
  stockExchange: string;
  fiscalYear: string;
  website: string;
  corporateOffice: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const CompanyProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<CompanyData>({
    companyName: 'Climekare_',
    registrationNumber: '123',
    country: 'UnitedState',
    yearOfIncorporation: '2023',
    nicIsicCode: 'abcd',
    numberOfEmployees: '123',
    listedYear: '',
    stockExchange: '',
    fiscalYear: 'JAN-DEC',
    website: '', 
    corporateOffice: ''
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const handleInputChange = (field: keyof CompanyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleYearChange = (field: keyof CompanyData, dateValue: string) => {
    if (dateValue) {
      const year = new Date(dateValue).getFullYear().toString();
      handleInputChange(field, year);
    } else {
      handleInputChange(field, '');
    }
  };

  const validateForm = (): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    // Required fields validation
    if (!formData.companyName.trim()) {
      errors.companyName = 'Company Name is required';
    }
    
    if (!formData.registrationNumber.trim()) {
      errors.registrationNumber = 'Company Registration Number is required';
    }
    
    if (!formData.country.trim()) {
      errors.country = 'Country of Registration is required';
    }
    
    if (!formData.yearOfIncorporation.trim()) {
      errors.yearOfIncorporation = 'Year of Incorporation is required';
    }
    
    if (!formData.nicIsicCode.trim()) {
      errors.nicIsicCode = 'NIC/ISIC Code is required';
    }
    
    if (!formData.numberOfEmployees.trim()) {
      errors.numberOfEmployees = 'Number of employees is required';
    }
    
    if (!formData.fiscalYear.trim()) {
      errors.fiscalYear = 'Fiscal Year is required';
    }
    
    if (!formData.corporateOffice.trim()) {
      errors.corporateOffice = 'Corporate Office is required';
    }
    
    // Optional validation for email format if website is provided
    if (formData.website && !formData.website.includes('.')) {
      errors.website = 'Please enter a valid website URL';
    }
    
    return errors;
  };

  const handleUpdateChanges = () => {
    // Validate form
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShowErrorModal(true);
      return;
    }
    
    // If validation passes, create object with key-value pairs
    const companyProfileObject = {
      "Company Name": formData.companyName,
      "Registration Number": formData.registrationNumber,
      "Country": formData.country,
      "Year of Incorporation": formData.yearOfIncorporation,
      "NIC/ISIC Code": formData.nicIsicCode,
      "Number of Employees": formData.numberOfEmployees,
      "Listed Year": formData.listedYear || "Not provided",
      "Stock Exchange": formData.stockExchange || "Not provided",
      "Fiscal Year": formData.fiscalYear,
      "Website": formData.website || "Not provided",
      "Corporate Office": formData.corporateOffice
    };
    
    // Print the object
    console.log("Company Profile Object:", companyProfileObject);
    
    // Pretty print in console
    console.table(companyProfileObject);
    
    // Show success message
    alert(`✅ Company Profile Successfully Created!\n\nCheck console for the complete object data.`);
    
    // TODO: Send to API
    // fetch('/api/company-profile', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(companyProfileObject)
    // });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="text-green-600 font-bold text-2xl">Climekare</div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <Building2 className="absolute left-3 top-3 text-green-600" size={20} />
              </div>
            </div>

            {/* Company Registration Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company Registration Number</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <div className="absolute left-3 top-3 w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">123</div>
                <span className="absolute left-12 top-3 text-gray-400 ml-2">SADA</span>
              </div>
            </div>

            {/* Country of Registration */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Country of Registration</label>
              <div className="relative">
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none appearance-none bg-white"
                >
                  <option value="UnitedState">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="India">India</option>
                </select>
                <MapPin className="absolute left-3 top-3 text-green-600" size={20} />
              </div>
            </div>

            {/* Year of Incorporation - Date Picker */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Year of Incorporation</label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.yearOfIncorporation ? `${formData.yearOfIncorporation}-01-01` : ''}
                  onChange={(e) => handleYearChange('yearOfIncorporation', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <Calendar className="absolute left-3 top-3 text-green-600" size={20} />
              </div>
              {formData.yearOfIncorporation && (
                <div className="text-sm text-gray-600 mt-1">Selected Year: {formData.yearOfIncorporation}</div>
              )}
            </div>

            {/* NIC/ISIC Code */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">NIC/ISIC Code</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.nicIsicCode}
                  onChange={(e) => handleInputChange('nicIsicCode', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <div className="absolute left-3 top-3 w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
            </div>

            {/* Number of Employees */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Number of employee</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.numberOfEmployees}
                  onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                  placeholder="Enter employee"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <div className="absolute left-3 top-3 w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">123</div>
              </div>
            </div>

            {/* Listed Year - Date Picker */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Listed Year ( Optional )</label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.listedYear ? `${formData.listedYear}-01-01` : ''}
                  onChange={(e) => handleYearChange('listedYear', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <Calendar className="absolute left-3 top-3 text-green-600" size={20} />
              </div>
              {formData.listedYear && (
                <div className="text-sm text-gray-600 mt-1">Selected Year: {formData.listedYear}</div>
              )}
            </div>

            {/* Stock Exchange */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Stock Exchange where company is listed ( Optional )</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.stockExchange}
                  onChange={(e) => handleInputChange('stockExchange', e.target.value)}
                  placeholder="Enter Stock Exchange"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <div className="absolute left-3 top-3 w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
            </div>

            {/* Fiscal Year */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Fiscal Year</label>
              <div className="relative">
                <select
                  value={formData.fiscalYear}
                  onChange={(e) => handleInputChange('fiscalYear', e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none appearance-none bg-white"
                >
                  <option value="JAN-DEC">JAN-DEC</option>
                  <option value="APR-MAR">APR-MAR</option>
                  <option value="JUL-JUN">JUL-JUN</option>
                  <option value="OCT-SEP">OCT-SEP</option>
                </select>
                <Calendar className="absolute left-3 top-3 text-green-600" size={20} />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Website</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="Enter Website"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <div className="absolute left-3 top-3 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">@</span>
                </div>
              </div>
            </div>

            {/* Corporate Office - Full Width */}
            <div className="lg:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Corporate office</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.corporateOffice}
                  onChange={(e) => handleInputChange('corporateOffice', e.target.value)}
                  placeholder="Enter Corporate office"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <Building2 className="absolute left-3 top-3 text-green-600" size={20} />
              </div>
            </div>
          </div>

          {/* Footer with button */}
          <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleUpdateChanges}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>

        {/* Error Modal */}
        {showErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="text-red-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Validation Errors</h3>
                </div>
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600 mb-4">Please fix the following errors:</p>
                {Object.entries(validationErrors).map(([field, error]) => (
                  <div key={field} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <p className="font-medium text-red-800 capitalize">
                        {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </p>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfileForm;