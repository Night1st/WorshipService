import React from 'react';
import { Solution } from './SolutionOverview';

interface Props {
    id: number
    solution: Solution[];
}

const SolutionDetail = ({solution, id}: Props) => {
    return (
        <section className='mx-auto px-32 pb-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-start bg-[white]'>
                <div className='flex flex-col gap-3 px-5 py-5'>
                    <h1 className='text-[#1B3864] text-4xl '>{"Tại sao nên chọn Metaverse?"}</h1>
                    <p className='text-xl'>{solution[id].description}</p>  
                </div>
                <div>
                    {solution[id].details.map((item, idx) => (
                        <div key={idx} className='flex flex-col gap-3 px-5 py-5'>
                            <h1 className='text-[#1B3864] text-4xl '>{item.title}</h1>
                            <p className='text-xl'>{item.description}</p>  
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SolutionDetail