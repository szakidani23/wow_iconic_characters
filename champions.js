"use strict";
/// I wont define Anduin because he is the basic of the website's html,css. His data,img etc. will appear after a simple website reload.

//////////////////////////////////////////////////////////////////////////////
/////////////////////////// JAINA PROUDMOORE /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Function that handles character changes
function changeCharacter(characterData) {
  // Array of datas
  const {
    backgroundImage,
    backgroundPosition,
    name,
    description,
    menuGradient,
    mobileMenuGradient,
    quote,
    closeMenu,
    openMenu,
    buttonColor,
    characterLink,
    footerLogo,
    themeSong,
    songLink,
  } = characterData;

  // Changing the background image and it's position
  document.body.style.backgroundImage = backgroundImage;
  document.body.style.backgroundPosition = backgroundPosition;

  // Changing the Character's name
  document.querySelector(".content__champion--name").innerHTML = name;

  // Changing the Character's description
  document.querySelector(".content__champion--description").textContent =
    description;

  // Changing the Menu hover color
  const menuItems = document.querySelectorAll(".menuItem");
  menuItems.forEach((item) => {
    item.style.backgroundImage = menuGradient;
  });

  // Changing mobile menu colors
  document.querySelector(".navlinks").style.backgroundImage =
    mobileMenuGradient;
  document.querySelector(".hidemenu").style.color = closeMenu;
  document.querySelector(".showmenu").style.color = openMenu;

  // Changing the Character's quote
  document.querySelector(".footer__quote").innerHTML = quote;

  // Changing the button's color and link
  document.querySelector(".content__btn").style.backgroundColor = buttonColor;
  document.querySelector(".content__champion--link").href = characterLink;

  // Change footer logo
  document.getElementById("footerImg").src = footerLogo;

  // Change YouTube songLink -> credit for the Author
  document.querySelector(".credit__link").href = songLink;
  // Changing the themeSong
  function changeAudioSource(newSource) {
    document.getElementById("themeSource").src = newSource;
    document.getElementById("themeSong").load();
  }
  changeAudioSource(themeSong);
}

// Character data objects
const jainaData = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('images/jaina.webp')",
  backgroundPosition: "50% 50%",
  name: "Jaina Proudmoore<br>Daughter Of The Sea",
  description:
    "Jaina Proudmoore, renowned as Daughter of the Sea in Warcraft lore, is a powerful sorceress and diplomat. Her journey is marked by tragedy, resilience, and redemption, as she navigates the complexities of war and peace, embodying courage, wisdom, and a steadfast commitment to her principles.",
  menuGradient: "linear-gradient(to right, #afa57f 50%, #f7fefc 50%)",
  mobileMenuGradient: "linear-gradient(180deg, #7d775b 0%, #7d775b 100%)",
  quote: `"I'm sorry Arthas but<br>I can't watch you do this.."`,
  closeMenu: "#afa57fa0",
  openMenu: "#afa57fa0",
  buttonColor: "#afa57fa0",
  characterLink: "https://wowpedia.fandom.com/wiki/Jaina_Proudmoore",
  footerLogo: "images/alliance_logo.webp",
  songLink: "https://www.youtube.com/watch?v=I-jWJgPsPvQ",
  themeSong: "theme_songs/jaina_song.mp3",
};

// Event listeners for clicking on the champion in the menu
document.getElementById("jainaBig").addEventListener("click", function () {
  changeCharacter(jainaData);
  hideMenu();
});
document.getElementById("jainaSmall").addEventListener("click", function () {
  changeCharacter(jainaData);
  hideMenu();
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////// Sylvanas Windrunner //////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const sylvanasData = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('images/sylvanas.webp')",
  backgroundPosition: "20% 10%",
  name: "Sylvanas Windrunner<br>Queen of the Forsaken",
  description:
    "Sylvanas Windrunner's narrative has been defined by her bold and enigmatic maneuvers, sparking intrigue and controversy alike. As her actions blur the lines between heroism and villainy, her role in shaping the fate of Azeroth becomes increasingly pivotal, leaving allies and adversaries alike questioning her true intentions.",
  menuGradient: "linear-gradient(to right, #aa5907 50%, #f7fefc 50%)",
  mobileMenuGradient: "linear-gradient(180deg, #4c2905 0%, #4c2905 100%)",
  quote:
    "You call for peace when it suits you, little lion.<br>But you are quick enough to kill.",
  closeMenu: "#aa5907",
  openMenu: "#aa5907",
  buttonColor: "#aa59079b",
  characterLink: "https://wowpedia.fandom.com/wiki/Sylvanas_Windrunner",
  footerLogo: "images/horde_logo.png",
  songLink: "https://www.youtube.com/watch?v=oNw-NzrabXA",
  themeSong: "theme_songs/sylvanas_song.mp3",
};

document.getElementById("sylvanasBig").addEventListener("click", function () {
  changeCharacter(sylvanasData);
  hideMenu();
});
document.getElementById("sylvanasSmall").addEventListener("click", function () {
  changeCharacter(sylvanasData);
  hideMenu();
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////// The Lich King  ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const lichkingData = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('images/lichking.webp')",
  backgroundPosition: "20% 50%",
  name: "The Lich King<br>Dark Lord of the Dead",
  description:
    "The Lich King, once Prince Arthas Menethil, is a pivotal figure in Warcraft lore. Bound to the cursed helm of the Lich King, he commands the Scourge, spreading death and despair across Azeroth. His tragic tale reflects themes of power, sacrifice, and the relentless pursuit of domination.",
  menuGradient: "linear-gradient(to right, #29d1ec 50%, #f7fefc 50%)",
  mobileMenuGradient: "linear-gradient(180deg, #177584 0%, #177584 100%)",
  quote: "I would gladly bear any curse<br>to save my homeland.",
  closeMenu: "#29d1ec",
  openMenu: "#29d1ec",
  buttonColor: "#29d2eca3",
  characterLink: "https://wowpedia.fandom.com/wiki/Lich_King",
  footerLogo: "images/lichking_logo.webp",
  songLink: "https://www.youtube.com/watch?v=NSeyA08QsIs",
  themeSong: "theme_songs/lichking_song.mp3",
};

document.getElementById("lichkingBig").addEventListener("click", function () {
  changeCharacter(lichkingData);
  hideMenu();
});
document.getElementById("lichkingSmall").addEventListener("click", function () {
  changeCharacter(lichkingData);
  hideMenu();
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////// Gul'Dan //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const guldanData = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('images/guldan.webp')",
  backgroundPosition: "20% 50%",
  name: "Gul'Dan<br>Destroyer of Dreams",
  description:
    "Gul'dan, the powerful orc warlock, is a pivotal figure in Warcraft lore. Master manipulator and former apprentice to the Burning Legion, his thirst for power knows no bounds. His dark magic and cunning schemes have left a lasting mark on Azeroth, shaping its history through betrayal and destruction.",
  menuGradient: "linear-gradient(to right, #8ff63f 50%, #f7fefc 50%)",
  mobileMenuGradient: "linear-gradient(180deg, #467820 0%, #467820 100%)",
  quote: "This is new dawn, the time of the horde.<br>Be feared or be fuel!",
  closeMenu: "#8ff63f",
  openMenu: "#8ff63f",
  buttonColor: "#8ef63f8f",
  characterLink: "https://wowpedia.fandom.com/wiki/Gul%27dan",
  footerLogo: "images/horde_logo.png",
  songLink: "https://www.youtube.com/watch?v=I0Rju5pBn70",
  themeSong: "theme_songs/guldan_song.mp3",
};

document.getElementById("guldanBig").addEventListener("click", function () {
  changeCharacter(guldanData);
  hideMenu();
});
document.getElementById("guldanSmall").addEventListener("click", function () {
  changeCharacter(guldanData);
  hideMenu();
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////// Illidan //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const illidanData = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('images/illidan.webp')",
  backgroundPosition: "72% 50%",
  name: "Illidan Stormrage<br>Lord Of Outland",
  description:
    "Illidan Stormrage, the enigmatic night elf, embodies complexity in Warcraft lore. Both hero and villain, his path is marked by sacrifice and betrayal. Empowered by demonic energies, he pursues power relentlessly, driven by a vision of destiny. His actions shape Azeroth's fate, blurring the line between redemption and damnation.",
  menuGradient: "linear-gradient(to right, #8ff63f 50%, #f7fefc 50%)",
  mobileMenuGradient: "linear-gradient(180deg, #467820 0%, #467820 100%)",
  quote: "YOU ARE NOT PREPARED!",
  closeMenu: "#8ff63f",
  openMenu: "#8ff63f",
  buttonColor: "#8ef63f8f",
  characterLink: "https://wowpedia.fandom.com/wiki/Illidan_Stormrage",
  footerLogo: "images/illidan_logo.png",
  songLink: "https://www.youtube.com/watch?v=2MgpLpAoWIk",
  themeSong: "theme_songs/illidan_song.mp3",
};

document.getElementById("illidanBig").addEventListener("click", function () {
  changeCharacter(illidanData);
  hideMenu();
});
document.getElementById("illidanSmall").addEventListener("click", function () {
  changeCharacter(illidanData);
  hideMenu();
});
