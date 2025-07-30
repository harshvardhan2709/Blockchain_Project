import React, { useState } from 'react';

const demoCompanies = [
  {
    id: 'C001',
    name: 'Green World Inc',
    products: [
      { name: 'EcoCarbon', token: 1000, status: 'Burning' },
      { name: 'Reforest', token: 500, status: 'Retiring' }
    ]
  },
  {
    id: 'C002',
    name: 'Blue Planet Enterprises',
    products: [
      { name: 'BioToken', token: 2200, status: 'Burning' }
    ]
  },
  {
    id: 'C003',
    name: 'CleanAir Ltd',
    products: [
      { name: 'AirToken', token: 770, status: 'Retiring' },
      { name: 'PureAir', token: 350, status: 'Burning' }
    ]
  }
];

const Companies: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <div className="grid gap-4 mb-6">
        {demoCompanies.map((comp, idx) => (
          <div
            key={comp.id}
            onClick={() => setSelected(selected === idx ? null : idx)}
            className={`p-4 rounded-xl border shadow-sm cursor-pointer transition-all ${
              selected === idx
                ? 'border-green-600 bg-green-50'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">{comp.name}</div>
                <div className="text-xs text-gray-500">ID: {comp.id}</div>
              </div>
              <span className="text-green-600 font-medium">
                {selected === idx ? '▼' : '▶'}
              </span>
            </div>
            {selected === idx && (
              <div className="mt-5">
                <div className="mb-2 text-sm font-semibold text-gray-700">Products</div>
                <div className="divide-y">
                  {comp.products.map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                      <span>{p.name}</span>
                      <span className="font-mono text-gray-700">{p.token}</span>
                      <span className={`capitalize text-xs px-2 py-1 rounded ${
                        p.status === 'Burning'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className="fixed bottom-8 right-8 px-5 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
                  // Your logic to open Add Token Modal
                >
                  Add Token
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
