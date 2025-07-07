import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const isEmbedded = location.pathname.startsWith('/sales');
  const basePath = isEmbedded ? '/sales' : '';
  
  return (
    <div className="p-6">
      {/* Portal Indicator Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-blue-800">
          🎯 You are currently in the Sales Portal
        </h3>
        <p className="text-xs text-blue-600 mt-1">
          Manage customer relationships, quotes, and policy sales
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Manage quotes, policies, and customer relationships
        </p>
      </div>

      {/* Simple metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">24</div>
          <div className="text-sm text-gray-600">Active Quotes</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">156</div>
          <div className="text-sm text-gray-600">Policies Sold</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">$425K</div>
          <div className="text-sm text-gray-600">Revenue</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">18%</div>
          <div className="text-sm text-gray-600">Conversion Rate</div>
        </div>
      </div>

      {/* Simple navigation */}
      <div className="space-y-2">
        <Link to={`${basePath}/quotes`} className="block bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          View All Quotes
        </Link>
        <Link to={`${basePath}/policies`} className="block bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
          View All Policies
        </Link>
      </div>
    </div>
  );
}
