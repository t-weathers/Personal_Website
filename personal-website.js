document.getElementById('linkhome').addEventListener("mouseover", hoverhome);
document.getElementById('link1').addEventListener("mouseover", hover1);
document.getElementById('link2').addEventListener("mouseover", hover2);
document.getElementById('link3').addEventListener("mouseover", hover3);

document.getElementById('linkhome').addEventListener("mouseout", exithoverhome);
document.getElementById('link1').addEventListener("mouseout", exithover1);
document.getElementById('link2').addEventListener("mouseout", exithover2);
document.getElementById('link3').addEventListener("mouseout", exithover3);

document.getElementById('linkhome').addEventListener("click", clickhome);
document.getElementById('link1').addEventListener("click", clicknews);
document.getElementById('link2').addEventListener("click", clickcontact);
document.getElementById('link3').addEventListener("click", clickabout);

document.getElementById('Linkedin').addEventListener("click", launchLinkedin);
function hoverhome(){
  document.getElementById("linkhome").style.color = "lightskyblue";
}
function hover1(){
  document.getElementById("link1").style.color = "lightskyblue";
}
function hover2(){
  document.getElementById("link2").style.color = "lightskyblue";
}
function hover3(){
  document.getElementById("link3").style.color = "lightskyblue";
}
function exithoverhome(){
  document.getElementById("linkhome").style.color = "silver";
}
function exithover1(){
  document.getElementById("link1").style.color = "silver";
}
function exithover2(){
  document.getElementById("link2").style.color = "silver";
}
function exithover3(){
  document.getElementById("link3").style.color = "silver";
}
function clickhome(){
  window.open ('personal_website.html','_self');
}
function clickabout(){
  window.open ('personal-website-about.html','_self');
}
function clicknews(){
  window.open ('personal-website-news.html','_self');
}
function clickcontact(){
  window.open("personal-website-contact.html",'_self');
}
function launchLinkedin(){
  window.open("http://www.linkedin.com/in/thomas-weathers-29109114a");
}
