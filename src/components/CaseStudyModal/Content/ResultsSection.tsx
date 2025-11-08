export const ResultsSection = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Cargo delivered intact</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">$2.3M</div>
            <div className="text-sm text-gray-600">Cost savings achieved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">On-time delivery rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600 mb-1">15%</div>
            <div className="text-sm text-gray-600">Faster than standard</div>
          </div>
        </div>
      </div>
    </div>
  );
};