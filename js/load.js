HTMLs.write()
theme.load()

inputs.loadChecked('mainColorSelector', localStorage.mainColor, true)
inputs.loadChecked('themeSelector', localStorage.theme, true)
inputs.applyEmptyPlaceholder() // Auxilia estilização de :placeholder-shown