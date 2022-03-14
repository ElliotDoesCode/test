import React from "react";

export default function answers({homework, baseurl, username}) {
    const [enabled, setenabled] = React.useState(false);

    const [title, settitle] = React.useState("")
    const [content, setcontent] = React.useState("")

    const [loading, setloading] = React.useState(false);

    const [submittitle, setsubmittitle] = React.useState("")
    const [submitcontent, setsubmitcontent] = React.useState("")
    const [submitsubject, setsubmitsubject] = React.useState("Math")
    const [postbutton, setpostbutton] = React.useState("Post")

    document.addEventListener("keypress", function(event) {
        if (event.key === "q") {
            console.log("PRessed")
            setenabled(!enabled);
        }
    });
    
    function wordInString(s, words, replacement){ 
        var re = new RegExp( '\\b' + words.join('|') + '\\b','gi');
        return s.replace(re, replacement);
    }

    function loadpost(post) {
        settitle(homework[post].title)
        setcontent(wordInString(homework[post].description, ["bitch"], 'dionne'))
    }

    return (
        <div className="p-4 max-w-sm bg-darker rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-bold leading-none text-white">
                    Answers
                </h5>
                <button className="text-xl font-large hover:bg-darkest text-white" data-modal-toggle="authentication-modal">
                    +
                </button>
                <div id="authentication-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                    <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative rounded-lg shadow bg-lightdark">
                            <div className="flex justify-end p-2">
                                <button type="button" className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                <h3 className="text-xl font-medium text-white">Submit Answer</h3>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-300">Title</label>
                                    <input onChange={event => setsubmittitle(event.target.value)} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Science thingy 1.1" required />
                                </div>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                                    <select onChange={event => {console.log(event.target.value); setsubmitsubject(event.target.value)}} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Math</option>
                                        <option>Science</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                        <option>Language</option>
                                        <option>Social Studies</option>
                                        <option>Health</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-300">Answers</label>
                                    <textarea onChange={event => setsubmitcontent(event.target.value)} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your answer lol"></textarea>
                                </div>
                                {/* <div className="flex justify-between">
                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div> */}
                                {loading === true &&
                                <div className="flex items-center space-x-4">
                                    <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                </div>
                                || 
                                <button type="submit" onClick={(e) => {
                                    e.preventDefault(); 
                                    setloading(true);
                                    fetch(baseurl+"/newpost/"+username+"/"+submittitle+"/"+submitcontent+"/"+submitsubject, {method: "POST"})
                                        .then(res => {setloading(false); setpostbutton("Success!"); setTimeout(() => {location.reload();}, 2000)});
                                }} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{postbutton}</button>
                                }
                                {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">#AntiSenorDionne #AntiMath #AntiClever {enabled === true && "|| Only loads 5 most recent posts."}</p>
            <ul className="my-4 space-y-3" data-modal-toggle="modalDos">
                    {homework.length < 1 && 
                    <div className="flex items-center space-x-4">
                        <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                    || (enabled === true && homework.length > 2 && homework.map((element, index) =>
                        <li data-modal-toggle="modalDos" key={index}>
                            <a onClick={() => loadpost(index)} href="#modalDos" type="button" data-modal-toggle="modalDos" className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-lightest hover:bg-gray-500 text-white">
                                {/* <img src="https://static.thenounproject.com/png/62984-200.png" alt="icon" className="max-w-sm h-7 mr-3 round" /> */}
                                {/* <svg className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg> */}
                                <span className="flex-1 ml-3 whitespace-nowrap truncate" data-modal-toggle="modalDos" >{element.title}</span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{element.subject}</span>
                            </a>
                        </li>
                    ))}
                    <div id="modalDos" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                            <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                                <div className="relative rounded-lg shadow bg-lightdark" data-modal-toggle="modalDos">
                                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600" data-modal-toggle="modalDos">
                                        <h3 className="text-xl font-semibold lg:text-2xl text-white">
                                            {title}
                                        </h3>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                        </button>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <p className="text-base leading-relaxed text-gray-400" style={{"whiteSpace": "pre-line"}}>
                                            {content}
                                        </p>
                                        {/* <p className="text-base leading-relaxed text-gray-400">
                                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                        </p> */}
                                    </div>
                                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600" data-modal-toggle="modalDos">
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">👍</button>
                                        <button type="button" className="text-gray-500 bg-darker hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">👎</button>
                                        <p className="text-l text-white dark:text-gray-400">Was this helpful?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </ul>
            <div>
                <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                    <svg className="mr-2 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                    These aren't actually the answers it's just a prank.</a>
            </div>

        </div>
    )
}