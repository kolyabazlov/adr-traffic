function isIE() {
    let ua = navigator.userAgent;
    return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}
if (isIE()){
    alert('Внимание!\nВы используете истаревший браузер.\nСтраница будет отражена некорректно.');
}
/*AOOOOOOOOOOOOS*/
AOS.init({
    duration: 1000
});
/*SCROLL SETUP*/
let windowWidthMobile = window.innerWidth < 800;
$(document).on( 'scroll', function() {
    if (windowWidthMobile) {
        if ($(this).scrollTop() > 0) {
            $(".callme-desc").addClass("callme-desc-active");
            $(".callme-up-img-wrapper").addClass("callme-up-img-wrapper-active");
            $(".callme-phone-wrapper-more").css("transform", "translateX(0)")
        } else {
            $(".callme-desc").removeClass("callme-desc-active");
            $(".callme-up-img-wrapper").removeClass("callme-up-img-wrapper-active");
            $(".callme-phone-wrapper-more").css("transform", "translateX(70px)")
        }
    }
});
/* PHONE ANIMATION */

/*SCROLL TO CALC*/
$(".hero-offer-button").on("click", () => {
    $(".calc-cars-title")[0].scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
/*SCROLL UP FROM BOTTOM*/
$(".callme-up-img-wrapper").on("click", () => {
    $("header")[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
/*ACTIVE CLASS TOGGLE*/
$(".calc-cars-type-text").on('click', function () {
    //тут должна быть проверка есть ли уже нажатый актив короч
    $(".calc-cars-type-text").each( function () {
        $(this).removeClass("calc-cars-type-text-active");
    });
    $(this).toggleClass("calc-cars-type-text-active");
    $(".calc-cars-img").attr("src", "img/cars/" + this.id + "-grey.gif");
});
$(".calc-form-class-li-number").on('click', function () {
    $(".calc-form-class-li-number").each( function () {
        $(this).removeClass("calc-form-class-li-number-active");
    });
    $(this).toggleClass("calc-form-class-li-number-active");
});
$(".calc-form-mass-mini-form-mass-type").on('click', function () {
    $(".calc-form-mass-mini-form-mass-type").each( function () {
        $(this).removeClass("calc-form-mass-mini-form-mass-type-active");
    });
    $(this).toggleClass("calc-form-mass-mini-form-mass-type-active");
});
$(".callme-phone-wrapper-more").on("click", function () {
    $(".callme-overlay").css("display", "block").toggleClass("callme-overlay-active");
    $(".callme-wrapper").css("display", "block").toggleClass("callme-wrapper-active");
});
$(".callme-overlay, #callme-close-button").on("click", function () {
    $(".callme-overlay").css("display", "none").toggleClass("callme-overlay-active");
    $(".callme-wrapper").css("display", "none").toggleClass("callme-wrapper-active");
});
$(".callme-phone-img").on("mouseover", function () {
   $(".callme-desc").toggleClass("callme-desc-active");
});
/*POLITICS POPUP*/
$(".politics-a").on("click", function () {
    $(".politics-popup").toggleClass("politics-popup-active").on("click", function () {
        $(this).removeClass("politics-popup-active");
    })
});
/*GET ACTIVE DIV*/
function getOfferInfo() {
    let loadIdArray = [];
    $(".calc-cars-type-text-active").each(function () {
        switch (this.id) {
            case 'calc-cars-isoterm':
                loadIdArray.push("Изотерм");
                break;
            case 'calc-cars-cisterna':
                loadIdArray.push("Цистерна");
                break;
            case 'calc-cars-sbornyi':
                loadIdArray.push("Сборный");
                break;
            case 'calc-cars-konteiner':
                loadIdArray.push("Контейнер");
                break;
            case 'calc-cars-refrizherator':
                loadIdArray.push("Рефрижератор");
                break;
            case 'calc-cars-tent':
                loadIdArray.push("Тент");
                break;
            case 'calc-cars-zhd-vagon':
                loadIdArray.push("Ж/д вагон");
                break;
            case 'calc-cars-zhd-konteiner':
                loadIdArray.push("Ж/д контейнер");
                break;
            case 'calc-cars-samolet':
                loadIdArray.push("Самолёт");
                break;
            default:
        }
    });
    let classIdArray = [];
    $(".calc-form-class-li-number-active").each(function () {
        switch (this.id) {
            case 'calc-form-class-1':
                classIdArray.push("1");
                break;
            case 'calc-form-class-2':
                classIdArray.push("2");
                break;
            case 'calc-form-class-3':
                classIdArray.push("3");
                break;
            case 'calc-form-class-4':
                classIdArray.push("4");
                break;
            case 'calc-form-class-5':
                classIdArray.push("5");
                break;
            case 'calc-form-class-6':
                classIdArray.push("6");
                break;
            case 'calc-form-class-7':
                classIdArray.push("7");
                break;
            case 'calc-form-class-8':
                classIdArray.push("8");
                break;
            case 'calc-form-class-9':
                classIdArray.push("9");
                break;
            default:
        }
    });
    let massIdArray = [];
    $(".calc-form-mass-mini-form-mass-type-active").each(function () {
        switch (this.id) {
        case 'calc-form-mass-tonn':
            massIdArray.push("tonn");
            break;
        case 'calc-form-mass-kg':
            massIdArray.push("kg");
            break;
        default:
        }
    });
    return ("&load_type=" + loadIdArray + "&class_type=" + classIdArray + "&mass_type=" + massIdArray);
}
/*SUCCESS MESSAGE SETUP*/
function showSuccessOverlay() {
    $("#success-overlay").css("height", "115px");
}
function hideSuccessOverlay() {
    $("#success-overlay").css("height", "0");
    console.log("Success overlay showed");
    $("#hero-form")[0].reset();
    $("#calc-form")[0].reset();
    $("#callback-form")[0].reset();
}
/*JQUERY VALIDATE PLUGIN SETUP*/
$.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[а-яА-ЯЁёa-zA-Z\s]+$/i.test(value);
}, "Введите имя без цифр");
$.validator.addMethod("phonenumber", function(value, element) {
    return this.optional(element) || /^[0-9+()-]+$/.test(value);
}, "Введите верно телефон");
/*JQUERY VALIDATE PLUGIN FORMS*/
$("#hero-form").validate({
    focusCleanup: true,
    rules: {
        hero_name: {
            required: false,
            lettersonly: true
        },
        hero_phone: {
            required: true,
            phonenumber: true
        },
    },
    messages: {
        hero_name: {
            required: "Введите ваше имя"
        },
        hero_phone: {
            required: "Введите телефонный номер"
        },
    },
    errorClass: "hero-form-error",
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    errorPlacement: function(error, element) {
        element.val('');
        element.attr('placeholder', error.text());
    },
    submitHandler : function () {
        $.ajax({
            url: "php/hero_request.php",
            type: "POST",
            data: $("#hero-form").serialize(),
            success: function () {
                console.log("hero request sent");
            }
        });
        showSuccessOverlay();
        window.setTimeout(hideSuccessOverlay, 4000);
        ym(68472016,'reachGoal','sale');
        window.dataLayer.push({
            'event': 'googleSaleForm'
        });
    }
});
$("#calc-form").validate({
    rules: {
        calc_load: {
            required: true
        },
        calc_from: {
            required: true
        },
        calc_to: {
            required: true,
        },
        calc_name: {
            required: true,
            minlength: 2,
            maxlength: 20,
            lettersonly: true
        },
        calc_phone: {
            required: true,
            phonenumber: true
        },
        calc_email: {
            required: false,
            email: true
        },
        calc_mass: {
            required: false
        }
    },
    messages: {
        calc_load: "Опишите груз",
        calc_from: "Введите адрес отправления",
        calc_to: "Введите адрес доставки",
        calc_name: {
            required: "Введите ваше имя"
        },
        calc_phone: {
            required: "Введите телефонный номер"
        },
        calc_email: {
            required: "Для связи нам нужен ваш e-mail",
            email: "Ваш email должен быть в формате name@domain.com"
        },
    },
    errorClass: "calc-form-error",
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    errorPlacement: function(error, element) {
        element.val('');
        element.attr('placeholder', error.text());
    },
    submitHandler : function () {
        let finalRequest = ($("#calc-form").serialize() + getOfferInfo());
        $.ajax({
            url: "php/calc_request.php",
            type: "POST",
            data: finalRequest,
            success: function () {
                console.log("calc request success");
            }
        });
        showSuccessOverlay();
        window.setTimeout(hideSuccessOverlay, 4000);
        ym(68472016,'reachGoal','calculator');
        window.dataLayer.push({
            'event': 'googleCalculatorForm'
        });
    }
});
$("#callback-form").validate({
    focusCleanup: true,
    rules: {
        callback_name: {
            required: false,
            lettersonly: true
        },
        callback_phone: {
            required: true,
            phonenumber: true
        },
        callback_load: {
            required: true,
        },
    },
    messages: {
        callback_name: {
            required: "Введите ваше имя"
        },
        callback_phone: {
            required: "Введите телефонный номер"
        },
        callback_load: {
            required: "Введите информацию о грузе"
        },
    },
    errorClass: "callback-form-error",
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    errorPlacement: function(error, element) {
        element.val('');
        element.attr('placeholder', error.text());
    },
    submitHandler : function () {
        $.ajax({
            url: "php/callback_request.php",
            type: "POST",
            data: $("#callback-form").serialize(),
            success: function () {
                console.log("callback request sent");
            }
        });
        showSuccessOverlay();
        window.setTimeout(hideSuccessOverlay, 4000);
        ym(68472016,'reachGoal','callback');
        window.dataLayer.push({
            'event': 'googleCallbackForm'
        });
    }
});
$("#callme-form").validate({
    focusCleanup: true,
    rules: {
        callme_phone: {
            required: true,
            phonenumber: true
        },
    },
    messages: {
        callme_phone: {
            required: "Введите номер"
        },
    },
    errorClass: "callme-form-error",
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    errorPlacement: function(error, element) {
        element.val('');
        element.attr('placeholder', error.text());
    },
    submitHandler : function () {
        $.ajax({
            url: "php/callme_request.php",
            type: "POST",
            data: $("#callme-form").serialize(),
            success: function () {
                console.log("callme request sent");
            }
        });
        showSuccessOverlay();
        window.setTimeout(hideSuccessOverlay, 4000);
        ym(68472016,'reachGoal','callme');
        window.dataLayer.push({
            'event': 'googleCallmeForm'
        });
    }
});
/*DETECT JQUERY FLEXDATALIST */
$('.flexdatalist').flexdatalist({
    minLength: 0,
    noResultsText: "Данного товара не найдено в нашей онлайн базе, свяжитесь с нами, мы вас проконсультируем в течение минуты."
}).on('select:flexdatalist', function(event, set, options) {
    $(".detect-card-name").text(set.label);
    $(".detect-card-class").text("Класс опасности №" + set.value);
    switch (set.value) {
        case "1":
            $(".detect-card-about").text("Взрывчатые вещества и изделия");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/1.1.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/1.2.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/1.3.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/1.4.png\">"
            );
            break;
        case "2":
            $(".detect-card-about").text("Газы");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/2.1.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/2.2.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/2.3.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/2.4.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/2.5.png\">"
            );
            break;
        case "3":
            $(".detect-card-about").text("Легковоспламеняющиеся жидкости");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/3.1.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/3.2.png\">"
            );
            break;
        case "4":
            $(".detect-card-about").text("Легковоспламеняющиеся твёрдые вещества, самореактивные вещества, " +
                "полимеризующиеся вещества и твердые десенсибилизированные взрывчатые вещества.");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/4.1.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/4.2.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/4.3.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/4.4.png\">"
            );
            break;
        case "5":
            $(".detect-card-about").text("Окисляющие вещества и органические пероксиды");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/5.1.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/5.2.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/5.3.png\">"
            );
            break;
        case "6":
            $(".detect-card-about").text("Токсичные и инфекционные вещества");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/6.1.png\">" +
                "<img class=\"detect-card-img\" src=\"img/signs/6.2.png\">"
            );
            break;
        case "8":
            $(".detect-card-about").text("Коррозионные вещества");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/8.1.png\">"
            );
            break;
        case "9":
            $(".detect-card-about").text("Прочие опасные вещества и изделия");
            $(".detect-card-img-wrapper").empty().html(
                "<img class=\"detect-card-img\" src=\"img/signs/9.1.png\">"
            );
            break;
        default:
    }
});





