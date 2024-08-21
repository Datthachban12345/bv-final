src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
// phàn button
// const btnChung = document.querySelectorAll(".pdte");
// btnChung.forEach(function(nameItem,X){
//   nameItem.addEventListener("mouseover",function(){
//     console.log("he;")
//     btnChung[X].classList.add('active');
//   })
// })
//   btnChung.forEach(function(nameItem,X){
//     nameItem.addEventListener("mouseout",function(){
//       btnChung[X].classList.remove('active');
//     })
    
// })  
// phần menu
let navToggle = document.querySelector('.header_menu');
let headerNavbar = document.querySelector('.header-navbar');
var headerClick = document.querySelector('.header-navbar-main');
var navToggleActive = document.querySelector('.open');
let bars = document.querySelectorAll('.bar');
const detailMenu = document.querySelector(".header_child-below");
const hiddenItem = document.querySelector('.header-navbar-bar');
var navNumber = 0;
function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'));
  headerNavbar.classList.toggle("active");
  document.querySelector(".header-navbar-main").classList.toggle("active");
  if(document.querySelector(".header_child-above").style.opacity == 1){
    document.querySelector(".header_child-above").style.opacity = "0.8"
  }else{
    document.querySelector(".header_child-above").style.opacity = "1"
  }
  
  setTimeout(function (){
    hiddenItem.classList.toggle("active");
  }, 450);
  bars.forEach(cong => {
    cong.classList.toggle("open");
  });
}
function closeHeader(e) {
  bars.forEach(bar => bar.classList.toggle('x'));
  headerNavbar.classList.toggle("active");
  document.querySelector(".header-navbar-main").classList.toggle("active");
  if(document.querySelector(".header_child-above").style.opacity == 1){
    document.querySelector(".header_child-above").style.opacity = "0.8"
  }else{
    document.querySelector(".header_child-above").style.opacity = "1"
  }
  setTimeout(function (){
    hiddenItem.classList.toggle("active");
  }, 450);
  bars.forEach(cong => {
    cong.classList.toggle("open");
  });
}
function closeHeaderFail(e) {
  e.stopPropagation();
}
navToggle.addEventListener('click', toggleHamburger);
headerNavbar.addEventListener('click', closeHeader);
headerClick.addEventListener('click', closeHeaderFail);

// back-to-top
const btt = document.querySelector('.back-to-top'); //back-to-top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btt.classList.add('show');
    } else {
      btt.classList.remove('show');
    }
}

  // phần img
  // ccc= ['img_center','img_left-1','img_right-1','img_left-2','img_right-2','img_left-3','img_right-3']
   // ccc = ['translateX(-0.0172596px) translateZ(-248.856px) rotateY(-2.61429deg)','translateX(12.2038px) translateZ(-159.63px) rotateY(23.3973deg)','translateX(-22.3162px) translateZ(-115.178px) rotateY(-28.6784deg)','translateX(109.825px) translateZ(134.706px) rotateY(49.4614deg)','translateX(-146.799px) translateZ(214.616px) rotateY(-54.7425deg)','translateX(352.45px) translateZ(564.341px) rotateY(74.9869deg)','translateX(-393.795px) translateZ(623.157px) rotateY(-78.1398deg)']
  // ccc = ['img_right-1','img_center,img_right2,img_left1,img_right3,'img_left-2,img-left-3];
  // ccc = ['translateX(14.8812px) translateZ(-146.922px) rotateY(25.0131deg)','translateX(113.125px) translateZ(142.203px) rotateY(49.9737deg)','translateX(-0.000140192px) translateZ(-249.954px) rotateY(-0.525486deg)','translateX(352.45px) translateZ(564.341px) rotateY(74.9869deg)','translateX(-17.8389px) translateZ(-133.761px) rotateY(-26.5896deg)','translateX(-393.795px) translateZ(623.157px) rotateY(-78.1398deg)','translateX(-131.385px) translateZ(182.327px) rotateY(-52.6537deg)']
  // ddd = ['translateX(-17.8389px) translateZ(-133.761px) rotateY(-26.5896deg)','translateX(-0.000140192px) translateZ(-249.954px) rotateY(-0.525486deg)','translateX(-131.385px) translateZ(182.327px) rotateY(-52.6537deg)','translateX(14.8812px) translateZ(-146.922px) rotateY(25.0131deg)','translateX(-393.795px) translateZ(623.157px) rotateY(-78.1398deg)','translateX(113.125px) translateZ(142.203px) rotateY(49.9737deg)','translateX(352.45px) translateZ(564.341px) rotateY(74.9869deg)']
  // bb = 0;

  // nextImg.addEventListener("click",function(){
  //   imgList = [];
    
  //   numberSlide.forEach(function(cong, X) {
  //     var rect = cong.getBoundingClientRect().top;
  //     imgList[X] = rect;
      
  //   });
  //   var MaxtoMin = [...imgList].sort(function(a, b) {
  //       return b - a; // Sắp xếp giảm dần
  //   });
  //   bb = bb + (numberSlide[0].offsetWidth);
  //   for(var i=0; i < MaxtoMin.length; i++){
  //     for(var j=0; j < imgList.length; j++){
  //       if(MaxtoMin[i] == imgList[j]){
  //         // numberSlide[j].style.removeProperty("transition-duration");
  //         // numberSlide[j].classList.add(ccc[i]);
  //         numberSlide[j].style.transform = ccc[i];
  //         numberSlide[j].style.left = '-'+bb +'px';
  //         numberSlide[j].style.transition = 'all .5s ease';
  //         console.log(numberSlide[j].style.left);
  //       }
  //     }
  //   }
    
  // })
  // prevImg.addEventListener("click",function(){
  //   imgList1 = [];
  //   numberSlide.forEach(function(cong, X) {
  //     var rect = cong.getBoundingClientRect().top;
  //     imgList1[X] = rect;
  //     console.log(rect);
  //     console.log(cong);
  //   });
  //   var MaxtoMin = [...imgList1].sort(function(a, b) {
  //       return b - a; // Sắp xếp giảm dần
  //   });
  //   bb = bb + (numberSlide[0].offsetWidth);
  //   for(var i=0; i < MaxtoMin.length; i++){
  //     for(var j=0; j < imgList1.length; j++){
  //       if(MaxtoMin[i] == imgList1[j]){
  //         // numberSlide[j].style.removeProperty("transition-duration");
  //         // numberSlide[j].classList.add(ccc[i]);
  //         numberSlide[j].style.transform = ddd[i];
  //         numberSlide[j].style.left = -bb +'px';
  //         console.log(numberSlide[j].style.left);
  //         numberSlide[j].style.transition = 'all .5s ease';
  //       }
  //     }
  //   }
    
  // })
  
  const numberSlide = document.querySelectorAll(".slide-next");
  const prevImg = document.querySelector(".hover_prev-img");
  const nextImg = document.querySelector(".hover_next-img");
  const swiperWarp = document.querySelector(".swiper-wrapper");
  const hello = document.querySelector(".swiper-slide-active");
  var  img = []
  var nameImg = ".slide-image_"
  var c = ""
  for (let i = 0; i < numberSlide.length; i++) {
    c = nameImg + i.toString()  
    img[i] = document.querySelector(c)
  }
  nextImg.addEventListener("click",function(){
    for (let i = numberSlide.length - 1; i > - 1; i--) {
      [img[i].src,img[i-1].src] = [img[i-1].src,img[i].src];
  }
    
  })
  prevImg.addEventListener("click",function(){
    for (let i = 0; i < numberSlide.length; i++) {
      [img[i].src,img[i+1].src] = [img[i+1].src,img[i].src];
  }
  })
  
// phần ưu điểm
    var showMore = document.querySelectorAll(".advantage_see-more")
    var showLess = document.querySelectorAll(".advantage_hide-less")
    var hiddenAd = document.querySelectorAll(".advantage_child-top")
    var fontContent = document.querySelectorAll(".advantage_child-top_content");
    var advantageTop = ".advantage_child-top_hidden-"
    var nameAdvantage = ".advantage_child-top_infor-"
    var a =""
    var b =""
    showMore.forEach(function(nameItem,X){
        nameItem.addEventListener("click",function(){
          a = nameAdvantage + X.toString()
          var dele = document.querySelector(a)
          dele.classList.remove('hidden');


          showMore.forEach(cong => {
            cong.classList.add('hidden');
          });
          showLess.forEach(xoa => {
            xoa.classList.remove('hidden');
          });
          b = advantageTop + X.toString();
          
          hiddenAd.forEach(cong => {
            cong.classList.add('hidden');
          });
          var addd = document.querySelector(b);
          addd.classList.remove('hidden');

        })

    })
    showLess.forEach(function(nameItem,X){
        nameItem.addEventListener("click",function(){
          a = nameAdvantage + X.toString()
          var dele1 = document.querySelector(a)
          dele1.classList.add('hidden');


          showMore.forEach(cong => {
            cong.classList.remove('hidden');
          });
          showLess.forEach(xoa => {
            xoa.classList.add('hidden');
          });
          b = advantageTop + X.toString();
          
          hiddenAd.forEach(cong => {
            cong.classList.remove('hidden');
          });
          var addd = document.querySelector(b);

        })

    })
    // bottom
    var showMoreBot = document.querySelectorAll(".advantage_see-more_bot")
    var showLessBot = document.querySelectorAll(".advantage_hide-less_bot")
    var hiddenAdBot = document.querySelectorAll(".advantage_child-bottom")
    var advantageBot = ".advantage_child-bottom_hidden-"
    var nameAdvantageBot = ".advantage_child-bottom_infor-"
    var aBot =""
    var bBot =""
    showMoreBot.forEach(function(nameItem,X){
        nameItem.addEventListener("click",function(){
          aBot = nameAdvantageBot + X.toString()
          var dele = document.querySelector(aBot)
          dele.classList.remove('hidden');
          showMoreBot.forEach(cong => {
            cong.classList.add('hidden');
          });
          showLessBot.forEach(xoa => {
            xoa.classList.remove('hidden');
          });
          bBot = advantageBot + X.toString();
          
          hiddenAdBot.forEach(cong => {
            cong.classList.add('hidden');
          });
          var addd = document.querySelector(bBot);
          addd.classList.remove('hidden');

        })

    })
    showLessBot.forEach(function(nameItem,X){
        nameItem.addEventListener("click",function(){
          aBot = nameAdvantageBot + X.toString()
          var dele1 = document.querySelector(aBot)
          dele1.classList.add('hidden');


          showMoreBot.forEach(cong => {
            cong.classList.remove('hidden');
          });
          showLessBot.forEach(xoa => {
            xoa.classList.add('hidden');
          });
          bBot = advantageBot + X.toString();
          
          hiddenAdBot.forEach(cong => {
            cong.classList.remove('hidden');
          });
          var addd = document.querySelector(bBot);

        })

    })

// phần team
// ý tưởng: ta có a và b vs b là mục tiêu cần tới a là phần tử ban đầu đc hiện ta kéo a ấn có show đi và hiện hide lên sau đó ta kéo show của b lên và ẩn hide a đi 
  var prevTeam = document.querySelector(".prev_team");
  var nextTeam = document.querySelector(".next_team");
  var hiddenTeam = document.querySelectorAll(".team_child-1_slide ");
  const pagination = document.querySelectorAll(".pagination_team");
  var X = 0;
  let lastClickTime = 0;
  let maxClickInterval = 500;
  function updateNameByIndex(index){
    X = index  
  }
  prevTeam.addEventListener("click",function(){
    const currentTime = new Date().getTime();
    const clickInterval = currentTime - lastClickTime;
  
    if (clickInterval < maxClickInterval) {
      if(X == 0){
        hiddenTeam[X].classList.add('hide');
        hiddenTeam[X].classList.remove('show');
        pagination.forEach(pluss => {
          pluss.classList.add('hidden');
        });
        replace = hiddenTeam.length - 1;
        pagination[replace].classList.remove('hidden');
        setTimeout(function (){
          hiddenTeam[replace].classList.add('set');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('show');
            hiddenTeam[replace].classList.remove('set');
          }, 1);
  
          hiddenTeam.forEach(cong => {
            cong.classList.remove('hide');
          });
        }, 40);
     
      }else{
        hiddenTeam[X].classList.add('hide');
        hiddenTeam[X].classList.remove('show');
        pagination.forEach(pluss => {
          pluss.classList.add('hidden');
        });
        replace = X - 1;
        pagination[replace].classList.remove('hidden');
        setTimeout(function (){
          hiddenTeam[replace].classList.add('set');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('show');
            hiddenTeam[replace].classList.remove('set');
          }, 1);
          hiddenTeam.forEach(cong => {
            cong.classList.remove('hide');
          });
        }, 40);
      }
    }else{
      if(X == 0){
        hiddenTeam[X].classList.add('hide');
        hiddenTeam[X].classList.remove('show');
        pagination.forEach(pluss => {
          pluss.classList.add('hidden');
        });
        replace = hiddenTeam.length - 1;
        pagination[replace].classList.remove('hidden');
        setTimeout(function (){
          hiddenTeam[replace].classList.add('set');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('show');
            hiddenTeam[replace].classList.remove('set');
          }, 1);
  
          hiddenTeam[0].classList.remove('hide');
        }, 450);
     
      }else{
        hiddenTeam[X].classList.add('hide');
        hiddenTeam[X].classList.remove('show');
        pagination.forEach(pluss => {
          pluss.classList.add('hidden');
        });
        replace = X - 1;
        pagination[replace].classList.remove('hidden');
        setTimeout(function (){
          hiddenTeam[replace].classList.add('set');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('show');
            hiddenTeam[replace].classList.remove('set');
          }, 1);
          hiddenTeam[replace+1].classList.remove('hide');
        }, 450);
      }
    }
    lastClickTime = currentTime;
    updateNameByIndex(replace)
  })
    nextTeam.addEventListener("click",function(){
      const currentTime = new Date().getTime();
      const clickInterval = currentTime - lastClickTime;
    
      if (clickInterval < maxClickInterval) {
        if(X == hiddenTeam.length -1){
          hiddenTeam[X].classList.add('hide1');
          hiddenTeam[X].classList.remove('show');
          pagination.forEach(pluss => {
            pluss.classList.add('hidden');
          });
          replace = 0
          pagination[replace].classList.remove('hidden');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('set');
            setTimeout(function (){
              hiddenTeam[replace].classList.add('show');
              hiddenTeam[replace].classList.remove('set');
            }, 1);
            hiddenTeam.forEach(cong => {
              cong.classList.remove('hide1');
            });
          }, 40);
        }else{
          hiddenTeam[X].classList.add('hide1');
          hiddenTeam[X].classList.remove('show');
          pagination.forEach(pluss => {
            pluss.classList.add('hidden');
          });
          replace = X + 1;
          pagination[replace].classList.remove('hidden');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('set');
            setTimeout(function (){
              hiddenTeam[replace].classList.add('show');
              hiddenTeam[replace].classList.remove('set');
            }, 1);
            hiddenTeam.forEach(cong => {
              cong.classList.remove('hide1');
            });
          }, 40);
        }
      }else{
      if(X == hiddenTeam.length -1){
        hiddenTeam[X].classList.add('hide1');
        hiddenTeam[X].classList.remove('show');
        pagination.forEach(pluss => {
          pluss.classList.add('hidden');
        });
        replace = 0
        pagination[replace].classList.remove('hidden');
        setTimeout(function (){
          hiddenTeam[replace].classList.add('set');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('show');
            hiddenTeam[replace].classList.remove('set');
          }, 1);
          hiddenTeam[hiddenTeam.length -1].classList.remove('hide1');
        }, 450);
      }else{
        hiddenTeam[X].classList.add('hide1');
        hiddenTeam[X].classList.remove('show');
        pagination.forEach(pluss => {
          pluss.classList.add('hidden');
        });
        replace = X + 1;
        pagination[replace].classList.remove('hidden');
        setTimeout(function (){
          hiddenTeam[replace].classList.add('set');
          setTimeout(function (){
            hiddenTeam[replace].classList.add('show');
            hiddenTeam[replace].classList.remove('set');
          }, 1);
          hiddenTeam[replace-1].classList.remove('hide1');
        }, 450);
      }
    }
      lastClickTime = currentTime;
      updateNameByIndex(replace)
    })
// phần feel 
  var feelImg = document.querySelectorAll(".feel_child-img");
  var feelName = document.querySelectorAll(".feel-center-information_detail-name");
  var paddingFeel =  document.querySelector(".padding-color");
  var imgFeature = document.querySelector(".img_feature-feel")
  var nameFeelImg = ".feel_child-img-"
  var nameFeelName = ".feel-center-information_detail-name_"
  var numberName = ""
  var numberImg = ""
  feelImg.forEach(function(nameImg,X){
    
    // từ trên xuống dưới từ trái qua phải
    nameImg.addEventListener("click",function(){
      numberName = nameFeelName + X.toString();
      numberImg = nameFeelImg + X.toString();
      feelName.forEach(cong => {
            cong.classList.add('hidden');
      });
      feelImg.forEach(cong => {
            cong.classList.remove('padding-color')
      });
      var removeFeel = document.querySelector(numberName);
      var addFeel = document.querySelector(numberImg);
      removeFeel.classList.remove('hidden');
      addFeel.classList.add('padding-color');
      imgFeature.src = addFeel.src;
    })
  })
// price_list chắc vậy
  var hiddenImgPrice = document.querySelectorAll(".price_list-img_child");
  var hiddenPrice = document.querySelectorAll(".price_list-infor_choose-child")
  const hiddenTextPrice2 = document.querySelectorAll(".price_list-title_off");
  const buttonPlus2 = document.querySelectorAll(".question-plus")
  const buttonMinus2 = document.querySelectorAll(".question-minus")
  var namePrice = ".price_list-img_child-"
  var nameInfor = ".price_list-infor_choose-child_"
  var numberPrice = ""
  var numberName = ""
  hiddenPrice.forEach(function(nameItem,X){
        nameItem.addEventListener("click",function(){
          numberPrice = namePrice + X.toString()
          var dele = document.querySelector(numberPrice)
          numberName =  nameInfor + X.toString()
          var addd = document.querySelector(numberName)
          hiddenImgPrice.forEach(cong => {
            cong.classList.add('hidden');
          });
          hiddenPrice.forEach(cong => {
            cong.classList.remove('color');
          });
          addd.classList.add('color');
          dele.classList.remove('hidden');

          a = parseInt(X);
          buttonPlus2[a].classList.toggle('hidden');
          buttonMinus2[a].classList.toggle('hidden');
          hiddenTextPrice2[a].classList.toggle('change_title');
        })

    })
  // phần price_list 2
//   const hiddenTextPrice2 = document.querySelectorAll(".price_list-title_off");
//   const buttonPlus2 = document.querySelectorAll(".question-plus")
//   const buttonMinus2 = document.querySelectorAll(".question-minus")
//   var numberPrice = ""
//   var numberName = ""
//   buttonPlus2.forEach(function(imgItem,X){
//     imgItem.addEventListener("click",function(){
//           a = parseInt(X);
//           buttonPlus2[a].classList.add('hidden');
//           buttonMinus2[a].classList.remove('hidden');
//           hiddenTextPrice2[a].classList.toggle('change_title');
//     })  
// })
// buttonMinus2.forEach(function(imgItem,X){
//     imgItem.addEventListener("click",function(){
//       a = parseInt(X);
//       hiddenTextPrice2[a].classList.toggle('change_title');
//       buttonMinus2[a].classList.add('hidden');
//       buttonPlus2[a].classList.remove('hidden');
//     })
// })
// advatage pass 2:
// tính giờ 
        // Thời gian kết thúc (đặt theo định dạng UTC)(h tiêu chuẩn)
        const endTime = new Date('2025-08-02T13:00:00Z').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = endTime - now; 

            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (days < 10 && days > 0){
              days = "0"+days.toString();
            }
            if(hours < 10 && hours > 0){
              hours = "0"+hours.toString();
            }
            if(minutes <10 && minutes > 0 ){
              minutes = "0"+minutes.toString();
            }
            if(seconds <10 && minutes > 0){
              seconds = "0"+seconds.toString();
            }
            document.getElementById('days_number').innerHTML = `${days}`
            document.getElementById('hours_number').innerHTML = `${hours}`
            document.getElementById('minutes_number').innerHTML = `${minutes}`
            document.getElementById('seconds_number').innerHTML = `${seconds}`
            if (timeLeft < 0) {
              document.getElementById('days_number').innerHTML = `0`
              document.getElementById('hours_number').innerHTML = `0`
              document.getElementById('minutes_number').innerHTML = `0`
              document.getElementById('seconds_number').innerHTML = `0`
              document.getElementById('time_end').innerHTML = 'Ưu đãi đã kết thúc.';
            }
        }

        // Cập nhật đồng hồ đếm ngược mỗi giây
        setInterval(updateCountdown, 1000);
// const nameItemsss = document.querySelector(".swiper-slide");
// const transformValue = nameItemsss.offsetWidth;
// const swiper = new Swiper('.swiper', {
//   pagination: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-next",
//         },
// });
