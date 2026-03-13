// UPDATE PROFILE INFO

function updateProfile(){

const usernameInputEl = document.getElementById("usernameInput")
const nameInputEl = document.getElementById("nameInput")
const followersInputEl = document.getElementById("followersInput")
const followingInputEl = document.getElementById("followingInput")
const bioInputEl = document.getElementById("bioInput")
const reelViewsInputEl = document.getElementById("reelViewsInput")
const likesInputEl = document.getElementById("likesInput")

const usernameEl = document.getElementById("username")
const nameEl = document.getElementById("name")
const followersEl = document.getElementById("followers")
const followingEl = document.getElementById("following")
const bioEl = document.getElementById("bio")
const reelViewsEl = document.getElementById("reelViews")
const likesEl = document.getElementById("likes")

if(usernameInputEl.value) usernameEl.innerText = usernameInputEl.value
if(nameInputEl.value) nameEl.innerText = nameInputEl.value
if(followersInputEl.value) followersEl.innerText = followersInputEl.value
if(followingInputEl.value) followingEl.innerText = followingInputEl.value
if(bioInputEl.value) bioEl.innerText = bioInputEl.value
if(reelViewsInputEl.value) reelViewsEl.innerText = reelViewsInputEl.value
if(likesInputEl.value) likesEl.innerText = likesInputEl.value

}


// PROFILE PHOTO UPLOAD

document.getElementById("profileUpload").addEventListener("change", function(e){

const file = e.target.files[0]
if(!file) return

const reader = new FileReader()

reader.onload = function(){
document.getElementById("profilePic").src = reader.result
}

reader.readAsDataURL(file)

})


// ADD POST IMAGE

document.getElementById("postUpload").addEventListener("change", function(e){

const file = e.target.files[0]
if(!file) return

const reader = new FileReader()

reader.onload = function(){

const img = document.createElement("img")
img.src = reader.result

document.getElementById("postsGrid").appendChild(img)

const totalPosts = document.getElementById("postsGrid").children.length
document.getElementById("posts").innerText = totalPosts

}

reader.readAsDataURL(file)

})


// ADD STORY

document.getElementById("storyUpload").addEventListener("change", function(e){

const file = e.target.files[0]
if(!file) return

const reader = new FileReader()

reader.onload = function(){

const story = document.createElement("div")
story.className = "story"
story.style.backgroundImage = `url(${reader.result})`

document.getElementById("stories").appendChild(story)

}

reader.readAsDataURL(file)

})


// TABS

function showPosts(){

document.getElementById("postsGrid").style.display = "grid"
document.getElementById("reelsPage").style.display = "none"

}

function showReels(){

document.getElementById("postsGrid").style.display = "none"
document.getElementById("reelsPage").style.display = "block"

}
