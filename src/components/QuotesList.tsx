import React from 'react';

export default function QuotesList() {
  return (
    <div className="p-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-blue-800">
          📋 Quotes Management
        </h3>
        <p className="text-xs text-blue-600 mt-1">
          View and manage insurance quotes
        </p>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Insurance Quotes</h1>

      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Quote #Q-2024-001</h3>
              <p className="text-gray-600">Health Insurance - John Doe</p>
              <p className="text-sm text-gray-500">Premium: $450/month</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Pending</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Quote #Q-2024-002</h3>
              <p className="text-gray-600">Life Insurance - Jane Smith</p>
              <p className="text-sm text-gray-500">Premium: $75/month</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Approved</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Quote #Q-2024-003</h3>
              <p className="text-gray-600">Auto Insurance - Mike Johnson</p>
              <p className="text-sm text-gray-500">Premium: $120/month</p>
            </div>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Expired</span>
          </div>
        </div>
      </div>
    </div>
  );
}