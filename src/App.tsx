import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import ProTip from './ProTip';

import Sidebar from './components/sidebar2';
import Navbar from './components/navbar';

import Footer from './components/footer';

import Statcards from './components/statcards';

import Row1 from './components/row1';

import { authentication } from './config/fire';
import { collection, getFirestore, onSnapshot, doc, query, DocumentData } from "firebase/firestore"

import Signin from './components/signin';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import Cursor from 'react-cursor-follow'

const colors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee"
];


export default function App() {
  const [average, setaverage] = React.useState(0);
  const [leaderlist, setleaderlist] = React.useState([]);
  const [classaverage, setclassaverage] = React.useState("");
  
  const [homework, sethomework] = React.useState([]);

  const [loginopen, setopen] = React.useState(false);

  const db = getFirestore();
  const provider = new GoogleAuthProvider()

  const [i, setI] = React.useState(0); //aasdasd

  const [movies, setmovies] = React.useState([]);

//   const baseurl = "http://localhost:8081"
  const baseurl = "https://powerschoolapi.herokuapp.com"
  
  React.useLayoutEffect(() => { //asdasda
    setTimeout(() => {
      if (i === colors.length) setI(0);
      else setI(i + 1);
    }, 1000);
  }, [i]);

  const [username, setusername] = React.useState('null'); // testing
  React.useEffect(():any => {
      authentication.onAuthStateChanged(user => {
        if (user && user.displayName) {
          const name = ""+user.displayName.split(/(\s+)/)[0]
          setusername(name)

          fetch(`${baseurl}/getdata/${name}`)
            .then(res => res.json())
            .then(data => setaverage(data[0].average))
            .catch(err => console.log(err));

          fetch(`${baseurl}/getposts`)
            .then(res => res.json())
            .then(data => {sethomework(data); console.log(data.length)})
            .catch(err => console.log(err));

          fetch(`${baseurl}/getmovies`)
            .then(res => res.json())
            .then(data => {setmovies(data); console.log("Movies",data.length)})
            .catch(err => console.log(err));


          // Broken so need to use firebase
          fetch(`${baseurl}/allusers`)
            .then(res => res.json())
            .then(data => {
              setleaderlist(data); 
              console.log(data);

              let c1 = 0;
              let c2 = 0;

              data.forEach((element, index) => {
                c2+=1;
                c1 = c1+parseInt(element.average);
              });
              console.log(c1,c2);
              setclassaverage((Math.round((c1/c2) * 10) / 10)+"");

            })
            .catch(err => console.log(err));
        } else{
          console.log("LOL (logged out lol)")
          // <Signin/>
          signInWithRedirect(authentication, provider);
        }
      });
  }, []);

  return (
    <>
    <div className="flex flex-wrap bg-gray-100 w-full h-screen bg-darker">
      {/* <Cursor/> */}
      <Cursor hollow color={colors[i]} duration={0.8} size={45} />
      <div className="w-2/12 bg-gradient-to-r from-lightdark via-lightdark to-lightest">
        <Sidebar user={username}/>
      </div>
        <div className="w-10/12 bg-gradient-to-r from-lightdark via-lightest to-darker">
            {/* <div className="p-4 text-gray-500">
              Hii
            </div> */}
            <Navbar user={username} />
            <div className="flex items-left min-h-screen bg-gradient-to-r from-lightdark via-lightest to-darker">
              <div className="container">
                <div className='px-4 mx-auto my-8'>
                  <p className='font-medium text-2xl text-white'>Dashboard</p>
                </div>
                {/* Statistics */}
                <Statcards average={average} leaderlist={leaderlist} classaverage={classaverage} />
                <Row1 username={username} leaderlist={leaderlist} homework={homework} baseurl={baseurl} movies={movies} />

                <div className='px-4 mx-auto my-8'>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
    </div>
    {/* <Signin /> */}
    </>
  );
}
