import * as React from 'react';

export default function Sidebar({user}){
    return (
        <div className="w-2/12 bg-gradient-to-r from-lightdark via-lightdark to-lightest rounded md:max-w-2xl p-3 shadow-lg">
            <div className="flex items-center space-x-4 p-2 mb-5">
                <img className="h-12 rounded-full hidden md:block" src="https://media1.popsugar-assets.com/files/thumbor/EQ4wxUx99msXRoJkolV5e1bX6Ts/518x0:2518x2000/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/11/06/858/n/1922564/4dce2f965fa5a5ae8d30c5.80016380_/i/schitts-creek-moira-rose-inspired-by-daphne-guinness.jpg" alt=""/>
                <div>
                    <h4 className="font-semibold text-lg text-white capitalize font-poppins tracking-wide hidden md:block">{user}</h4>
                </div>
            </div>
            <ul className="space-y-2 text-sm top-0 h-32 inset-y-0 left-0 list-none px-0">
                <li>
                    <a href="#" className="flex items-center sm:items-right space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-black bg-black focus:shadow-outline">
                        <span className="text-white">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span className='hidden md:block truncate no-underline text-white '>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center sm:items-right space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-black focus:shadow-outline">
                        <span className="text-white">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </span>
                        <span className='hidden md:block truncate no-underline text-white '>Moira</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}