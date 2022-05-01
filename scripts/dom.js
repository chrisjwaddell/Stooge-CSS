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
