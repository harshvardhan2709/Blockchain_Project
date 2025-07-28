import React, { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit logic
    console.log(company);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">ClimCarbon</h1>
        <nav className="flex-1">
          <h2 className="text-sm font-semibold mb-2">DATA INPUT</h2>
          <ul className="space-y-2 mb-6">
            <li className="hover:text-green-400 cursor-pointer">General Info</li>
          </ul>
        </nav>
        <footer className="text-sm mt-auto text-green-400">Powered by Climekare</footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <div>
            <button className="bg-green-700 text-white px-4 py-2 rounded mr-4">Company Profile</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Admin Dashboard</button>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded">Upload New Logo</button>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 bg-white p-6 rounded shadow">
          <input
            name="name"
            placeholder="Company Name"
            value={company.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="regNumber"
            placeholder="Company Registration Number"
            value={company.regNumber}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="country"
            placeholder="Country of Registration"
            value={company.country}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="year"
            placeholder="Year of Incorporation"
            value={company.year}
            onChange={handleChange}
            className="p-2 border rounded"
            type="number"
          />
          <input
            name="employeeCount"
            placeholder="Number of Employees"
            value={company.employeeCount}
            onChange={handleChange}
            className="p-2 border rounded"
            type="number"
          />
          <input
            name="stockExchange"
            placeholder="Stock Exchange (Optional)"
            value={company.stockExchange}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="listedYear"
            placeholder="Listed Year (Optional)"
            value={company.listedYear}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="nicCode"
            placeholder="NIC/SIC Code"
            value={company.nicCode}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="fiscalYear"
            placeholder="Fiscal Year"
            value={company.fiscalYear}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="website"
            placeholder="Website"
            value={company.website}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="corpOffice"
            placeholder="Corporate Office"
            value={company.corpOffice}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Update Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CompanyProfile;
