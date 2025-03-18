'use strict';

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');
    

    // Получаем элементы
    const loginButton = document.querySelector('#button-login'); // Кнопка "Вход"
    const loginForm = document.querySelector('#form-login'); // Окно входа
    /*
* Алгоритм
*
* 1. Начало.
* 2. Получаем элементы:
*    - Кнопка "Вход" (создаем переменную для кнопки входа).
*    - Всплывающее окно для входа (создаем переменную для окна регистрации).
* 3. Навешиваем слушатель события на кнопку "Вход":
*    - Добавляем слушатель события `click` на кнопку "Вход".
* 4. Проверка условий:
*    - Если окно входа открыто:
*      4.1 Да: Закрываем окно (устанавливаем атрибут `hidden` или удаляем класс для отображения).
*      4.2 Нет: Открываем окно (добавляем класс для отображения или удаляем атрибут `hidden`).
* 5. Навешиваем слушатель события на документ для обработки кликов вне области:
*    - Добавляем слушатель события `click` на документ.
* 6. Проверка условий:
*    - Если клик произошел вне окна входа и вне кнопки "Вход":
*      6.1 Да: Закрываем окно входа (устанавливаем атрибут `hidden` или добавляем класс для скрытия).
*      6.2 Нет: Ничего не делаем.
* 7. Конец.
* Блок-схема: /images/block-schema-vhod.png
*/

if (loginButton && loginForm) {
    console.log('Элементы существуют');

    // Открытие модального окна при клике на кнопку "Войти"
    loginButton.addEventListener('click', () => {
        loginForm.removeAttribute('hidden');
    });

    // Закрытие модального окна при клике на кнопку закрытия
    const closeLoginForm = document.querySelector('#closeLoginForm'); 
    if (closeLoginForm) {
        closeLoginForm.addEventListener('click', () => {
            loginForm.setAttribute('hidden', true);
        });
    }

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', (event) => {
        if (event.target === loginForm) {
            loginForm.setAttribute('hidden', true);
        }
    });
}
 });

 document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипт отработал корректно');

    /*
* Алгоритм
*
* 1. Начало.
* 2. Получаем элементы:
*    - Кнопка "Регистрация" (создаем переменную для кнопки регистрации).
*    - Всплывающее окно для регистрации (создаем переменную для окна регистрации).
* 3. Навешиваем слушатель события на кнопку "Регистрация":
*    - Добавляем слушатель события `click` на кнопку "Регистрация".
* 4. Проверка условий:
*    - Если окно регистрации открыто:
*      4.1 Да: Закрываем окно (устанавливаем атрибут `hidden` или удаляем класс для отображения).
*      4.2 Нет: Открываем окно (добавляем класс для отображения или удаляем атрибут `hidden`).
* 5. Навешиваем слушатель события на документ для обработки кликов вне области:
*    - Добавляем слушатель события `click` на документ.
* 6. Проверка условий:
*    - Если клик произошел вне окна регистрации и вне кнопки "Регистрация":
*      6.1 Да: Закрываем окно регистрации (устанавливаем атрибут `hidden` или добавляем класс для скрытия).
*      6.2 Нет: Ничего не делаем.
* 7. Конец.
* Блок-схема: /images/block-schema-reg.png
*/

    // Получаем элементы
    const registrationButton = document.querySelector('#button-reg'); // Кнопка "Регистрация"
    const registrationModal = document.querySelector('#form-registration'); // Форма регистрации
    const loginForm = document.querySelector('#form-login'); // Форма входа (если есть)
    const cancelRegistration = document.querySelector('#cancelRegistration');
    const closeLoginForm = document.querySelector('#closeLoginForm'); // Убедитесь, что такой элемент есть
    const buttonLink = document.querySelector('.button--link');

    // Проверяем, что элементы существуют
    if (registrationButton && registrationModal) {
        console.log('Элементы существуют');

        // Открытие формы регистрации при клике на кнопку "Регистрация"
        registrationButton.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке
            registrationModal.hidden = false; // Показываем форму регистрации
            if (loginForm) loginForm.hidden = true; // Скрываем форму входа, если она есть
        });

        // Закрытие формы регистрации при клике на кнопку "Отмена"
        if (cancelRegistration) {
            cancelRegistration.addEventListener('click', () => {
                registrationModal.hidden = true; // Скрываем форму регистрации
            });
        }

        // Закрытие формы входа при клике на кнопку "Закрыть"
        if (closeLoginForm) {
            closeLoginForm.addEventListener('click', () => {
                if (loginForm) loginForm.hidden = true; // Скрываем форму входа
            });
        }

        // Переключение на форму входа при клике на "У меня уже есть аккаунт"
        if (buttonLink) {
            buttonLink.addEventListener('click', () => {
                registrationModal.hidden = true; // Скрываем форму регистрации
                if (loginForm) loginForm.hidden = false; // Показываем форму входа
            });
        }

        // Закрытие формы регистрации при клике вне её области
        window.addEventListener('click', (event) => {
            if (!registrationModal.contains(event.target) && !registrationButton.contains(event.target)) {
                registrationModal.hidden = true; // Скрываем форму регистрации
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector('.offers__grid');
    const scrollLeftButton = document.querySelector('.scroll-button--left');
    const scrollRightButton = document.querySelector('.scroll-button--right');
    /*
* Алгоритм
*
* 1. Начало.
* 2. Получаем элементы:
*    - Контейнер с карточками (создаем переменную для контейнера).
*    - Кнопка "Влево" (создаем переменную для кнопки прокрутки влево).
*    - Кнопка "Вправо" (создаем переменную для кнопки прокрутки вправо).
* 3. Навешиваем слушатель события на кнопку "Влево":
*    - Добавляем слушатель события `click` на кнопку "Влево".
* 4. Проверка условий:
*    - Если кнопка "Влево" нажата:
*      4.1 Да: Прокручиваем контейнер с карточками влево на 300 пикселей.
*      4.2 Нет: Ничего не делаем.
* 5. Навешиваем слушатель события на кнопку "Вправо":
*    - Добавляем слушатель события `click` на кнопку "Вправо".
* 6. Проверка условий:
*    - Если кнопка "Вправо" нажата:
*      6.1 Да: Прокручиваем контейнер с карточками вправо на 300 пикселей.
*      6.2 Нет: Ничего не делаем.
* 7. Конец.
* Блок-схема: /images/block-schema-strelki.png
*/

    if (scrollContainer && scrollLeftButton && scrollRightButton) {
        // Прокрутка влево
        scrollLeftButton.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -300, // Шаг прокрутки влево
                behavior: 'smooth' // Плавная прокрутка
            });
        });

        // Прокрутка вправо
        scrollRightButton.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 300, // Шаг прокрутки вправо
                behavior: 'smooth' // Плавная прокрутка
            });
        });
    }
});

