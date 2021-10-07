function done(){
    window.location.href = 'done.html';
}

var count = 1;
function viewDivLogin(){
    if (count == 1) {
        $(".openLogin").append("<div id='floatBlock'><p>Login</p><input type='text' name='login'"+
          " id='user' placeholder='Digite seu usuario'><br><br><p>Senha</p><input type='password' "+
          "name='senha' placeholder='Digite sua senha'><br><br><button type='submit' name='logar'"+
          " onclick='done()'>Entrar</button></div>");
        $(".btn").text("Fechar");
      count = 2;
    } else{
        $(".openLogin #floatBlock").remove();
      $(".btn").text("Logar");
        count = 1;
    }
}

const videos = [
  {message: 'teste', image: '..\\img\\pubg.jpg'},
  {message: 'teste2', image: '..\\img\\pubg.jpg'}
]

function createVideos(videos){

    videos.forEach( ({message , image}) => {

        let classVideos = document.getElementById('videos');
        let messageVideo = document.createElement('p');
        messageVideo.innerHTML = message;

        let imageVideo = new Image()
        imageVideo.src = image;

        let div = document.createElement('div');
        div.appendChild(messageVideo);
        div.appendChild(imageVideo);

        classVideos.appendChild(div);
    });
}


createVideos(videos);