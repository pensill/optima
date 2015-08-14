$(document).ready(function() {
/*animate buttons product*/ 
    $('.product__container').hover(
        function(){
            $(this).children('.button--product--sample').toggleClass('fadeInDown').css('display', 'block');
            $(this).children('.button--product--specifications').toggleClass('fadeInUp').css('display', 'block');
        },
        function(){
            $(this).children('.button--product--sample').toggleClass('fadeInDown').css('display', 'none');
            $(this).children('.button--product--specifications').toggleClass('fadeInUp').css('display', 'none');
        }
    );
    $('#product__container-1').hover(
        function(){
            $(this).children('.button--product--sample').toggleClass('fadeInDown').css('display', 'block');
            $(this).children('.button--product--specifications').toggleClass('fadeInUp').css('display', 'block');
        },
        function(){
            $(this).children('.button--product--sample').toggleClass('fadeInDown').css('display', 'none');
            $(this).children('.button--product--specifications').toggleClass('fadeInUp').css('display', 'none');
        }
    );
/*animate buttons product end*/

/*slider*/
    var $frame  = $('.slider__container');
            var $slidee = $frame.children('.slider__items').eq(0);
            var $wrap   = $frame.parent();
    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        cycleBy: 1,
        smart: 1,
        activateMiddle: true,
        itemNav: 'basic',
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        scrollBar: $wrap.find('.scrollbar'),
        startAt: 0,
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 500,
        dragHandle: 1,
        dragContent: 1,
        clickBar: 1
    });
/*slider end*/
/*maps tooltip*/
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
/*maps tooltip end*/

/*validate form*/
    $('#form-feedback').bootstrapValidator({
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                        message: 'Имя слишком маленькое'
                    },
                        notEmpty: {
                        message: 'Введите ваше имя'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Введите ваш e-mail'
                    },
                    emailAddress: {
                        message: 'Введите корректный e-mail адресс'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        message:'Введите больше 10 символов сообщения'
                    },
                    notEmpty: {
                        message: 'Введите текст вашего сообщения'
                    }
                }
            }
        }
    });
    $('#form-feedback--modal').bootstrapValidator({
        fields: {
            modal_name: {
                validators: {
                        stringLength: {
                        min: 2,
                        message: 'Имя слишком маленькое'
                    },
                        notEmpty: {
                        message: 'Введите ваше имя'
                    }
                }
            },
            modal_name_company: {
                validators: {
                        stringLength: {
                        min: 1,
                        message: 'Имя компании слишком маленькое'
                    }
                }
            },
            modal_tel: {
                validators: {
                    notEmpty: {
                        message: 'Введите ваш телефон'
                    },
                    phone: {
                        country: 'RUS',
                        message: 'Пожалуйста, введи правильный номер телефона'
                    }
                }
            },
            modal_email: {
                validators: {
                    notEmpty: {
                        message: 'Введите ваш e-mail'
                    },
                    emailAddress: {
                        message: 'Введите корректный e-mail адресс'
                    }
                }
            },
            modal_comment: {
                validators: {
                      stringLength: {
                        min: 5,
                        message:'Введите больше 5 символов сообщения'
                    },
                }
            }
        }
    });
    $('#form-order').bootstrapValidator({
            fields: {
                order_name: {
                    validators: {
                            stringLength: {
                            min: 2,
                            message: 'Имя слишком маленькое'
                        },
                            notEmpty: {
                            message: 'Введите ваше имя'
                        }
                    }
                },
                order_email: {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш e-mail'
                        },
                        emailAddress: {
                            message: 'Введите корректный e-mail адресс'
                        }
                    }
                },
                order_tel: {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш телефон'
                        },
                        phone: {
                            country: 'RUS',
                            message: 'Пожалуйста, введи правильный номер телефона'
                        }
                    }
                }
            }
        });
/*validate form end*/

/*scroll*/
    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 500);
    });
/*scroll end*/

/*styling select*/
    $(function() {
        $('select').styler();
    });
/*styling select end*/


})

