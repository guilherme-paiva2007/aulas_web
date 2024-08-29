    // Storage

let storage = {};
let storagePrefix = "aulasweb" + "_"

/**
 * Salva um valor no armazenamento do navegador - `window`
 * @param {String} infoName Nome do identificador do valor 
 * @param {String} info Valor a ser armazenado
 * @param {"local"|"session"} storageType Armazenamento que será usado
 * @returns {void}
 */
storage.set = function storageSaveInfo(infoName, info, storageType) {
    if (typeof infoName !== "string" || infoName == "" || infoName == undefined) return console.log(`Escrita falha definir um nome de local: Nome inválido.`);
    if (typeof info !== "string" || info == "" || info == undefined) return console.log(`Escrito falha ao definir um valor: Valor inválido.`);

    if (storageType == undefined) return;
    if (!storageType.isIn(['local', 'session'])) return;

    switch (storageType) {
        case "local":
            localStorage.setItem(storagePrefix + infoName, info);
            break;
        case "session":
            sessionStorage.setItem(storagePrefix + infoName, info);
            break;
        default:
            console.log(`Escrita de ${infoName} falha: Não possível definir tipo de armazenamento`);
            break;
    }
}

/**
 * Resgata um valor de algum armazenamento
 * @param {String} infoName Nome do identificador do valor
 * @param {"local"|"session"} targetStorage Tipo de armazenamento a ser procurado
 * @returns {String} Valor armazenado no local
 */
storage.get = function storageGetInfo(infoName, targetStorage) {
    if (typeof infoName !== "string" || infoName == "" || infoName == undefined) return console.log(`Busca falha ao procurar o nome do local: Nome inválido.`);
    if (targetStorage == undefined) return;
    if (!targetStorage.isIn(['local', 'session'])) targetStorage = "local";

    switch (targetStorage) {
        case "local":
            return localStorage.getItem(storagePrefix + infoName);
            break;
        case "session":
            return sessionStorage.getItem(storagePrefix + infoName);
            break;
        default:
            break;
    }
}

/**
 * Remove um 
 * @param {String} infoName 
 * @param {"local"|"session"} targetStorage 
 * @returns {void}
 */
storage.remove = function storageRemoveInfo(infoName, targetStorage) {
    if (typeof infoName !== "string" || infoName == "" || infoName == undefined) return console.log(`Busca falha ao procurar o nome do local: Nome inválido.`);
    if (targetStorage == undefined) return;
    if (!targetStorage.isIn(['local', 'session'])) targetStorage = "local";

    switch (targetStorage) {
        case "local":
            return localStorage.removeItem(storagePrefix + infoName);
            break;
        case "session":
            return sessionStorage.removeItem(storagePrefix + infoName);
            break;
        default:
            break;
    }
}

/**
 * LImpa o armazenamento local em todos os índices da inovapay
 * @param {"both"|"local"|"session"} storageType Tipo do armazenamento a ser apagado (`both` como padrão)
 * @returns {void}
 */
storage.clear = function storageClear(storageType = "both") {
    function clearLocal() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(storagePrefix)) localStorage.removeItem(key)
        })
    }
    function clearSession() {
        Object.keys(sessionStorage).forEach(key => {
            if (key.startsWith(storagePrefix)) sessionStorage.removeItem(key)
        })
    }

    switch (storageType) {
        case "local":
            clearLocal();
            break;
        case "session":
            clearSession();
            break;
        case "both":
            clearLocal()
            clearSession()
            break;
        default:
            break;
    }
}

storage.localSet = (infoName, info) => { storage.set(infoName, info, 'local') }
storage.sessionSet = (infoName, info) => { storage.set(infoName, info, 'session') }
storage.localGet = (infoName) => { return storage.get(infoName, 'local') }
storage.sessionGet = (infoName) => { return storage.get(infoName, 'session') }
storage.localRemove = (infoName) => { storage.remove(infoName, 'local') }
storage.sessionRemove = (infoName) => { storage.remove(infoName, 'session') }
storage.localClear = () => { storage.clear('local') }
storage.sessionClear = () => { storage.clear('session') }
storage.fullClear = () => { storage.clear('both') }

    // Theme Object and Methods

const theme = {}

theme.list = ['light', 'dark', 'beige']
theme.colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

theme.set = function setTheme(themeName) { // Arrumar com o novo objeto storage
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

theme.updateSlides

theme.changeSlider = class themeChangeSlider { // Precisa ser uma classe mesmo? :|
    /**
     * Cria um `input range` capaz de alterar o tema alvo.
     * @param {"theme"|"color"} target 
     * @param {{
     *      background: "match"|"gradient"
     *      type: "select"|"range"
     * }} configs 
     */
    constructor(target, configs) {
        this.target = target;
        this.configs = {};
        this.configs.background = configs.background;
        this.configs.type = configs.type;

        if (typeof configs.type !== "string" || configs.type == undefined) this.configs.type = "select"
        if (typeof configs.background !== "string" || configs.type == undefined) this.configs.background = "match"
        if (!configs.type.isIn(['select', 'range'])) this.configs.type = "select"
        if (!configs.background.isIn(['match', 'gradient'])) this.configs.background = "match"

        if (typeof this.target || this.target == undefined || !this.isIn(['theme', 'color'])) this.target = 'theme'
    }
}

    // Inputs Object and Methods

const inputs = {}

inputs.loadChecked = function inputAutoLoad(inputName, requiredValue, selectElement = false) { // Refazer para englobar inputs de radio, checkbox e select
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
