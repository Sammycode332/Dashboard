import StatCard from './StatCard'

const DashboardHome = () => {
  //g in space-y-6 means spacing scale one gives you 4px then 6 will give you 24
  return (
    <div className="space-y-6">
     <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Home
        </h1>
    
        <p className="mt-2 text-gray-500">
          Welcome to your dashboard.
        </p>
      </div>

  <button className="self-start rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 sm:self-auto">
    + Add Widget
  </button>
</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <StatCard title="Total Users" value="1248" trend="+12.5%" />
      <StatCard title="Revenue" value="₦900,000" trend="+8.2%" />
      <StatCard title="Growth" value="+24%" trend="+4.3%" />
      </div>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
        <div className='rounded-xl bg-white p-6 shadow-md lg:col-span-2'>
         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
         <div>
           <h2 className="text-lg font-bold text-gray-900">
             Revenue Overview
           </h2>
       
           <p className="mt-1 text-sm text-gray-500">
             Revenue performance over the last 7 months
           </p>
         </div>
       
         <div>
           <p className="text-2xl font-bold text-gray-900">₦4.8M</p>
       
           <p className="mt-1 text-sm font-medium text-green-600">
             ↑ 8.2% from last month
           </p>
         </div>
        </div>
         <div className=" relative mt-6 flex h-56 items-end justify-between gap-3 border-b border-gray-100 pb-1">
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-1">
           <div className="border-t border-dashed border-gray-200" />
           <div className="border-t border-dashed border-gray-200" />
           <div className="border-t border-dashed border-gray-200" />
           <div className="border-t border-dashed border-gray-200" />
           <div className="border-t border-gray-200" />
          </div>
          <div className="group relative z-10 h-[35%] flex-1 cursor-pointer rounded-t-md bg-blue-200 transition-all duration-300 hover:bg-blue-500 hover:opacity-80">
           <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            ₦250k
           </span>
          </div>
          <div className="group relative z-10 h-[50%] flex-1 cursor-pointer rounded-t-md bg-blue-300 transition-all duration-300 hover:bg-blue-500 hover:opacity-80">
           <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
           ₦400k
          </span>
         </div>
          <div className="group relative z-10 h-[40%] flex-1 cursor-pointer rounded-t-md bg-blue-400 transition-all duration-300 hover:bg-blue-500 hover:opacity-80">
         <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
         ₦320k
        </span>
         </div>

          <div className="group relative z-10 h-[70%] flex-1 cursor-pointer rounded-t-md bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:opacity-80">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          ₦560k
         </span>
         </div>
          <div className="group relative z-10 h-[55%] flex-1 cursor-pointer rounded-t-md bg-blue-400 transition-all duration-300 hover:bg-blue-500 hover:opacity-80">
           <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
             ₦440k
           </span>
         </div>
         <div className="group relative z-10 h-[85%] flex-1 cursor-pointer rounded-t-md bg-blue-600 transition-all duration-300 hover:bg-blue-700 hover:opacity-80">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            ₦680k
          </span>
          </div>
          <div className="group relative z-10 h-[65%] flex-1 cursor-pointer rounded-t-md bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:opacity-80">
           <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            ₦520k
           </span>
          </div>
         </div>
         <div className="mt-3 flex justify-between gap-3 text-xs text-gray-500">
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
        </div>
      </div>
      
      <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-lg font-bold text-gray-900">
          Recent Activity
        </h2>
      
        <p className="mt-1 text-sm text-gray-500">
          Latest updates from your dashboard
        </p>
      
        <div className="mt-6 divide-y divide-gray-100">
          {/* First activity */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  New user registered
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  John Doe created an account
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-gray-400">
              5 min ago
            </span>
          </div>
      
          {/* Second activity */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Payment received
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  A payment of ₦50,000 was received
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-gray-400">
              20 min ago
            </span>
          </div>
      
          {/* Third activity */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-purple-500" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Monthly report generated
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Your September report is ready
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-gray-400">
              1 hour ago
            </span>
          </div>
        </div>
      </div>

     </div>
    </div>
  )
}

export default DashboardHome