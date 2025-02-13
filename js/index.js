$(function(){
    panelControl();
    tabControl();
    inquireBox();
    cartEmpty();
    justToggle();
    listImgHover();
    popupControl();
    allCheck();
    requireTerms();
    backbtn();
    dateBtn();
    mobileNav();
    quantityComponent('.quantity input.quantNumb', '.quantity input.quantMinus', '.quantity input.quantPlus', '#totalPrice');
    // countNumb('#cartHave .countComponent span','#cartHave ul li mark',"#cartHave .countComponent input[type='button']",'#cartHave output');
});
function backbtn(){
    $(".btn_back").click(function(){
        history.back();
    });
}
// function countNumb(numbOfItem,priceVal,targetB,targetP){
//     var currentNumber = parseInt($(numbOfItem).text());
//     var limitNumber = 100;
    
//     var onePrice = $(priceVal).text();
//     var priceFront = 0;
//     var priceBack = 0;
//     var addPrice = 0;
//     var finalPrice = 0;
    
//     var inputValue = '';

//     $(targetB).click(function(){
//         inputValue = $(this).val();

//         if(inputValue == '+' && currentNumber < limitNumber){
//             currentNumber = currentNumber+1;
//         }else if(currentNumber != 1 && currentNumber < limitNumber){
//             currentNumber = currentNumber-1;
//         }else if(currentNumber == limitNumber && inputValue == '-'){
//             currentNumber = currentNumber-1;
//         }

//         $(numbOfItem).text(currentNumber);


//         priceFront = onePrice.slice(0,-5);
//         priceBack = onePrice.slice(-4,-2);

//         priceFront = (currentNumber*priceFront);
//         priceBack = (currentNumber*priceBack);
        
//         if(priceBack > 99){
//             priceBack = priceBack.toString();
//             addPrice = parseInt(priceBack.slice(0,-2));
//             priceBack = priceBack.slice(-2);
//             priceFront = priceFront + addPrice;
//         }
//         finalPrice = priceFront + '.' + priceBack;

//         finalPrice = parseFloat(finalPrice).toFixed(2).replace('.',',');
        
//         $(targetP).val(finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
//     });
// }

function quantityComponent(target, minus, plus, price){
    var orderField = $(target);
    var orderCount = $(orderField).val();
    var productPrice = Number($(price).val());
    var totalPrice = $(price);
    $(minus).click(function(){
        orderCount --;
        if(orderCount <= 1){
            orderCount = 1;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice * orderCount);
    });
    $(plus).click(function(){
        orderCount ++;
        if(orderCount >= 99){
            orderCount = 99;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice * orderCount);
    });
}

function mobileNav(){
    if(window.matchMedia('(max-width: 767px)').matches){
        var navIcon=`<button type="buttton" class="toggleBtn">navicon</button>`;
        document.querySelector("header nav").insertAdjacentHTML("afterbegin",navIcon);
        var panelNameShop=`<span><bdi>一.</bdi><i>shop</i></span>`;
        document.querySelector(".shopPanel").insertAdjacentHTML("afterbegin",panelNameShop);
        var panelNameContact=`<span><bdi>二.</bdi><i>Contact</i></span>`;
        document.querySelector(".contactPanel").insertAdjacentHTML("afterbegin",panelNameContact);
        var panelNameSearch=`<span><bdi>三.</bdi><i>Search</i></span>`;
        document.querySelector(".searchPanel").insertAdjacentHTML("afterbegin",panelNameSearch);
        var panelNameAccount=`<span><bdi>四.</bdi><i>Account</i></span>`;
        document.querySelector(".accPanel").insertAdjacentHTML("afterbegin",panelNameAccount);
    };
    $("header nav > button").click(function(){
        $(this).toggleClass("active");
    });
}

function allCheck(){
    var checkStatus = false;
    $("#agreeAll").click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $("[id^='agree']").prop("checked",true);
            $("[id^='disagree']").prop("checked",false);
        }else{
            $("[id^='agree']").prop("checked",false);
            $("[id^='disagree']").prop("checked",true);
        }
    });
}

function justToggle(){
    $(".toggleBtn").click(function(){
        $(this).toggleClass("active");
    });
    $("div.faqContainer > ol > li > h3").click(function(){
        $(this).toggleClass("active");
    });
    $("header > [class*='Panel'] > div > ul > li").click(function(){ 
        $(this).toggleClass("active");
    });
}

function panelControl(){ 
    var currentPanel = null; 
    $("header nav ol li button").click(function(){ 
        currentPanel = "." + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    }); 
    $("div.detailContainer div:first-of-type button").click(function(){ 
        currentPanel = "." + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    }); 
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}

function tabControl(){ 
    var activeTab = null; 
    $(".detailContainer > div:first-of-type > section > ul > li > button").click(function(){ 
        var activeTab = "." + $(this).attr("data-tabName");
        $(".detailContainer > div:first-of-type > section > ul > li > button").removeClass("active");
        $(this).addClass("active");
        $("[class*='Tab']").removeClass("active");
        $(activeTab).addClass("active");
    });
    $(".checkOutContainer > div > form > fieldset:last-of-type > ul > li > input").click(function(){ 
        var activeTab = "." + $(this).attr("data-tabName");
        $("[class*='Tab']").removeClass("active");
        $(activeTab).addClass("active");
    });
    $(".faqContainer > ul > li > button").click(function(){ 
        var activeTab = "." + $(this).attr("data-tabName");
        $(".faqContainer > ul > li > button").removeClass("active");
        $(this).addClass("active");
        $("[class*='Tab']").removeClass("active");
        $(activeTab).addClass("active");
    });
}

function popupControl(){ 
    var currentPopup = null; 
    $("div.findPWContainer div form fieldset button").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    }); 
    $("div.checkOutContainer > div > form > fieldset:last-of-type > button").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $("div.trackOrdersContainer > div > ul > li > div > ol > li > button").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $("div.nonMemberContainer > ul > li > div > ol > li > button").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $("div.profileContainer > form > span > input").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $("div.inquiryContainer > ol > li > div > input[type='button']").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $("div.withdrawalContainer > div > form > button").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $("div.writeInqContainer > form > span > button").click(function(){ 
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPopup).removeClass("active");
    });
}

function inquireBox(){
    $("div.inquireBox input.btn_close").click(function(){
        $("div.inquireBox").removeClass("active");
        if(window.matchMedia('(min-width: 1280px)').matches){
            $(".shopPanel,.contactPanel,.accPanel").css('top','0px');
            $(".searchPanel").css('top','60px');
        }else if(window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches){
            $(".shopPanel,.contactPanel,.accPanel").css('top','60px');
            $(".searchPanel").css('top','120px');
        }else if(window.matchMedia('(max-width: 767px)').matches){
            $(".shopPanel,.contactPanel,.accPanel").css('top','40px');
            $(".searchPanel").css('top','40px');
        };
    });
}

function cartEmpty(){
    $("div.cartPanel div.cartProd form button").click(function(){
        $(".cartProd").remove();
        $(".cartEmpty").addClass("active");
    });
}

function listImgHover(){
    var currentSrc = "";
    $(".listContainer ul li a img").on("mouseover",function(){
        currentSrc = $(this).attr("src");
        currentSrc = currentSrc.replace(".jpg","_hover.jpg");
        $(this).attr("src",currentSrc);
    });
    $(".listContainer ul li a img").on("mouseleave",function(){
        currentSrc = currentSrc.replace("_hover.jpg",".jpg");
        $(this).attr("src",currentSrc);
    });
}

function requireTerms(){
    $('div.checkOutContainer > div > form > fieldset:last-of-type > div:last-of-type > label').click(function(){
        $('div.checkOutContainer > div > form > fieldset:last-of-type > div:last-of-type > ol').addClass("active");
    });
}

function dateBtn(){
    $('.trackOrdersContainer > div > form > fieldset > ol > li > button').click(function(){
        $('.trackOrdersContainer > div > form > fieldset > ol > li > button').removeClass("active");
        $(this).addClass("active");
    });
}