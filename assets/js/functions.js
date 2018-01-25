
function work_section(){
  var projects = [
    { projId: '1', projTitle: 'Canyon IS', projImg: 'project1img.jpg', link:'http://canyonisd.net/' },
    { projId: '2', projTitle: 'Starlight Canyon', projImg: 'project2img.jpg', link:'https://www.starlightcanyon.com/' },
    { projId: '3', projTitle: 'Sandie Football', projImg: 'project3img.jpg', link:'https://www.sandiefootball.com/' },
    { projId: '4', projTitle: 'UCI Digital', projImg: 'project4img.jpg', link:'https://www.ucidigital.com/' },
    { projId: '5', projTitle: 'Rosas Wedding Services', projImg: 'project5img.jpg', link:'http://www.rosasweddingservices.com/' },
    { projId: '6', projTitle: 'Amarillo Venom', projImg: 'project6img.jpg', link:'https://www.govenom.com/' }
  ];

  var row = document.getElementsByClassName('work-row')[0];

  for(var x = 0; x < projects.length; x++){

    var grid4 = document.createElement("div");
    var project_wrap = document.createElement("div");
    var link = document.createElement("a");
    var p_img = document.createElement("img");
    var p_caption = document.createElement("div");
    var p_h2 = document.createElement("h2");

    grid4.className = "col-sm-4";
    project_wrap.className = "project-wrap";
    link.className = "work-item proj";
    p_img.className = "img-responsive";
    p_caption.className = "item-caption";


    var objId = projects[x].projId;
    var objTitle = projects[x].projTitle;
    var objImg = projects[x].projImg;
    var objLink = projects[x].link;

    p_img.src = "./assets/images/"+objImg;


    p_h2.appendChild(document.createTextNode(objTitle));

    p_caption.appendChild(p_h2);
    link.href = objLink;
    link.appendChild(p_caption);
    link.appendChild(p_img);

    project_wrap.appendChild(link);
    grid4.appendChild(project_wrap);

    row.appendChild(grid4);

  }
}

//Making the nav switch clases afte scrolling 600px
$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 600) {
    $('.header').addClass('switched-header');
    $('.header').removeClass('default');
    $('.logo1').addClass('hide');
    $('.logo2').removeClass('hide');
  }
  else {
    $('.header').addClass('default');
    $('.header').removeClass('switched-header');
    $('.logo2').addClass('hide');
    $('.logo1').removeClass('hide');
  }
});
$('#lines').click(function() {
  $(".toggle-mobile-btn").toggleClass("active");
  $(".main-nav ul").toggleClass("show");
});
