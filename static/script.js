
let isSender = false;


document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

function Switch(){



    let switchBtn = document.getElementById("sender-switch")

    isSender = !isSender
    if(isSender){
        switchBtn.innerText = "Switch to receiver"
        switchBtn.style.marginTop = "7%"
        document.forms[0].style.display = "block"
        document.forms[1].style.display = "none"
    }
    else{
        
      switchBtn.innerText = "Swtich to sender"
      switchBtn.style.marginTop = "10%"
      document.forms[0].style.display = "none"
      document.forms[1].style.display = "block"
    }
    


}



function SubmitDownload(){
  document.forms[1].submit()
  document.getElementById("download-btn").value = "Loading..."
  setTimeout(() => {
    document.getElementById("download-btn").value = "Download"
  },4000)

}

function Help(){

    $("#infoBtn").fadeOut(200)

    let helpDiv = document.createElement("div")
    helpDiv.innerHTML = '<br> <br> <img src="/static/howto.jpg" style="width:100%; height:auto"><br><br><br><br>'
    helpDiv.id = "help"
    document.body.appendChild(helpDiv)

    setTimeout(() => {

    parent.location.hash = "#help";
    },100)
  
    document.getElementsByClassName("fa fa-question")[0].className = "fa fa-arrow-up"
    document.getElementsByClassName("question-btn-li")[0].firstChild.href = "javascript: BackFromHelp()"

}

function BackFromHelp(){
    $("#infoBtn").fadeIn(200)

    parent.location.hash = ""

    setTimeout(() => {
    document.getElementById("help").remove()

    },1000) 
    document.getElementsByClassName("fa fa-arrow-up")[0].className = "fa fa-question"
    document.getElementsByClassName("question-btn-li")[0].firstChild.href = "javascript: Help()"
}

function Info(){


    document.getElementsByClassName("context")[0].innerHTML += '<div id="info" style="background-color:#4e54c8"> <img class="socials" src="/static/githubicon.png" height="30px;" onclick="window.open(\'https://github.com/karimk123/file-sender\', \'_blank\') "> <img src="/static/discordicon.png" class="socials"  height="30px;" onclick="window.open(\'https://discord.gg/YawhqQYBn8\', \'_blank\') "> <img class="socials" src="/static/twittericon.png" height="30px;"><p style = "color:white;">Made by kimo</p></div>'


   
    setTimeout(() => {

    parent.location.hash = "#info";
    },1)
  
    document.getElementsByClassName("fa fa-info")[0].className = "fa fa-arrow-up"
    document.getElementsByClassName("question-btn-li")[1].firstChild.href = "javascript: BackFromInfo()"
    $("#helpBtn").fadeOut(200)

}

function BackFromInfo(){
    $("#helpBtn").fadeIn(200)

    parent.location.hash = ""

    setTimeout(() => {
    document.getElementById("info").remove()

    },300) 
    document.getElementsByClassName("fa fa-arrow-up")[0].className = "fa fa-info"
    document.getElementsByClassName("question-btn-li")[1].firstChild.href = "javascript: Info()"

}