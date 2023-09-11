import React from 'react'

const BannerText = ({ title, isBackgroud, desc }) => {
    return (
        <section className={`flex items-center justify-center flex-col gap-1 px-8 lg:px-32 py-4 ${isBackgroud ? "bg-primary-black" : ''}`}>
            <h1 className={`text-[24px] font-bold ${isBackgroud ? 'text-white' : ''}`}>{title}</h1>
            <span className={`text-xs ${isBackgroud ? 'text-gray-50' : 'text-black'}`}>{desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, deserunt."}</span>
        </section>
    )
}

export default BannerText
