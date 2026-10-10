import React from 'react'


 type StatCardProps = {
    title: string;
    value:string;
}
const StatCard = ({title,value}: StatCardProps) => {
   
 return (
  <div className="rounded-xl bg-white p-6 shadow-md">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="mt-2 text-2xl font-bold text-gray-900">{value}</h2>
  </div>
)
}

export default StatCard