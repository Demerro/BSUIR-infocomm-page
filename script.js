const animationFlags = Array(document.getElementsByClassName("dropdown")).fill(false)
const pdfDocuments = document.getElementsByClassName("document")
const chevrons = document.getElementsByClassName("chevron")

function expandDocument(index) {
    const doc = pdfDocuments[index]
    const chevron = chevrons[index]

    const defaultSizeValue = 0 + "px"
    const expandSize = getExpandSize()
    const expandHeight = expandSize.height + "px"
    const expandWidth = expandSize.width + "px"

    if (animationFlags[index]) {
        doc.style.height = defaultSizeValue
        doc.style.width = defaultSizeValue
        doc.style.marginBottom = defaultSizeValue;
        chevron.style.transform = "rotate(-90deg)";
    } else {
        doc.style.height = expandHeight
        doc.style.width = expandWidth
        doc.style.marginBottom = 20 + "px";
        chevron.style.transform = "rotate(0deg)"
    }

    animationFlags[index] = !animationFlags[index]
}

function getExpandSize() {
    const width = document.body.clientWidth

    if (width < 320) {
        return { width: 300, height: 300 }
    } else if (width < 768) {
        return { width: 400, height: 300 }
    } else if (width < 1200) {
        return { width: 500, height: 400 }
    } else if (width < 1440) {
        return { width: 600, height: 500 }
    } else {
        return { width: 700, height: 600 }
    }
}