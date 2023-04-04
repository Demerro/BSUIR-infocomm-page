setDropdownWidth()

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

function changeDocumentSize(index, isExpanded) {
    const doc = pdfDocuments[index]

    const defaultSizeValue = 0 + "px"
    const expandSize = getExpandSize()
    const expandHeight = expandSize.height + "px"
    const expandWidth = expandSize.width + "px"

    if (isExpanded) {
        doc.style.height = defaultSizeValue
        doc.style.width = defaultSizeValue
        doc.style.marginBottom = defaultSizeValue;
    } else {
        doc.style.height = expandHeight
        doc.style.width = expandWidth
        doc.style.marginBottom = 20 + "px";
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
        return { width: 300, height: 300 }
    } else if (width < 480) {
        return { width: 360, height: 300 }
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

function setDropdownWidth() {
    const dropdowns = document.getElementsByClassName("dropdown")
    const lines = document.getElementsByTagName("hr")

    const expandSize = getExpandSize()
    const hrMargin = 70

    for (let dropdown of dropdowns)
        dropdown.style.width = expandSize.width + "px"

    for (let line of lines)
        line.style.width = expandSize.width - hrMargin + "px"
}