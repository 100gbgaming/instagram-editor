function updateProfile(){

username.innerText=usernameInput.value

posts.innerText=postsInput.value

followers.innerText=followersInput.value

following.innerText=followingInput.value

}

/* PROFILE PHOTO */

profileUpload.onchange=function(e){

const file=e.target.files[0]

const reader=new FileReader()

reader.onload=function(){

profilePic.src=reader.result

}

reader.readAsDataURL(file)

}


/* PHONE SIZE */

function updatePhoneSize(){

phone.style.width=phoneWidth.value+"px"

phone.style.height=phoneHeight.value+"px"

}


/* TOGGLES */

function toggleNavbar(){

if(navbar.style.display==="none")

navbar.style.display="flex"

else

navbar.style.display="none"

}


function toggleStats(){

document.querySelector(".stats").classList.toggle("hidden")

}


function toggleProfile(){

document.querySelector(".profile-section").classList.toggle("hidden")

}


/* ICONS */

lucide.createIcons();
