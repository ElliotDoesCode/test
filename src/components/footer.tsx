import React from "react";

export default function footer() {
    return (
        <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gradient-to-r from-lightdark via-lightest to-darker">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline" target="_blank">Badussy Inc™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                </li>
                <li>
                    <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                </li>
            </ul>
        </footer>
    )
}