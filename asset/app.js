const music = document.querySelector('.music')
const audio = document.querySelector('audio')
const musicIcon = document.querySelector('.music__icon')
const navItemBank = document.querySelector('.nav__item--bank')
const modalBank = document.querySelector('.modal-bank')
const bankClose = document.querySelector('.bank-content__header i')
const eleAnimation = document.querySelectorAll('.show-animation')


let isPlay = true

function handlEvent () {

    // xử lí bật tắt music :
    music.onclick = function () {
        isPlay = !isPlay
        if(isPlay) {
            audio.pause()
            musicIcon.classList.add('fa-volume-xmark')
            musicIcon.classList.remove('fa-volume-high')
        }
        else {
            audio.play()
            musicIcon.classList.remove('fa-volume-xmark')
            musicIcon.classList.add('fa-volume-high')
        }
    }

    navItemBank.onclick = function () {
        modalBank.classList.add('open')
    }

    bankClose.onclick = function () {
        modalBank.classList.remove('open')
    }
   
}

handlEvent()


function showAnimation (element) {
    let windowHeight = window.innerHeight
    let locaElement = element.getClientRects()[0]
    if(!(locaElement.bottom < 0 || locaElement.top > windowHeight)) {
        element.classList.add('start')
    }
    else {
        element.classList.remove('start')
    }
}

document.onscroll = function () {
    eleAnimation.forEach(element => {

        showAnimation(element)
    })
}

function handlShowGallery () {
    const gallery = document.querySelector('.gallery')
    const innerImg = document.querySelector('.gallery__inner img')
    const galleryClose = document.querySelector('.gallery__close')
    const prev = document.querySelector('.controls.prev')
    const next = document.querySelector('.controls.next')
    const listImg = document.querySelectorAll('.picture-item')

    let currentIndex = 0
    listImg.forEach((img, index) => {
        img.onclick = function() {
            currentIndex = index
            openGallery()
        }
    })

    // mở gallery :
    function openGallery () {
        gallery.classList.add('show')
        innerImg.src = listImg[currentIndex].src
    }

    //tắt gallery :
    (function closeGallery() {
        galleryClose.onclick = function () {
            gallery.classList.remove('show')
        }
    })()

    // next ảnh:
    function nextPicture() {
        next.onclick = function () {
            if(currentIndex < listImg.length - 1) {
                currentIndex++
                openGallery()

            }else {
                currentIndex = 0
                openGallery()

            }

        }
    }
    nextPicture()

    // prev ảnh :
    function prevPicture() {
        prev.onclick = function () {
            if(currentIndex > 0) {
                currentIndex--
                openGallery()

            }else {
                currentIndex = listImg.length - 1
                openGallery()
            }
        }
    }
    prevPicture()
}
handlShowGallery()

function handlGuestbook () {
    const userName = document.querySelector('.write-content__info input')
    const userMessage = document.querySelector('.write-content__message input')
    const showUserName = document.querySelector('.message-item__name')
    const showUserMessage = document.querySelector('.message-item__content')
    const sendMessage = document.querySelector('.write-content__send')
    const showMessage = document.querySelector('.show-message')

    sendMessage.onclick = function () {
        newMessageIitem = document.createElement('div')
        newMessageIitem.classList.add('.message-item')
        newMessageIitem.innerHTML = `
            <div class="message-item__name">${userName.value}</div>
            <div class="message-item__content">${userMessage.value}</div>
        `

        showMessage.appendChild(newMessageIitem)
        userName.value = ''
        userMessage.value = ''
    }


}   
handlGuestbook()

function handlLine () {
    const navItems = document.querySelectorAll('.nav__item')
    function removeActive () {
        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        })
    }
    navItems.forEach(navItem => {
        navItem.onmouseover = function() {
            removeActive()
            navItem.classList.add('active')
        }
    })
}
handlLine()

function handlModalLoginRegister () {
    const modalLoginRegister = document.querySelector('.modal-login-register')
    const modalLoginRegisterClose = document.querySelector('.modal-login-register__close')
    const navItemLogin = document.querySelector('.nav__item--login')
    const loginHeader = document.querySelector('.login__header')
    const registerHeader = document.querySelector('.register__header')
    const listTab = document.querySelectorAll('.login-register__tab')
    const listContent = document.querySelectorAll('.login-register__content')
    const line = document.querySelectorAll('.login-register__header__line')
    
    // hiện modal:
    navItemLogin.onclick = function () {
        modalLoginRegister.classList.add('show')
    }

    // ẩn modal :
    modalLoginRegisterClose.onclick = function () {
        modalLoginRegister.classList.remove('show')
    }

    // show body login / register :
    function removeListContent () {
        listContent.forEach(item => {
            item.classList.remove('show')
        })
    }
    listTab.forEach((tab, index) => {
        tab.onclick = function () {
            line[0].style.left = this.offsetLeft + 'px'
            line[0].style.width = this.offsetWidth + 'px'
            removeListContent()
            listContent[index].classList.add('show')
        }
    })
}
handlModalLoginRegister()