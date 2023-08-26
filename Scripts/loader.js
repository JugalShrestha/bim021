const loadingScreen = document.querySelector('.loading-screen')
const everything = document.querySelector('.everything')

const loadingAnimation = document.querySelector('.loading-screen .loading-animation')

loadingSpeed = 50

window.addEventListener('load',closeLoadingScreen)

function openLoadingScreen(){
    loadingScreen.style.display = "flex"
    loadingScreen.style.opacity = "100%"
}

function closeLoadingScreen(){  
    setTimeout(realCloseLoadingScreen,loadingSpeed)
    setTimeout(openEverything,(loadingSpeed + 100))
}

function realCloseLoadingScreen()
{
    loadingScreen.style.display = "none"
    loadingScreen.style.opacity = "0%"
}

function openEverything(){
    everything.style.display = "flex"
    setTimeout(realOpenEverything,(loadingSpeed/2))
}
function realOpenEverything(){
    everything.style.opacity = "100%"
}

function closeEverything(){
    everything.style.display = "none"
    everything.style.opacity = "0%"
}