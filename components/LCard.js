import React from 'react'
import Image from 'next/image'

function LCard(props) {
    return (
        <div onMouseEnter={()=> props.setHeroImg(props.image)} onMouseLeave={()=> props.setHeroImg(props.defImg)} className="container p-3 rounded-lg bg-3 hover:-mt-1 animate__animated animate__fadeInUp">
            <div className="h-full flex flex-col md:flex-row items-center justify-between">
                <div>
                    <Image src={props.image} />
                </div>
                <div className="m-2">
                    <h3 className="text-3xl font-medium">{props.title}</h3>
                    <p className="text-md mt-5">{props.desc}</p>

                </div>
            </div>
            <div className="mx-5 mt-5 flex justify-end">
                <button className="mt-2 p-2 rounded-lg bg-1">
                    <span className="text-white font-medium">
                        Read More
                    </span>
                </button>
            </div>
        </div>
    )
}

export default LCard
