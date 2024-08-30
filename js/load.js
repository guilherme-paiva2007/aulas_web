HTMLs.write()
theme.load()

inputs.applyEmptyPlaceholder() // Auxilia estilização de :placeholder-shown

search.element('button', 'tag').addEventListener('mouseover', () => { alert('Teste') })