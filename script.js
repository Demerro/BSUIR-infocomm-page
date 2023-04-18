const animationFlags = Array(document.getElementsByClassName("dropdown")).fill(false)

function makeAnimation(index) {
    if (animationFlags[index]) {
        changeDocumentSize(index, true)
        rotateChevron(index, true)
    } else {
        changeDocumentSize(index, false)
        rotateChevron(index, false)
    }

    animationFlags[index] = !animationFlags[index]
}

const pdfDocuments = document.getElementsByClassName("document")
const dropdownTitle = document.getElementsByClassName("dropdown__title")

function changeDocumentSize(index, isExpanded) {
    const doc = pdfDocuments[index]
    const title = dropdownTitle[index]

    const defaultSizeValue = 0 + "px"
    const expandSize = getExpandSize()
    const expandHeight = expandSize.height + "px"
    const expandWidth = expandSize.width + "px"

    if (isExpanded) {
        doc.style.height = defaultSizeValue
        doc.style.width = defaultSizeValue
        doc.style.marginBottom = defaultSizeValue
        title.style.marginBottom = defaultSizeValue
    } else {
        doc.style.height = expandHeight
        doc.style.width = expandWidth
        doc.style.marginLeft = 20 + "px"
        doc.style.marginRight = 20 + "px"
        doc.style.marginBottom = 20 + "px"
        title.style.marginBottom = 10 + "px"
    }
}

const chevrons = document.getElementsByClassName("chevron")

function rotateChevron(index, isRotated) {
    const chevron = chevrons[index]

    isRotated ? chevron.style.transform = "rotate(-90deg)" : chevron.style.transform = "rotate(0deg)"
}

function getExpandSize() {
    const width = document.body.clientWidth

    if (width < 321) {
        return { height: 300 }
    } else if (width < 480) {
        return { height: 350 }
    } else if (width < 768) {
        return { height: 500 }
    } else if (width < 1025) {
        return { width: 640, height: 500 }
    } else if (width < 1200) {
        return { width: 940, height: 400 }
    } else {
        return { width: 1000, height: 600 }
    }
}