import React, {Component} from 'react';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';

import IntakePanel from './components/intakePanel';
import IntroPanel from './components/introPanel';
import ValuesPanel from './components/valuesPanel';
import OutputPanel from './components/outputPanel';

const valuesDBPath = '/values';
const namesDBPath = '/names';

// let valueList;
let nameList;
let selectedValues = {};
let chosenWord;

// 🔥🔥🔥 Firebase 🔥🔥🔥
const firebaseConfig = {
  apiKey: "AIzaSyCsEgB5rpn8Bm5myQLrm7JgWztpzW2lnWU",
  authDomain: "name-value-store.firebaseapp.com",
  databaseURL: "https://name-value-store.firebaseio.com",
  projectId: "name-value-store",
  storageBucket: "name-value-store.appspot.com",
  // messagingSenderId: "625598566234"
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);
// 🔥🔥🔥 Firebase 🔥🔥🔥





// ✅🏭 🏷 gets the names and the values from their JSON files.
// There's almost certainly a better way to do this! 😅
// fetchJSON = () => {

//   let snapshot;

//   // gets the snapshot from the server. returns a promise
//   let getSnapshot = () => {
//       return database.ref().once('value').then((snap) => {
//           snapshot = snap.val();
//           return snap;
//       });
//   };


//   let fetchValues = () => {
//       return new Promise(resolve => {
//           valueList = snapshot.values;
//           resolve();
//       })
//   };

//   let fetchNames = () => {
//       return new Promise(resolve => {
//           nameList = snapshot.names;
//           resolve();
//       });


//   };


//   return new Promise(resolve => {

//       getSnapshot()
//           .then(fetchValues)
//           .then(fetchNames)
//           .then(() => {
//               resolve();
//           })



//       // snapshot
//       //     .then(fetchValues.bind(this,snapshot))
//       //     .then(fetchNames.bind(this,snapshot))
//       //     .then(()=> {
//       //         resolve();
//       // })

//   });


// };

//TODO: make this thing a promise to not have weird async stuff going on.
// 🏷 picks the name with the smallest number of reviews to give it priority to be ranked
// also sets the value of the
// const pickName = () => {
//   chosenWord = Object.keys(nameList)[0];

//   //randomises words so they aren't always in the same alphabetical order
//   let leastTaggedWords = [];
//   leastTaggedWords.push(chosenWord);

//   Object.keys(nameList).forEach((name) => {
//           //if a name with a smaller number of reviews is found, the list is reset.
//           if (nameList[leastTaggedWords[0]].reviews > nameList[name].reviews) {
//               leastTaggedWords = [];
//               leastTaggedWords.push(name);
//           }
//           if (nameList[leastTaggedWords[0]].reviews === nameList[name].reviews) {
//               leastTaggedWords.push(name);
//           }
//   });

//   let leastTaggedWordCount = leastTaggedWords.length;

//   chosenWord = leastTaggedWords[Math.floor(Math.random() * leastTaggedWordCount)];

//   chosenWordField.value = chosenWord;
//   chosenWordLabel.innerText = chosenWord;
// };

// TODO: refactor to save to DB... stuff bellow return is mostly un-needed
// 🏷 saves the tagged word to the db
// const saveTagging = () => {


//     // saves the data
//     if(nameList[chosenWord]) {

//         let previousReviews = nameList[chosenWord].reviews;

//         let wordData = nameList[chosenWord];

//         // if there's values already logged, multiply them by
//         // the # of reviews that have been made previously
//         if(wordData.values) {
//             Object.keys(wordData.values).forEach((value) => {
//                 wordData.values[value] = wordData.values[value] * previousReviews;
//             })
//         }

//         // increments reviews to include the current one
//         wordData.reviews += 1;

//         // if there's no values object for the word yet, create it.
//         if(!wordData.values) {
//             wordData.values = {};
//         }


//         // values are added to wordData
//         Object.keys(selectedValues).forEach((value) => {
//             // basically, this isn't properly saving the value to the wordData object 😠
//             // can't perform operations on value with nothing in it, so it needs to be initialised to 0 if empty
//             if (!wordData.values[value]) {
//                 wordData.values[value] = 0;
//             }
//             wordData.values[value] = selectedValues[value] + wordData.values[value];
//         });


//         // values are divided by the number of total reviews
//         if(wordData.values) {
//             Object.keys(wordData.values).forEach((value) => {
//                 wordData.values[value] = Math.round((wordData.values[value] / wordData.reviews) * 100 ) /100;
//             })
//         }

//         // updates local data
//         nameList[chosenWord] = wordData;

//         //updates the record of the word to the DB
//         database.ref().child('names').child(chosenWord).set(nameList[chosenWord]);

//     }
//     else {

//         // updates the data for the word locally
//         nameList[chosenWord] = {
//             'reviews' : 1,
//             'values' : selectedValues
//         };


//         //updates the record of the word to the DB
//         database.ref().child('names').child(chosenWord).set(nameList[chosenWord]);
//     }


//     // disables activate button
//     generateButton.classList.add('disabled');

//     // opens the furnace door
//     let outputFrame = document.querySelector('.output-frame');
//     outputFrame.classList.add('open');

//     // puts names into the DOM
//     let result = document.createElement('h5');
//     result.classList.add('result');
//     result.innerHTML = chosenWord;
//     result.style.opacity = '0';


//     nameOutput.appendChild(result);

//     // pushes the word on the conveyor then into the trapdoor
//     setTimeout(() => {
//         result.style.opacity = '1';
//         result.style.transition = 'all 1.55s linear';
//         setTimeout(() => {
//             result.style.top = '3.5em';
//             result.style.transform = 'scale(1.25)';


//             setTimeout(() => {
//                 result.style.transition = 'all 0.75s cubic-bezier(0.55, 0.085, 0.68, 0.53)';
//                 result.style.top = '7em';
//                 result.style.transform = 'scale(1.45)';
//                 result.style.color = '#FF9800';

//                 // closes the goddamn (oven) door
//                 // No, it's much better to face these kinds of things
//                 // with a sense of poise and rationality 🎩
//                 outputFrame.classList.remove('open');
//                 generateButton.classList.remove('disabled');

//                 setTimeout(()=> {
//                     // opens the goddamn (trap)door, no...
//                     outputTray.classList.add('open');
//                     result.style.transform = 'scale(0.05)';
//                     result.style.top = '7.5em';

//                     setTimeout(() => {
//                         outputTray.classList.remove('open');
//                         result.remove();
//                     }, 1000);
//                 }, 1000);



//             }, 1600)
//         }, 500);
//     }, 350);


//     // animates the button
//     generateButton.classList.add('activated');
//     setTimeout(() => {
//         generateButton.classList.remove('activated');
//     }, 850);


//     //calls the delete functions for all of the the preselected values
//     deleteSliderFunctions.forEach((deleteFunction) => {
//         deleteFunction();
//     });

//     //picks a new word
//     pickName();


// };


// 🏭 generates a list of names based on the values chosen
// const generateNames = () => {

//   generateButton.classList.add('disabled');
//   let nameScore = [];

//   // loops through all names
//   for(let name in nameList) {
//       //adds each name to the score
//       let entry = [name, 0];

//       // loops through each value for a given name
//       for(let value in nameList[name].values) {

//           // Each name has a score associated to each of its values.
//           // This score is multiplied by the selected values (where applicable)
//           // then added together to make the score.
//           if(selectedValues[value]) {
//               entry[1] += (nameList[name].values[value] * selectedValues[value]);
//           }
//       }

//       nameScore.push(entry);
//   }


//   nameScore.sort((a,b) => {
//       return b[1] - a[1];
//   });


//   let bestName = nameScore[0][0];


//   let outputFrame = document.querySelector('.output-frame');
//   outputFrame.classList.add('open');

//   // removes old results
//   Array.from(document.querySelectorAll('.result')).forEach((result) => {
//       if(result) {
//           // opens the goddamn (trap)door, no...
//           outputTray.classList.add('open');
//           result.style.transform = 'scale(0.05)';
//           result.style.top = '7.5em';
//           setTimeout(() => {
//               outputTray.classList.remove('open');
//               result.remove();
//           }, 1000)
//       }
//   });

//   // puts names into the DOM
//   let result = document.createElement('h5');
//   result.classList.add('result');
//   result.innerHTML = bestName;
//   result.style.opacity = '0';


//   nameOutput.appendChild(result);

//   setTimeout(() => {
//       result.style.opacity = '1';
//       result.style.transition = 'all 1.55s linear';
//       setTimeout(() => {
//           result.style.top = '3.5em';
//           result.style.transform = 'scale(1.25)';


//           setTimeout(() => {
//               result.style.transition = 'all 0.75s cubic-bezier(0.55, 0.085, 0.68, 0.53)';
//               result.style.top = '7em';
//               result.style.transform = 'scale(1.45)';
//               result.style.color = '#FF9800';

//               // closes the goddamn (oven) door
//               // No, it's much better to face these kinds of things
//               // with a sense of poise and rationality 🎩
//               outputFrame.classList.remove('open');
//               generateButton.classList.remove('disabled')

//           }, 1600)
//       }, 500);
//   }, 350);



//   generateButton.classList.add('activated');
//   setTimeout(() => {
//       generateButton.classList.remove('activated');
//   }, 850)

// };

class App extends Component {



  constructor(props) {
    super(props);
    this.state = {
      values : null

    };   
  } 


  // downloads the value list *once* (does not update dynamically)
  fetchValueList = () => {

    const dbRef = ref(database);

    get(child(dbRef, valuesDBPath)).then((snapshot) => {
      if (snapshot.exists()) {

        this.setState({values : snapshot.val()})
        console.log('value list updated');
      } else {
        console.log("Values were not read");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  // downloads the name list and updates whenever there's a change.
  fetchNameList = () => {
    const dbRef = ref(database, namesDBPath, );
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      nameList = data;
      console.log ('name list updated')
    })
  }


  componentDidMount() {
    this.fetchValueList();
    this.fetchNameList();

  }
  


  render() {
      return (
        <div className="App">
          <div>
          <p>🔥✨👨🏼‍💻✨🔥</p>
            <IntroPanel/>
            <IntakePanel valueList={this.state.values}/>
            <ValuesPanel/>
            <OutputPanel/>
          </div>
      </div>
          
      )
  }

}

export default App;
