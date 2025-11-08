export const SolutionSection = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          <p className="text-gray-600">Coordinated multi-port pickup across 5 Asian countries</p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          <p className="text-gray-600">Implemented real-time temperature monitoring systems</p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          <p className="text-gray-600">Provided 24/7 cargo tracking and customer updates</p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          <p className="text-gray-600">Secured priority berthing at European ports</p>
        </div>
      </div>
    </div>
  );
};