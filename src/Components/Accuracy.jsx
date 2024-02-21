import React from 'react'

const Accuracy = () => {
  return (
    <div className='mx-5 mt-5 bg-white rounded-xl'>
         <h2 className='text-blue-900 font-bold px-6 py-1'>Accuracy</h2>
         <table class="text-sm text-left">
            <thead class="text-xs border-b text-gray-500">
                <tr>
                    <th scope="col" class="px-6 py-3 text-center  font-medium">Name</th>
                    <th scope="col" class="font-medium px-6 py-3">Accuracy Achieved</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">Ankit</th>
                    <td class="px-6 py-3"><div className='w-full bg-blue-300 h-1.5 rounded'><div className='w-[80%] bg-blue-700 h-1.5 rounded'></div></div></td>
                    <td class="px-6 py-3"><div className=' border border-blue-800 py-1 px-3 rounded-lg font-medium'>80%</div></td>
                </tr>
                <tr class="border-b">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap ">Vikky</th>
                    
                    <td class="px-6 py-3"><div className='w-full bg-pink-300 h-1.5 rounded'><div className='w-[60%] bg-pink-500 h-1.5 rounded'></div></div></td>
                    <td class="px-6 py-3"><div className=' border border-pink-800 py-1 px-3 rounded-lg font-medium'>60%</div></td>
                </tr>

                <tr class="border-b">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowra">Happy</th>

                    <td class="px-6 py-3"><div className='w-full bg-purple-300 h-1.5 rounded'><div className='w-[50%] bg-purple-700 h-1.5 rounded'></div></div></td>

                    <td class="px-6 py-3"><div className='border border-purple-800 py-1 px-3 rounded-lg font-medium'>50%</div></td>
                </tr>
                <tr class="boredr-b">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowra">Virat</th>

                    <td class="px-6 py-3"><div className='w-full bg-yellow-200 h-1.5 rounded'><div className='w-[25%] bg-yellow-500 h-1.5 rounded'></div></div></td>

                    <td class="px-6 py-3"><div className='border border-yellow-500 py-1 px-3 rounded-lg font-medium'>25%</div></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Accuracy
