// Theme Object and Methods

const theme = {}

theme.list = ['light', 'dark', 'beige']

theme.colorList = ['blue', 'yellow', 'red', 'green', 'purple', 'orange']

theme.set = function setTheme(themeName) {
    let rewrited = false;

    if (localStorage.theme == undefined) { localStorage.setItem('theme', ""); rewrited = true;}
    if (!localStorage.theme.isIn(theme.list)) { localStorage.theme = "light"; rewrited = true;}

    if (rewrited) themeName = localStorage.theme

    themeName = themeName.toLowerCase().split('Theme').join('')
    if (!themeName.isIn(theme.list)) {
        themeName = localStorage.theme;
    }
    
    localStorage.setItem("theme", themeName);
    theme.list.forEach(_themeName => {
        if (_themeName == themeName) {
            document.getElementsByTagName('html')[0].classList.add(themeName + "Theme")
        } else {
            document.getElementsByTagName('html')[0].classList.remove(_themeName + "Theme")
        }
    })
}

theme.setColor = function setMainColor(mainColor) {
    let rewrited = false;

    if (localStorage.mainColor == undefined) { localStorage.setItem('mainColor', ''); rewrited = true; }
    if (!localStorage.mainColor.isIn(theme.colorList)) { localStorage.setItem('mainColor', 'blue'); rewrited = true; }

    if (rewrited) mainColor = localStorage.mainColor;
    
    mainColor = mainColor.toLowerCase().split('Main').join('')

    localStorage.setItem('mainColor', mainColor);
    theme.colorList.forEach(_mainColor => {
        if (_mainColor == mainColor) {
            document.getElementsByTagName('html')[0].classList.add(mainColor + "Main")
        } else {
            document.getElementsByTagName('html')[0].classList.remove(_mainColor + "Main")
        }
    })
}

theme.toggle = function toggleTheme() {
    switch (localStorage.theme) {
        case 'dark':
            theme.set('light')
            break;
        case 'light':
            theme.set('dark')
            break;
        default:
            break;
    }
}

theme.load = function loadTheme() {
    theme.set(localStorage.theme);
    theme.setColor(localStorage.mainColor);
}

// Inputs Object and Methods

const inputs = {}

inputs.loadChecked = function inputAutoLoad(inputName, requiredValue, selectElement = false) {
    document.getElementsByName(inputName).forEach(element => {
        if (selectElement) {
            element.value = requiredValue;
        } else {
            if (element.value == requiredValue) {
                element.checked = true;
            }
        }
    })
}

inputs.applyEmptyPlaceholder = function inputApplyPlaceholder() {
    document.getElementsByTagName('input').forEach(element => {
        if (!element.placeholder == "") return;
        // if (!element.required) return;
        if (element.classList.contains('ignorePlaceholderWrite')) return;
        element.placeholder = "";
    })
}

// Navigation

function navigateTo(destination) {
    window.location.href = destination;
}

// Pattern Classes

class patternList {
    constructor() {}
    write() {
        Object.values(this).forEach(pattern => {
            pattern.write()
        })
    }
}

class patternElement {
    constructor(target, type, rewriteType = "overwrite", value) {
        this.target = target;
        this.type = type;
        this.value = value;
        this.rewriteType = rewriteType;
        if (!this.rewriteType.isIn(["overwrite", "after", "before"])) this.rewriteType = "overwrite";
    }
    write() {
        function posValue(element, value, type) {
            if (type == "before") return value + element.innerHTML;
            if (type == "after") return element.innerHTML + value;
            return value;
        }
        switch (this.type) {
            case "id":
                let element = document.getElementById(this.target);
                this.value = posValue(element, this.value, this.rewriteType);
                if (!element) return;
                if (!element.classList) return;
                if (element.classList.contains('ignorePatternWrite')) return;
                element.innerHTML = this.value
                break;
            case "class":
                document.getElementsByClassName(this.target).forEach(element => {
                    this.value = posValue(element, this.value, this.rewriteType);
                    if (element.classList.contains('ignorePatternWrite')) return;
                    element.innerHTML = this.value}
                )
                break;
            case "tag":
                document.getElementsByTagName(this.target).forEach(element => {
                    this.value = posValue(element, this.value, this.rewriteType);
                    if (element.classList.contains('ignorePatternWrite')) return;
                    element.innerHTML = this.value}
                )
                break;
            default:
                break;
        }
    }
}
