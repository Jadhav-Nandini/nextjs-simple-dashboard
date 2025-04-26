// const Analytics = () => {
//   return (
//     <div>Analytics</div>
//   )
// }

// export default Analytics



export default function AnalyticsPage() {
  return (
    <div className="min-h-screen px-8 py-10 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          Analytics Dashboard
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          View key performance indicators and insights about your platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Total Users</h2>
            <p className="text-3xl font-bold text-slate-700">12,450</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Monthly Sales</h2>
            <p className="text-3xl font-bold text-slate-700">$28,390</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Active Sessions</h2>
            <p className="text-3xl font-bold text-slate-700">1,032</p>
          </div>
        </div>
      </div>
    </div>
  );
}
