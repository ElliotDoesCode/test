import React from "react";
import moment from "moment";
import Answers from "./answers";

// import Carousel from 'flowbite/src/components/carousel'

export default function row1({username, leaderlist, homework, baseurl, movies}) {
    const [currentIndex, setcurrentIndex] = React.useState(1);
    const postsPerPage = 5;

    const indexOfLastPost = currentIndex * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
 
    const ur="https://imageio.forbes.com/specials-images/imageserve/622386616fe50ee041957a48/Robert-Pattinson-in--The-Batman-/0x0.jpg?fit=crop&format=jpg&crop=1919,1079,x0,y0,safe"
    
    // function timeSince(timeStamp) {
    //     var now = new Date(),
    //     let secondsPast: number = (now.getTime() - timeStamp) / 1000;
    //     if (secondsPast < 60) {
    //       return parseInt(secondsPast).toString() + 's';
    //     }
    //     if (secondsPast < 3600) {
    //       return parseInt(secondsPast / 60).toString() + 'm';
    //     }
    //     if (secondsPast <= 86400) {
    //       return parseInt(secondsPast / 3600) + 'h';
    //     }
    //     if (secondsPast > 86400) {
    //       let day = timeStamp.getDate();
    //       let month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    //       let year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
    //       return day + " " + month + year;
    //     }
    //   }

    // const carousel = new Carousel(items, options);

    return (
        <div className="px-4 mx-auto my-8">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 max-w-md bg-darker rounded-lg shadow-md sm:p-8 dark: border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold leading-none text-white">Leaderboard</h3>
                            <a href="#" className="text-sm font-medium hover:underline text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {leaderlist.length < 2 &&
                                <div className="flex items-center space-x-4">
                                    <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                </div>
                                || username !== "null" && leaderlist.slice(indexOfFirstPost, indexOfLastPost).map((leader, index) =>
                                    <li className="py-3 sm:py-4" key={index}>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <p className="w-8 h-8 text-white">{currentIndex < 2 && index+1 || index+6}.</p>
                                                {/* <img className="w-8 h-8 rounded-full" alt="Neil image"/> */}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate text-white">
                                                    {leader.user}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate text-gray-400">
                                                    Last updated: {leader.last_updated && "Today" || "N/A"}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-white">
                                                {leader.average}
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            {leaderlist.length > 5 &&
                            <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px">
                                <li>
                                <a href="#" onClick={() => setcurrentIndex(1)} className="py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-lightest border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</a>
                                </li>
                                {/* <li>
                                <a href="#" className="py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-lightest border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</a>
                                </li> */}
                                {/* <li>
                                <a onClick={() => setcurrentIndex(3)} href="#" className="py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-lightest border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</a>
                                </li> */}
                                {/* <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-lightest border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-lightest border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                <a href="#" aria-current="page" className="py-2 px-3 text-blue-600 bg-gray-800 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-lightest border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                </li>
                                <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-lightest border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                </li> */}
                                <li>
                                <a href="#" onClick={() => setcurrentIndex(2)} className="py-2 px-3 leading-tight text-gray-500 bg-lightest rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                </li>
                            </ul>
                            </nav>}
                        </div>
                    </div>

                    <div className="max-w-sm bg-darker rounded-lg shadow-md">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://nypost.com/wp-content/uploads/sites/2/2022/02/the-batman.jpg?quality=80&strip=all" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Watch a movie</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-400">Not finished yet. Once finished, it will have Batman and a whole list of other movies. Be patient or else I will come to your house and kill you.</p>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                                Watch
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    
                    <Answers homework={homework} baseurl={baseurl} username={username} />
                </div>
                <div id="defaultModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative  rounded-lg shadow bg-lightdark">
                            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold lg:text-2xl text-white">
                                    Movies (Click VidCloud if it doesn't work)
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                            <iframe src={"https://fsapi.xyz/tmdb-movie/tt1877830"} width="600" height="500" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
                            </div>
                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                {/* <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                <button data-modal-toggle="defaultModal" type="button" className="text-gray-500  hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}