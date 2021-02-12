var tunaWizard =
    {
        stepCount: 0,
        slider: null,
        setResponsive: function ()
        {
            var nameThis = this;
            var height = $(window)['height']();
            var width = $(window)['width']();
            height = height > 360 ? height : 360;
            var signupContainer = $('.tuna-signup-container');
            var signupLeft = $('.tuna-signup-left');
            var signupRight = $('.tuna-signup-right');
            if (width >= 768)
            {
                signupContainer['add'](signupLeft)['add'](signupRight)['innerHeight'](height);

            }
            else
            {
                signupContainer['add'](signupLeft)['add'](signupRight)['css']('height', 'auto');




                // $('').each(function () {


                // })


            };

            var sliderContainer = $('.tuna-slider-container');
            if (height < 600 || width < 768)
            {
                sliderContainer['hide']()
            }
            else
            {
                sliderContainer['show']();
                nameThis['slider']['reloadSlider']()
            };
            if (height < 400)
            {
                $('.button-container')['css']('bottom', '50px')
            }
        },
        changeStep: function (stepConfirm, nextStep)
        {
            var self = this;
            if (nextStep <= 0 && nextStep > 7)
            {
                return false
            };


            if (nextStep === 2) {
                if ($('input[name=\'tn_money\']:checked')['val']() === '') {
                    self['setInputError']($('input[name=\'tn_money\']'));
                    return
                }
            };

            if (nextStep === 3) {
                if ($('input[name=\'tn_time\']:checked')['val']() === '') {
                    self['setInputError']($('input[name=\'tn_time\']'));
                    return
                }
            };


            if (nextStep === 4)
            {
                if ($('input[name=\'tn_hobbies[]\']:checked')['length'] === 0 )
                {
                    self['setInputError']($('input[name=\'tn_hobbies[]\']'));
                    return
                };

            };


            if (nextStep === 5)
            {
                if ($('#tn_voice')['val']()['trim']() === '')
                {
                    self['setInputError']($('#tn_voice'));
                    return
                }
            };
            if (nextStep === 6)
            {
                if ($('#tn_name')['val']()['trim']() === '')
                {
                    self['setInputError']($('#tn_name'));
                    return
                }
            };


            if (nextStep === 7)
            {
                if ($('#tn_email')['val']()['trim']() === '' || !self['isEmail']($('#tn_email')['val']()['trim']()))
                {
                    self['setInputError']($('#tn_email'));
                    return
                }
            };

            if (nextStep === 8)
            {
                if ($('#tn_comment')['val']()['trim']() === '')
                {
                    self['setInputError']($('#tn_comment'));
                    return
                }
            };


            if (nextStep > stepConfirm)
            {
                $('.step-active')['removeClass']('step-active')['addClass']('step-hide')
            }
            else
            {
                $('.step-active')['removeClass']('step-active')
            };
            var _0xd1cfxb = $('.step[data-step-id=\'' + nextStep + '\']');
            _0xd1cfxb['removeClass']('step-hide')['addClass']('step-active');
            // window['setTimeout'](function ()
            // {
            //     if (nextStep !== self['stepCount'])
            //     {
            //         _0xd1cfxb['find']('input, textarea')['focus']();
            //     }
            // }, 500);
            var stepsCount = $('.steps-count');
            if (nextStep === self['stepCount'])
            {
                stepsCount['html']('CONFIRM DETAILS');
                $('.button-container')['hide']();
                var stepConfirm = $('.step-confirm');




                stepConfirm['find']('select[name=\'money\']')['selectpicker']('val', $('input[name=\'tn_money\']:checked')['val']());
                stepConfirm['find']('select[name=\'time\']')['selectpicker']('val', $('input[name=\'tn_time\']:checked')['val']());
                var checkBox = $('input[name=\'tn_hobbies[]\']:checked')['map'](function ()
                {
                    return this['value']
                })['get']();
                stepConfirm['find']('select[name=\'hobbies[]\']')['selectpicker']('val', checkBox);
                stepConfirm['find']('input[name=\'voice\']')['val']($('#tn_voice')['val']());
                stepConfirm['find']('input[name=\'name\']')['val']($('#tn_name')['val']());
                stepConfirm['find']('input[name=\'email\']')['val']($('#tn_email')['val']());
                stepConfirm['find']('textarea[name=\'comment\']')['val']($('#tn_comment')['val']());



            };
            stepsCount['find']('span.step-current')['text'](nextStep);
            var prevStep = $('.prevStep');
            if (nextStep === 1)
            {
                prevStep['hide']()
            }
            else
            {
                prevStep['css']('display', 'inline-block')
            }




            var width = $(window).width();
            if (width < 600)
            {
                if (nextStep === 2 || nextStep === 3 || nextStep === 4 || nextStep === 5 || nextStep === 6 || nextStep === 7 || nextStep === 8  )
                {
                    $('html, body, .tuna-signup-container').css('overflow', 'scroll');
                }
                else
                {
                     $('html, body, .tuna-signup-container').css('overflow', 'hidden');
                }
                if ( nextStep === 2 || nextStep === 4 || nextStep === 5 || nextStep === 6 || nextStep === 7 || nextStep === 8)
                {
                    $('.container').css('overflow-y', 'hidden');
                    $('.tuna-signup-right').css('min-height', '660px');
                }
                else
                {
                    $('.container').css('overflow-y', 'visible');
                    $('.tuna-signup-right').css('min-height', '2400px');
                }
                if (nextStep === 9)
                {
                    $('.container').css('overflow-y', 'hidden');
                    $('.tuna-signup-right').css('min-height', '800px');
                }
            }
            if (width < 600 && width > 410 )
                if ( nextStep === 3)
                {
                     $('.tuna-signup-right').css('min-height', '2700px');
                }
        },
        setInputError: function (paramErorr)
        {
            paramErorr['addClass']('input-error');
            paramErorr['parents']('.step')['find']('.help-info')['hide']();
            paramErorr['parents']('.step')['find']('.help-error')['show']()
        },
        isEmail: function (paramIsMail)
        {
            paramIsMail = paramIsMail['toLowerCase']();
            var mailPattern = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
            return mailPattern['test'](paramIsMail)
        },
        start: function ()
        {
            var thisParam = this;
            thisParam['slider'] = $('.tuna-slider')['bxSlider'](
                {
                    controls: false,
                    auto: true,
                    mode: 'horizontal',
                    pager: true,
                    speed: 500,
                    pause: 5000
                });
            $('.tuna-signup-container input[type=\'checkbox\'],.tuna-signup-container input[type=\'radio\'], .select')['uniform']();
            $('.tuna-signup-container input[name="phone"],.tuna-signup-container input[name="tn_phone"]')['mask']('000 000 00 00');
            window['setTimeout'](function ()
            {
                $('#tn_name')['focus']()
            }, 500);
            thisParam['setResponsive']();
            $(window)['resize'](function ()
            {
                thisParam['setResponsive']()
            });
            thisParam['stepCount'] = $('.tuna-steps .step')['length'];
            $('.step-count')['text'](thisParam['stepCount']);
            $('.nextStep')['on']('click', function ()
            {
                var stepActiveNextParamm = $('.step-active')['attr']('data-step-id');
                var stepNext = parseFloat(stepActiveNextParamm) + 1;
                thisParam['changeStep'](stepActiveNextParamm, stepNext)
            });
            $('.prevStep')['on']('click', function ()
            {
                var stepActivePrevParamm = $('.step-active')['attr']('data-step-id');
                var stepPrev = parseFloat(stepActivePrevParamm) - 1;
                thisParam['changeStep'](stepActivePrevParamm, stepPrev)
            });
            var stepConfirm = $('.step-confirm');
            stepConfirm['find']('.input-container a.editInput')['on']('click', function ()
            {
                $(this)['parent']()['find']('input, textarea')['focus']()
            });
            stepConfirm['find']('.input-container a.showPass')['on']('mousedown', function ()
            {
                $(this)['parent']()['find']('input, textarea')['attr']('type', 'text')
            })['mouseup'](function ()
            {
                $(this)['parent']()['find']('input, textarea')['attr']('type', 'password')
            });
            stepConfirm['find']('.input-container input, .input-container textarea')['on']('focus', function ()
            {
                $(this)['parent']()['find']('a')['hide']()
            });
            stepConfirm['find']('.input-container input,.input-container textarea')['on']('focusout', function ()
            {
                if (!$(this)['hasClass']('confirm-input-error'))
                {
                    $(this)['parent']()['find']('a')['show']()
                }
            });
            stepConfirm['find']('select')['on']('shown.bs.select', function (_0xd1cfx12)
            {
                $(this)['parents']('.form-group')['find']('a.editInput')['hide']()
            })['on']('hidden.bs.select', function (_0xd1cfx12)
            {
                $(this)['parents']('.form-group')['find']('a.editInput')['show']()
            });
            $('.step input')['not']('.step-confirm input')['on']('keypress', function (stepParamKeyPressEnter)
            {
                if (stepParamKeyPressEnter['keyCode'] === 13)
                {
                    $('.nextStep')['click']()
                }
            });
            var signupForm = $('form[name=\'signupForm\']');
            signupForm['find']('input')['on']('keypress', function (formParamKeyPressEnter)
            {
                if (formParamKeyPressEnter['keyCode'] === 13)
                {
                    signupForm['submit']()
                }
            });
            $('.finishBtn')['on']('click', function ()
            {
                signupForm['submit']()
            });
            signupForm['on']('submit', function (e)
            {
                e['preventDefault']();
                $(this)['find']('.confirm-input-error')['removeClass']('confirm-input-error');





                var nameMoney = $(this)['find']('select[name=\'money\']');
                if (nameMoney['val']() === '')
                {
                    nameMoney['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameTime = $(this)['find']('select[name=\'time\']');
                if (nameTime['val']() === '')
                {
                    nameTime['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameCheckbox = $(this)['find']('select[name=\'hobbies[]\']');
                console['log'](nameCheckbox);
                if (nameCheckbox['find']('option:selected')['length'] === 0)
                {
                    nameCheckbox['parents']('.bootstrap-select')['addClass']('confirm-input-error')['focus']();
                    nameCheckbox['selectpicker']('toggle');
                    return
                };
                var nameVoice = $(this)['find']('input[name=\'voice\']');
                if (nameVoice['val']()['trim']() === '')
                {
                    nameVoice['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameName = $(this)['find']('input[name=\'name\']');
                if (nameName['val']()['trim']() === '')
                {
                    nameName['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameEmail = $(this)['find']('input[name=\'email\']');
                if (nameEmail['val']()['trim']() === '' || !thisParam['isEmail'](nameEmail['val']()['trim']()))
                {
                    nameEmail['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameComment = $(this)['find']('textarea[name=\'comment\']');
                if (nameComment['val']()['trim']() === '')
                {
                    nameComment['addClass']('confirm-input-error')['focus']();
                    return
                };





                // if (!$('input[name=\'agreement\']')['prop']('checked'))
                // {
                //     swal(
                //         {
                //             title: 'Warning!',
                //             text: 'You must agree with the terms and conditions.',
                //             type: 'warning',
                //             confirmButtonText: 'Ok'
                //         });
                //     return
                // };
                swal(
                    {
                        title: null,
                        text: '<img class=\'tuna_loading\' src=\'https://beemloop.com/get-a-quote/img/loading.svg\'/> Saving...',
                        html: true,
                        showConfirmButton: false
                    });
                $['post']('https://beemloop.com/get-a-quote/php/main.php', $(this)['serialize']() + '&uploadedFiles=' + tunaWizard['uploadedFiles'], function (data)
                {
                    if (data.response == 'ok')
                    {
                        setTimeout(function() {
                        swal(
                            {
                                title: 'Success',
                                text: 'Your information submitted successfully! We have received your message and we"ll get back to you within 24 hours',
                                type: 'success',
                                confirmButtonText: 'Go To Home Page'}, function() {
                                    window.location = "https://beemloop.com/";
                                });
                        }, 1000);
                    }
                    else
                    {
                        swal(
                            {
                                title: 'Error!',
                                text: data['msg'],
                                type: 'error',
                                confirmButtonText: 'Ok'
                            })
                    }
                }, 'json')
            })
        }
    };
$['fn']['materialInput'] = function ()
{
    var materialInput;
    var This = this;
    This['find']('input.formInput, textarea.formInput')['keydown'](function (_0xd1cfx12)
    {
        This['setLabel'](_0xd1cfx12['target']);
        This['checkFocused'](_0xd1cfx12['target'])
    });
    This['find']('input.formInput, textarea.formInput')['focusout'](function (_0xd1cfx12)
    {
        This['setLabel'](_0xd1cfx12['target']);
        This['checkUnFocused'](_0xd1cfx12['target'])
    });
    this['setLabel'] = function (_0xd1cfx1a)
    {
        materialInput = This['find']('label[for=' + _0xd1cfx1a['id'] + ']')
    };
    this['getLabel'] = function ()
    {
        return materialInput
    };
    this['checkFocused'] = function (_0xd1cfx1a)
    {
        This['getLabel']()['addClass']('active', '');
        $(_0xd1cfx1a)['removeClass']('input-error');
        $(_0xd1cfx1a)['next']()['hide']();
        $(_0xd1cfx1a)['parent']()['find']('.info')['show']()
    };
    this['checkUnFocused'] = function (_0xd1cfx1a)
    {
        if ($(_0xd1cfx1a)['val']()['length'] === 0)
        {
            This['getLabel']()['removeClass']('active')
        }
    }
};
$(document)['ready'](function ()
{
    $('.tuna-loader-container')['fadeOut']('slow');
    $('.tuna-signup-container')['show']();
    $('.tuna-steps')['materialInput']();
    $('.selectpicker')['selectpicker']();
    tunaWizard['start']()
});



// var signupRight = $('.tuna-signup-right');
// if ($("#test").hasClass('step-active')) {
//     signupRight.css('min-height', '2300px');
// } else {
//     signupRight.css('min-height', '331px');
// }