//Створити сторінку, що показує нумерований список пісень:

const playList = [
  {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song:"BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song:"ENTER SANDMAN"
  }
  ];

const input = document.querySelector(".lsn_input_author");
let userInput = null;
input.addEventListener("input", e => userInput = e.target.value);

const renderItem = (name) => {
  const newPlayListItem = document.createElement("li");
  newPlayListItem.innerText = `${name}`;

  return newPlayListItem;
}


const inputSecond = document.querySelector(".lsn_input_song");
let userInputSecond =null;
input.addEventListener("input", e => userInputSecond = e.target.value);
console.log(inputSecond)

const renderSong = (link) => {
  const newPlayListSong = document.createElement("span");
  newPlayListSong.innerText = `${link}`

  return newPlayListSong;
}


const playListElements = document.querySelector(".lsn_box_list");
const button = document.querySelector(".lsn_button");
const buttonSecond = document.querySelector(".lsn_button_dlt");

if(playListElements) {

  playList.forEach((item) => {
    const newPlayListItem = renderItem(item.author)
    playListElements.appendChild(newPlayListItem);

    const newPlayListSong = renderSong(item.song)
    playListElements.appendChild(newPlayListSong);
  })

  button.addEventListener("click", () => {

    if(!userInput){
      return
    }
    const newPlayListItem = renderItem(userInput);
    playListElements.appendChild(newPlayListItem);
    input.value = "";

    if (!userInputSecond) {
      return
    }
    const newPlayListSong = renderSong(userInputSecond);
    playListElements.appendChild(newPlayListSong);
    inputSecond.value = "";
  })

  buttonSecond.addEventListener("click", () => {
    const deletedLi = document.querySelector(".lsn_box_list li")
    playListElements.removeChild(deletedLi)

    const deletedSpan = document.querySelector("span")
    playListElements.removeChild(deletedSpan)
  })
}
