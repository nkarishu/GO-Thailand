$(function(){

    const viewHeight = $(window).height();
    const colors = ['#232323', '#2d4d50', '#643250'];
      //配列・・・複数の値を保管できる箱
    console.log($('section'));

    $(window).on('scroll',function(){
        const ST =  $(window).scrollTop();

        //fadein
        $('.fadein-up, .fadein-right').each(function(){
            const target = $(this).offset().top;

            if (ST >= target - (viewHeight / 2)) {
                $(this).addClass('show');
            }
        });

        //reflection
        $('.reflection').each(function(){
            const target = $(this).offset().top;
            if(ST >= target - (viewHeight / 2)) {
                $(this).addClass('active');
            }
        });

        //bg color change
        $('section').each(function(){
            const target = $(this).offset().top;
            const index = $(this).index();

            if (ST >= target - (viewHeight / 2)) {
                $('#wrapper').css('background', colors[index]);
            }
        });

    });
});