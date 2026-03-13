function updateProfile(){

document.getElementById("username").innerText =
document.getElementById("usernameInput").value

document.getElementById("name").innerText =
document.getElementById("nameInput").value

document.getElementById("followers").innerText =
document.getElementById("followersInput").value

document.getElementById("following").innerText =
document.getElementById("followingInput").value

document.getElementById("bio").innerText =
document.getElementById("bioInput").value

document.getElementById("reelViews").innerText =
document.getElementById("reelViewsInput").value

document.getElementById("likes").innerText =
document.getElementById("likesInput").value

}


/* PROFILE PHOTO */

document.getElementById("profileUpload").onchange=function(e){

const file=e.target.files[0]
if(!file) return

const reader=new FileReader()

reader.onload=function(){
document.getElementById("profilePic").src=reader.result
}

reader.readAsDataURL(file)

}


/* ADD POST */

document.getElementById("postUpload").onchange=function(e){

const file=e.target.files[0]
if(!file) return

const reader=new FileReader()

reader.onload=function(){

const img=document.createElement("img")
img.src=reader.result

document.getElementById("postsGrid").appendChild(img)

document.getElementById("posts").innerText =
document.getElementById("postsGrid").children.length

}

reader.readAsDataURL(file)

}


/* ADD STORY */

document.getElementById("storyUpload").onchange=function(e){

const file=e.target.files[0]
if(!file) return

const reader=new FileReader()

reader.onload=function(){

const story=document.createElement("div")
story.className="story"
story.style.backgroundImage=`url(${reader.result})`

document.getElementById("stories").appendChild(story)

}

reader.readAsDataURL(file)

}


/* TABS */

function showPosts(){

document.getElementById("postsGrid").style.display="grid"
document.getElementById("reelsPage").style.display="none"

}

function showReels(){

document.getElementById("postsGrid").style.display="none"
document.getElementById("reelsPage").style.display="block"

}


/* LOAD ICONS */

lucide.createIcons();
