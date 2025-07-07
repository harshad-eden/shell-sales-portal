import React from 'react';

export default function PoliciesList() {
  return (
    <div className="p-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-green-800">
          📑 Policies Management
        </h3>
        <p className="text-xs text-green-600 mt-1">
          View and manage active insurance policies
        </p>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Insurance Policies</h1>

      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Policy #P-2024-001</h3>
              <p className="text-gray-600">Health Insurance - John Doe</p>
              <p className="text-sm text-gray-500">Premium: $450/month | Coverage: $50,000</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Policy #P-2024-002</h3>
              <p className="text-gray-600">Life Insurance - Jane Smith</p>
              <p className="text-sm text-gray-500">Premium: $75/month | Coverage: $100,000</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Policy #P-2024-003</h3>
              <p className="text-gray-600">Auto Insurance - Mike Johnson</p>
              <p className="text-sm text-gray-500">Premium: $120/month | Coverage: $25,000</p>
            </div>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Expired</span>
          </div>
        </div>
      </div>
    </div>
  );
}