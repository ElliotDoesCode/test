import * as React from 'react';

export default function sidebar({user}){
   function generateUUID() { // Public Domain/MIT
      var d = new Date().getTime();//Timestamp
      var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
               r = (d + r)%16 | 0;
               d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
               r = (d2 + r)%16 | 0;
               d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
   }
   return (
        <>
         <aside className="" aria-label="Sidebar">
            <div className="h-screen px-3 py-4 overflow-y-autos rounded bg-gradient-to-r from-lightdark via-lightdark to-lightest">
               <a href="" className="flex pl-2.5 mb-5">
                     <img src="https://pagesix.com/wp-content/uploads/sites/3/2019/06/moira-rose.jpg?quality=80&strip=all" alt="logo" className="w-12 h-12 rounded-full mr-2"/>
                     {/* <svg className="mr-3 h-9" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg" /> */}
                     <span className="self-center text-lg font-semibold whitespace-nowrap text-white hidden md:block">{user}</span>
               </a>
               <ul className="space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="ml-3 text-gray-400 hidden md:block">Dashboard</span>
                     </a>
                  </li>
               </ul>
               <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900 inset-x-0 bottom-0 hidden md:block" role="alert">
                  <div className="flex items-center mb-3">
                     <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                           <span className="sr-only">Close</span>
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     </button>
                  </div>
                  <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                     Task ID: {generateUUID()}
                  </p>
                  <a className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="#">Debug Data</a>
               </div>
            </div>
         </aside>
        </>
    );
}