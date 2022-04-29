// ==================Banner Caregories Slider =============//

$('#catogries-wraper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev controle-btn"> <img src="./images/Icon ionic-ios-arrow-backword.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next controle-btn"> <img src="./images/Icon ionic-ios-arrow-forward.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.carosel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev controle-btn-slider"> <img src="./images/arrow-left-bkack.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next controle-btn-slider"> <img src="./images/arrow-right-black.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// ============================Enable and Diseble Body Scroll===============//
function disableScroll() {
  document.querySelector("body").style.overflow = "hidden"
}

function enableScroll() {
document.querySelector("body").style.overflow = "initial"
}


// ============================ Responsive Menu ============================//

var menuPannel = document.querySelector('.links');
var menuBtn = document.querySelector('.menu');
var closeBtn = document.querySelector('.close-icon');
var overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function(){
  menuPannel.style.left = '0'
  console.log('open');
  overlay.style.display = 'initial'
  disableScroll()
})
 
closeBtn.addEventListener('click', function(){
  menuPannel.style.left = '-100%'
  console.log('closed');
  overlay.style.display = 'none'
  enableScroll()
})

// =====================Catergory dropdown ========================//

function opendropdown(){
  document.querySelector('.category-box').style.display = 'initial';
  document.querySelector(".bridg").style.height = '20vw'
}

function closedropdown(){
  document.querySelector('.category-box').style.display = 'none';
  document.querySelector(".bridg").style.height = 'initial'
}
