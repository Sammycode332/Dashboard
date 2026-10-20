import React from 'react'


 type StatCardProps = {
    title: string;
    value:string;
    trend: string;
}
const StatCard = ({title,value,trend}: StatCardProps) => {
   
 return (
 <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="mt-2 text-2xl font-bold text-gray-900">{value}</h2>
    <p className='mt-2 text-sm font-medium text-green-600'>
      {trend} from last month</p>
  </div>
  
)
}

export default StatCard