let count=0;
//监听click事件
$('.cart-btn').on('click',function(){
  let cart =$('.cart-nav');
  //点击click之后获取到对应的图片
  let imgtodrag=$(this).parent('.buttons').parent('.content').parent('.card').find('img').eq(0);
  if(imgtodrag){
    //复制图片，确定位置
    var imgclone=imgtodrag.clone().offset({
      top:imgtodrag.offset().top,
      left:imgtodrag.offset().left
    }).css({
      'opacity':'0.8',
      'position':'absolute',
      'height':'150px',
      'width':'150px',
      'z-inde':'100'
    }).appendTo($('body')).animate({
      'top':cart.offset().top+20,
      'left':cart.offset().left+30,
      'width':75,
      'height':75
    },1000,'easeInOutExpo');

    setTimeout(function(){
      count++;
      $(".cart-nav .item-count").text(count);
    }, 1500);

  imgclone.animate({
    'width':0,
    'height':0
  },function(){
    $(this).detach()
  })
  }
})