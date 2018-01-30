//валидация почты
function validEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//валидация пароля (не меньше 5 символов)
function validPassword(pass) {
    return String(pass).length >= 5;
}

//поля для ввода логина и пароля
let login_obj = $('#modal-autorization__login'), password_obj = $('#modal-autorization__password'),
    button_obj = $('#modal-autorization__form__button');

//изменение статуса кнопки
function state_button(state) {
    if (state && button_obj.attr('disabled') !== undefined) {
        button_obj.removeAttr('disabled');
    }
    else if (!state && button_obj.attr('disabled') === undefined) {
        button_obj.attr('disabled', 'true');
    }
    return state;

}
//проверка валидности поля; входные параметры - поле и функция для валидации
function checkInput(input,nameFunction) {
    let state = false;

    if (nameFunction(input.val())) {
        //если поле валидно и у него нет класса valid - добавляем его
        if (!input.parent('.modal-autorization__form__input-block').hasClass('valid')) {
            input.parent('.modal-autorization__form__input-block').addClass('valid');
        }
        state = true;
    }
    else {
        //если поле не валидно и у него есть класс valid - удаляем его
        if (input.parent('.modal-autorization__form__input-block').hasClass('valid')) {
            input.parent('.modal-autorization__form__input-block').removeClass('valid');
        }
    }

    //возвращаем состояние поля
    return state;
}

//валидация формы
function validForm(email, password) {

    let state_email = checkInput(email,validEmail);
    let state_password = checkInput(password,validPassword);

    if (state_email && state_password) {
        return state_button(true);
    }

    return state_button(false);

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
    //очищаем форму, закрываем модальные окна и открываем окно о успешном входе
    this.reset();
    $('.modal').modal('hide');
    $('#senk').modal('show');

    console.log('Form valid');
});

