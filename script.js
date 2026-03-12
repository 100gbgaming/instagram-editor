function updateProfile(){

username.innerText=usernameInput.value
name.innerText=nameInput.value
followers.innerText=followersInput.value
following.innerText=followingInput.value
bio.innerText=bioInput.value
reelViews.innerText=reelViewsInput.value
likes.innerText=likesInput.value

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

/* ADD POST */

postUpload.onchange=function(e){

const file=e.target.files[0]
const reader=new FileReader()

reader.onload=function(){

const img=document.createElement("img")
img.src=reader.result

postsGrid.appendChild(img)

posts.innerText=postsGrid.children.length

}

reader.readAsDataURL(file)

}

/* ADD STORY */

storyUpload.onchange=function(e){

const file=e.target.files[0]
const reader=new FileReader()

reader.onload=function(){

const story=document.createElement("div")
story.className="story"
story.style.backgroundImage=`url(${reader.result})`

stories.appendChild(story)

}

reader.readAsDataURL(file)

}

/* TABS */

function showPosts(){

postsGrid.style.display="grid"
reelsPage.style.display="none"

}

function showReels(){

postsGrid.style.display="none"
reelsPage.style.display="block"

}
