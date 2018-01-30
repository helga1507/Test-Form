//валидация почты
function validEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//валидация пароля (не меньше 5 символов)
function validPassword(pass) {
    return (String(pass).length >= 5) ? true : false;
}

//поля для ввода логина и пароля
let login_obj = 'modal-autorization__login', password_obj = 'modal-autorization__password',
    button_obj = 'modal-autorization__form__button';

//изменение статуса кнопки
function state_button(state) {
    if (state && document.getElementById(button_obj).hasAttribute('disabled')) {
        $('#' + button_obj).removeAttr('disabled');
    }
    else if (!state && !document.getElementById(button_obj).hasAttribute('disabled')) {
        $('#' + button_obj).attr('disabled', 'true');
    }
    return state;

}

//валидация формы
function validForm(email, password) {
    email = '#' + email;
    password = '#' + password;
    let state_email = false, state_password = false;

    //если поле для логина валидно и у него еще нет класса "valid", то добавляем его
    if (validEmail($(email).val())) {
        if (!$(email).parent('.modal-autorization__form__input-block').hasClass('valid')) {
            $(email).parent('.modal-autorization__form__input-block').addClass('valid');
        }
        state_email = true;
    }
    else {
        if ($(email).parent('.modal-autorization__form__input-block').hasClass('valid')) {
            $(email).parent('.modal-autorization__form__input-block').removeClass('valid');
        }
    }

    if (validPassword($(password).val())) {
        if (!$(password).parent('.modal-autorization__form__input-block').hasClass('valid')) {
            $(password).parent('.modal-autorization__form__input-block').addClass('valid');
        }
        state_password = true;
    }
    else {
        if ($(password).parent('.modal-autorization__form__input-block').hasClass('valid')) {
            $(password).parent('.modal-autorization__form__input-block').removeClass('valid');
        }
    }

    if (state_email && state_password) {
        return state_button(true);
    }

    state_button(false);
    return false;

}

$('#modal-autorization__login').on('input', function () {
    validForm(login_obj, password_obj);
});
$('#modal-autorization__password').on('input', function () {
    validForm(login_obj, password_obj);
});


$('#modal-autorization__form').submit(function (e) {
    e.preventDefault();

    if (!validForm(login_obj, password_obj)) {
        return false;
    }
    /*
    var m_method=$(this).attr('method');
    var m_action=$(this).attr('action');
    var m_data=$(this).serialize();

    //отправляем форму по action
    $.ajax({
        type: m_method,
        url: m_action,
        data: m_data,
        success: function(result){
            this.reset();
            $('.modal').modal('hide');
            $('#senk').modal('show');
        }
    });*/
    this.reset();
    $('.modal').modal('hide');
    $('#senk').modal('show');

    console.log('Form valid');
});

