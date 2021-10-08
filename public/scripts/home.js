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
  {message: 'Video 1', image: '..\\img\\ep1.jpg', href: 'https://www.youtube.com/channel/UCKcl2rgbCqK9_njUVfTcUIA/featured' , views: 300},
  {message: 'Video 2', image: '..\\img\\ep2.jpg', href: 'https://www.youtube.com/channel/UCKcl2rgbCqK9_njUVfTcUIA/featured' , views: 150},
  {message: 'Video 3', image: '..\\img\\ep3.png', href: 'https://www.youtube.com/channel/UCKcl2rgbCqK9_njUVfTcUIA/featured' , views: 1254},
  {message: 'Video 4', image: '..\\img\\ep4.png', href: 'https://www.youtube.com/channel/UCKcl2rgbCqK9_njUVfTcUIA/featured' , views: 3008}
]

function createVideos(videos){

    videos.forEach( ({message , image, href, views}) => {

        let classVideos = document.getElementById('videos');
        let messageVideo = document.createElement('p');
        messageVideo.innerHTML = message;
        //messageVideo.className

        let youtube = document.createElement('a');
        youtube.href = href;

        let imageVideo = new Image()
        imageVideo.src = image;

        youtube.appendChild(imageVideo);

        let div = document.createElement('div');
        div.appendChild(messageVideo);
        div.appendChild(youtube);

        classVideos.appendChild(div);
    });
}


createVideos(videos);