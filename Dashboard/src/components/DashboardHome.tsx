import StatCard from './StatCard'

const DashboardHome = () => {
  //g in space-y-6 means spacing scale one gives you 4px then 6 will give you 24
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Home</h1>
        <p className="mt-2 text-gray-500">
          Welcome to your dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard title="Total Users" value="1248" />
        <StatCard title="Revenue" value="₦900,000" />
        <StatCard title="Growth" value="+24%" />
      </div>
    </div>
  )
}

export default DashboardHome