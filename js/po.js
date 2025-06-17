$( ()=> {

    //스크롤을 내릴때.............................
    let scrollTop = 0;
    const winHeight = $(window).height() - 50;//브라우저높이에서 50을 뺀값
    
    $(window).scroll(()=> {

        scrollTop = $(window).scrollTop();
        const topTop = $("#top").offset().top ; //#top의 y좌표
        const aboutTop = $("#about").offset().top ; //#about의 y좌표

        const port1Top = $("#portfolio").offset().top ;
        const port2Top = $("#port2").offset().top ;
        const port3Top = $("#port3").offset().top ; 
        const port4Top = $("#port4").offset().top ; 

        const eventTop =   $("#event").offset().top ; 
        const contactTop = $("#contact").offset().top ;         

        
        //스크롤바를 내리면 #about의 #skill 바 메이메이션 된다
        if( $(window).scrollTop() >= topTop ) {          
            $("#menu a").eq(0).addClass('act').siblings().removeClass('act');  //상단메뉴 'Home'활성화
        }
        if( $(window).scrollTop() >= aboutTop  ) {          
            $("#menu a").eq(1).addClass('act').siblings().removeClass('act');  //상단메뉴 'About'활성화
            //$('#top nav').addClass('act'); //상단 메뉴 배경 검정색으로
        }
        if( $(window).scrollTop() >= aboutTop  -  200 ) {
            progressAni(); // #skill 애니메니션
        }

        if(  $(window).scrollTop() >= port1Top - 200 ) {            
            $("#port1").addClass('act');
        }
        if(  $(window).scrollTop() >= port1Top) {
            $("#menu a").eq(2).addClass('act').siblings().removeClass('act');  //상단메뉴 'Portfolio'활성화
        }
        if(  $(window).scrollTop() >= port1Top +200 ) {
            $("#port2").addClass('act');
        }
        if(  $(window).scrollTop() >= port2Top +200 ) {
            $("#port3").addClass('act');
        
        } if(  $(window).scrollTop() >= port3Top +200 ) {
            $("#port4").addClass('act');
        }
        if(  $(window).scrollTop() >= eventTop ) {
            $("#menu a").eq(3).addClass('act').siblings().removeClass('act');  //상단메뉴 'Event'활성화           
        }
        if(  $(window).scrollTop() >= contactTop ) {
            $("#menu a").eq(4).addClass('act').siblings().removeClass('act');  //상단메뉴 'Contact'활성화            
        }

        //데스크탑넓이 (800보다 클때)...............
        if( $(window).innerWidth() > 800  ) {            
            if( scrollTop >  winHeight ) {
                $("#top nav").addClass('act');
            } else {
                $("#top nav").removeClass('act');
            }

        }
    }); //스크롤 끝부분.........................

    //햄버거아이콘 클릭시 왼쪽에서 메뉴 나타나기
    const menuClose = ()=> {
        $("#top nav").removeClass('act');
        $("#top button").text('menu');
        $("body").css('overflow' , 'auto');
    }
    if( $(window).innerWidth() <= 800  ) {       
        $("#top button").click( ()=> {
                const txt = $("#top button").text() === 'menu';
                txt ? 
                ( 
                    $("#top nav").addClass('act')  , 
                    $("#top button").text('close') ,
                    $("body").css('overflow' , 'hidden')
                ) : 
                menuClose();
        });
        $("#menu a").click(()=> {
            menuClose();           
        });
    }

    //타자치는 효과
    const text = "Hello\nkim pearl Portfolio";
    const arrText = [...text]    // ['안' ,'녕', '하',....]
    const $typeText =$('#typeText');    

    let i = 0;
    const tt = () => {
        const char = arrText[i++];
        $typeText.append(char === '\n'  ?  '<br>'  : char  );
        if( i === arrText.length  ) clearInterval( timer  );
    }
    const timer = setInterval( tt , 200 );
   
    //SKILL (포토샵/일러스트/...)
    const progressAni = ()=> {
            let no = 0; 
            $("#skill progress").each( (i , j)=> {
                no = i * 200; //index를 0.1초씩 곱한다
                const x = parseInt(  $("#skill progress").eq(i).text()  );
                $("#skill progress").eq( i ).delay( no ).animate( { value : x }, 1000);
            } ); 
    }    
    /********************************/
    //포트폴리오에서 (모바일 바로가기) 클릭할때
    $(".mobile-1").click( e => {
        e.preventDefault();//기본동작방지(여기서는 <a>링크 방지)
        window.open( 
            e.currentTarget.href , 
            'win1' , 
            'top=50, left=100, width= 414, height=740, toolbar=no, scrollbars=no, resizable=no'
        ); 
    });
    $("#mobile-1").keypress( e => {
        if( e.key === "Enter") {
            $(e.currentTarget).trigger('click');//<a>링크이동 이전에 동작한다          
        }
    });
    /********************************/
    //이벤트 이미지버튼을 클릭하면 큰이미지 보이기(팝업모달)
    $("#event button").click( e => {
        //버튼이미지 주소(src) 가져오기
        let src = $(e.currentTarget).children('img').attr('src');
        const alt = $(e.currentTarget).children('img').attr('alt');
        //큰이미지에 이미지주소 전달하기
        src = src.replace(".jpg" , "_big.jpg");        
        $("#popup img").attr({ "src" : src , "alt" : alt });
        $("#popup h3").text( alt );
        $("#popup").fadeIn();
    });
    $("#popup").click( ()=> {
        $("#popup").fadeOut();
    });
    $(document).keydown( e=> {
        if(e.key === "Escape")   $("#popup").fadeOut();
    });

   
});//js all end....