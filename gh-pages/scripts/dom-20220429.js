const elBtnExpand = document.querySelectorAll(".main__section__btn")
const elSection = document.querySelectorAll(".main__section")
const elAsideH2 = document.querySelectorAll("aside h2")

elAsideH2.forEach(cv => {
    cv.addEventListener("click", handleMenuClick)
})

function handleMenuClick(e) {
    this.nextElementSibling.classList.toggle("di-no")

    elAsideH2.forEach((cv, i) => {
        if (cv === this) {
            menuDocItemToggle(i)
        } else {
            if (!cv.nextElementSibling.classList.contains("di-no")) {
                cv.nextElementSibling.classList.add("di-no")
                menuDocItemDeselect(i)
            }
        }
    })
}


function menuItemDeselect(i) {
    elAsideH2[i].nextElementSibling.classList.add("di-no")
}

function menuItemToggle(i) {
    elAsideH2[i].nextElementSibling.classList.toggle("di-no")
}


elBtnExpand.forEach(cv => {
    cv.addEventListener("click", handleDocClick)
})

function handleDocClick(e) {
    this.nextElementSibling.classList.toggle("di-no")
    elBtnExpand.forEach((cv, i) => {
        if (cv === this) {
            menuItemToggle(i)
        } else {
            if (!cv.nextElementSibling.classList.contains("di-no")) {
                cv.nextElementSibling.classList.add("di-no")
                menuItemDeselect(i)
            }
        }
    })

    btnToSectionIndex(this)
}

function menuDocItemDeselect(i) {
    elBtnExpand[i].nextElementSibling.classList.add("di-no")
}

function menuDocItemToggle(i) {
    elBtnExpand[i].nextElementSibling.classList.toggle("di-no")
}

window.addEventListener("load", onLoaded)

function onLoaded(e) {
    let res = urlToID(document.location.href)
    let elURLSection = sectionFindBtn(btnToSectionIndex(idToEl(res)))

    if (res) {
        elBtnExpand.forEach((cv, i) => {
            if (cv === elURLSection) {
                menuItemToggle(i)
            } else {
                cv.nextElementSibling.classList.toggle("di-no")
            }
        })
    }
}

// from URL, it gets the ID
function urlToID(url) {
    let objURL = ""

    if (url !== "") {
        objURL = new URL(url)
        return objURL.hash.replace("#", "")
    } else {
        return ''
    }
}

function idToEl(id) {
    return document.querySelector('#' + id)
}

// Takes an element and finds the main__section it is embedded in
function btnToSectionIndex(el) {
    let elI = el
    while (elI.nodeName !== "SECTION" || !elI.classList.contains("main__section")) {
        elI = elI.parentNode
    }
    return elI
}


// The first a tag in a main-_section is the button, return it
// After that is the div element that hides and expands sections. onLoad needs this <a> tag
function sectionFindBtn(el) {
    let i = 0
    while (el.children[i] && el.children[i].nodeName !== "A") {
        i++
    }
    if (el.children[i]) {
        return el.children[i]
    } else {
        return ''
    }

}

const elCopyTxt = document.querySelector(".copy-hidden")

const elCopy = document.querySelectorAll(".btn-copy")

elCopy.forEach(cv => cv.addEventListener("click", async function (e) {
    // console.log("Copy click")
    // console.log(e.target.parentNode.children[0].innerText)
    // console.log(e.target.parentNode.children[0].innerText.charCodeAt(0))

    // elCopyTxt.value = e.target.parentNode.children[0].textContent
    // console.log(elCopyTxt.value)
    // console.log(elCopyTxt.value.charCodeAt(0))
    // elCopyTxt.select()
    // document.execCommand("copy")


    if (!navigator.clipboard) {
        // Clipboard API not available
        return
    }
    const text = e.target.parentNode.children[0].innerText
    try {
        await navigator.clipboard.writeText(text)
        // console.log(text)
    } catch (err) {
        console.error('Failed to copy!', err)
    }

}))
