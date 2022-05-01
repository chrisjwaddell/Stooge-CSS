const elCopyTxt = document.querySelector(".copy-hidden")

const elCopy = document.querySelectorAll(".btn-copy")

elCopy.forEach(cv => cv.addEventListener("click", async function (e) {
    if (!navigator.clipboard) {
        // Clipboard API not available
        return
    }
    const text = e.target.parentNode.children[0].innerText
    try {
        await navigator.clipboard.writeText(text)
    } catch (err) {
        console.error('Failed to copy!', err)
    }

}))
