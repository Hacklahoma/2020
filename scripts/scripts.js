/* tab navigations NOT UPDATED FOR 2020 */
// const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const tracksTab = document.getElementById("tracks-tab");
const faqTab = document.getElementById("faq-tab");
const scheduleTab = document.getElementById("schedule-tab");
const sponsorsTab = document.getElementById("sponserTab");
const locationTab = document.getElementById("location-tab");
const floorPlansTab = document.getElementById("floorplans-tab");
const prizesTab = document.getElementById("prizes-tab");
const hardwareTab = document.getElementById("hardware-tab");
// const backHome = document.getElementById("back-home");
// const registerButton = document.getElementById("register-button");
sponsorsTab.onclick = function() {jump("sponsors")};
tracksTab.onclick = function() {jump("tracks")};
faqTab.onclick = function() {jump("faq")};

  // homeTab.onclick = function() {jump("")};
try { aboutTab.onclick = function () { jump("about") }; } catch { }
try { scheduleTab.onclick = function() {jump("schedule")}; 
  locationTab.onclick = function() {jump("location")};
  floorPlansTab.onclick = function() {jump("floors")};
  prizesTab.onclick = function() {jump("prizes")};
  hardwareTab.onclick = function() {jump("hardware")};
} catch{ }
  // registerButton.onclick = function() {jump("register")};


function jump(h) {
  if(h == "top") {
    scroll(0,0);
  }
  else {
    var url = location.href;
    location.href = "#" + h;
    if(h == "hardware") {
      scrollBy({
        top: -100
      });
    }
    scrollBy({
      top: -100
    });
    history.replaceState(null,null,url);
  }
}

/* reveals background of nav bar on scroll */
update();
window.onscroll = function() {
  update();
}
addEventListener("resize", update);


function update() {
  var currentScrollPos = window.pageYOffset;
  if (30 > currentScrollPos) {
    document.getElementById("nav-background").style.top = "-55px";
  } else {
      document.getElementById("nav-background").style.top = "0px";
  }
}

/* manages hamburger menu */
const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".hamburger .line");
const navLinks = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach(i => {
    i.classList.toggle("open");
  });
});

// makes sure the hamburger menu is closed when entering mobile view
addEventListener("resize", () => {
  if(window.innerWidth > 720 && navLinks.classList.contains("open")) {
    navLinks.classList.toggle("open");
    lines.forEach(i => {
      i.classList.toggle("open");
    });
  }
});

/* FAQ systems */
const faqAnswers = document.querySelectorAll(".faq-item-a");
const faqImgs = document.querySelectorAll(".faq-item-img");

function faqClicked(ref) {
  var refChildren = ref.childNodes;
  // getting references from children
  for (var i = 0; i < ref.childNodes.length; i++) {
      if (ref.childNodes[i].className == "faq-item-img") {
        var refImg = ref.childNodes[i];
        continue;
      }
      if (ref.childNodes[i].className == "faq-item-a") {
        var refAns = ref.childNodes[i];
        continue;
      }
  }
  // setting values
  if(refAns.style.maxHeight != "200px") {
    faqAnswers.forEach(i => {
      i.style.maxHeight = "0";
    });
    faqImgs.forEach(i => {
      i.style.transform = "rotate(0)"
      i.style.marginTop = "18px";
    });
    refImg.style.transform = "rotate(180deg)"
    refAns.style.maxHeight = "200px";
  }
  else {
    refImg.style.transform = "rotate(0)"
    refAns.style.maxHeight = "0";
  }
}

// assign to columns
const faqColumns = document.querySelectorAll(".faq-column");
const faqItems = document.querySelectorAll(".faq-item");

faqUpdate();
window.addEventListener("resize", faqUpdate);
function faqUpdate() {
  var columns;
  if(window.innerWidth > 907) {
    columns = 3;
  }
  else if((window.innerWidth >= 600) || (window.innherWidth <= 907)) {
    columns = 2;
  }
  else {
    columns = 1;
  }

  for(var i = 0; i < faqItems.length; i++) {
    faqColumns[i%columns].appendChild(faqItems[i]);
  }
}

/* floor plans */
const devon = document.getElementById("devon");
const gallogly = document.getElementById("gallogly");
const epf = document.getElementById("epf");

const devonContainer = document.getElementById("devonContainer");
const galloglyContainer = document.getElementById("galloglyContainer");
const epfContainer = document.getElementById("epfContainer");

const navLeft = document.getElementById("navLeft");
const navRight = document.getElementById("navRight");

try {
  devon.onclick = function () { floorPlan("devon") };
  gallogly.onclick = function () { floorPlan("gallogly") };
  epf.onclick = function () { floorPlan("epf") };
  navLeft.onclick = function () { floorPrev() };
  navRight.onclick = function () { floorNext() };
} catch {}

var currentBuilding = "devon";
var currentFloor = Math.floor(Number.MAX_SAFE_INTEGER / 2);

function floorPlan(building) {
  currentBuilding = building;
  const tab = document.getElementById(building);
  const container = document.getElementById(building + "Container");
  devon.classList.remove("active");
  gallogly.classList.remove("active");
  epf.classList.remove("active");
  devonContainer.classList.remove("active");
  galloglyContainer.classList.remove("active");
  epfContainer.classList.remove("active");
  container.classList.add("active");
  tab.classList.add("active");
}
function floorNext() {
  if(currentBuilding == "devon") {
    document.getElementById(currentBuilding + "Floor" + ((currentFloor + 1) % 5)).classList.add("active");
    document.getElementById(currentBuilding + "Floor" + ((currentFloor) % 5)).classList.remove("active");
    currentFloor++;
  }
  else {
    document.getElementById(currentBuilding + "Floor0").classList.toggle("active");
    document.getElementById(currentBuilding + "Floor1").classList.toggle("active");
  }
}
function floorPrev() {
  if(currentBuilding == "devon") {
    document.getElementById(currentBuilding + "Floor" + ((currentFloor - 1) % 5)).classList.add("active");
    document.getElementById(currentBuilding + "Floor" + ((currentFloor) % 5)).classList.remove("active");
    currentFloor--;
  }
  else {
    document.getElementById(currentBuilding + "Floor0").classList.toggle("active");
    document.getElementById(currentBuilding + "Floor1").classList.toggle("active");
  }
}

// /* countdown */
// var countDownDate = new Date("Jan 29, 2020 23:59:59").getTime();

// // Update the count down every 1 second
//   var x = setInterval(function () {
//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     try {
//       // Display the result in the element with id="demo"
//       document.getElementById("countdown").innerHTML = "Registration closes in " + days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s!";
//     } catch {}
//     // If the count down is finished, write some text
//     if (distance < 0) {
//       clearInterval(x);
//       try {
//         document.getElementById("countdown").innerHTML = "Registration is closed!";
//         document.getElementById("registerButton").innerHTML = "Day of Info";
//         document.getElementById("buttonHref").href = "./live";
//         document.getElementById("learnMore").innerHTML = "";
//       } catch {}
//     }
//   }, 1000);

/* scroll reveal */
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});
