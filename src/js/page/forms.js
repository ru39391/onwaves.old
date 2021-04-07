/* form */
let formRowArr = [];
let formRowActiveArr = [];
const pushRow = (btn) => {
    btn.closest('form').querySelectorAll('.form__item_extender').forEach(formExtender => {
        if(formExtender.classList.contains('active')) {
            formRowActiveArr.push(formExtender);
        }
    });
};

document.querySelectorAll('.form__btn_appender').forEach(formAppender => {
    formAppender.addEventListener('click', (e) => {
        e.preventDefault();

        formRowArr = [];
        e.target.closest('form').querySelectorAll('.form__item_extender').forEach(formExtender => {
            formRowArr.push(formExtender);
        });

        formRowActiveArr = [];
        pushRow(e.target);

        if(formRowActiveArr.length === 0) {
            formRowArr[0].classList.add('active');
            pushRow(e.target);
        } else {
            if(formRowActiveArr[formRowActiveArr.length - 1].nextElementSibling.classList.contains('form__item_extender')) {
                formRowActiveArr[formRowActiveArr.length - 1].nextElementSibling.classList.add('active');
            }
        }

        if(formRowActiveArr.length === formRowArr.length - 1) {
            e.target.closest('.form__item').style.display = 'none';
        }
    });
});

document.querySelectorAll('.form__close_remover').forEach(btnRemover => {
    btnRemover.addEventListener('click', (e) => {
        e.preventDefault();
        formRowArr = [];
        formRowActiveArr = [];
        e.target.closest('.form__item_extender').classList.remove('active');
        if(e.target.closest('form').querySelector('.form__btn_appender').closest('.form__item').style) {
            e.target.closest('form').querySelector('.form__btn_appender').closest('.form__item').removeAttribute('style');
        }
    });
});

document.querySelectorAll('.form__select').forEach(formSelect => {
    formSelect.addEventListener('change', (e) => {
        if(e.target.closest('.form__item').querySelector('.form__field')) {
            e.target.closest('.form__item').querySelector('.form__field').disabled = false;
        };
    });
});

document.querySelectorAll('.form__toggler_pwd').forEach(togglerPwd => {
    togglerPwd.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        if(e.target.closest('.form__item').querySelector('.form__field').type == 'password') {
            e.target.closest('.form__item').querySelector('.form__field').type = 'text';
        } else {
            e.target.closest('.form__item').querySelector('.form__field').type = 'password';
        }
    });
});

if(document.querySelector('.form__select_single')) {
    $('.form__select_single').dropdown({label: 'Выбрать'});
}

if(document.querySelector('.form__select_multiple')) {
    $('.form__select_multiple').select2();
}

if(document.querySelector('.form__field_date')) {
    $('.form__field_date').datepicker({
        onSelect: () => {
            $('.form__field_date').addClass('active');
        }
    });
}

if(document.querySelector('.modal-dialog .form__btn_more')) {
    document.querySelector('.modal-dialog .form__btn_more').addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.modal-dialog').classList.toggle('modal-xl');
    });
}

document.querySelectorAll('input[type="reset"]').forEach(btnReset => {
    btnReset.addEventListener('click', (e) => {
        e.target.closest('form').querySelectorAll('.form__field').forEach(formField => {
            if(formField.classList.contains('active')) {
                formField.classList.remove('active')
            }
        });
    });
});