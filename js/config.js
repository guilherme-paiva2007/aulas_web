let HTMLs = new patternList()

HTMLs.header = new patternElement('header', 'tag')
HTMLs.footer = new patternElement('footer', 'tag')
HTMLs.header.value = "<p>Siiiiim</p>"
HTMLs.footer.value = "<b>Footer</b>"

HTMLs.provisoreButtons = new patternElement('provisoreButtons', 'class')
HTMLs.provisoreButtons.value = `
                <select name="mainColorSelector" onchange="processValue(value => theme.setColor(value))">
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="purple">purple</option>
                </select>
                <select name="themeSelector" onchange="processValue(value => theme.set(value))">
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                </select>`

HTMLs.headerMenuIcon = new patternElement('headerMenuIcon', 'id')
HTMLs.headerMenuIcon.value = `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92"><path fill="var(--white)" d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"></path></svg>`
HTMLs.headerConfigIcon = new patternElement('headerConfigIcon', 'id')
HTMLs.headerConfigIcon.value = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path fill="var(--white)" d="M46.66 21h-3.99c-.8 0-1.45-.44-1.76-1.18-.3-.73-.15-1.51.42-2.07l2.82-2.82c1.3-1.3 1.3-3.42 0-4.73L41.8 7.86c-1.26-1.27-3.46-1.27-4.72 0l-2.83 2.82c-.46.47-.97.56-1.32.56-.49 0-.98-.19-1.34-.53-.27-.25-.59-.69-.59-1.38V5.34A3.34 3.34 0 0 0 27.66 2h-3.31C22.5 2 21 3.5 21 5.34v3.99c0 1.2-.97 1.91-1.92 1.91-.35 0-.86-.09-1.32-.56l-2.83-2.82c-1.26-1.27-3.46-1.27-4.72 0L7.86 10.2c-.63.63-.98 1.47-.98 2.36 0 .9.35 1.74.98 2.37l2.82 2.82c.57.56.72 1.34.42 2.07-.31.74-.97 1.18-1.76 1.18H5.35C3.5 21 2 22.5 2 24.34v3.32C2 29.5 3.5 31 5.35 31h3.99c.79 0 1.45.44 1.76 1.18.3.73.15 1.51-.42 2.07l-2.82 2.82c-.63.63-.98 1.47-.98 2.36 0 .9.35 1.74.98 2.37l2.35 2.34c1.26 1.27 3.46 1.27 4.72 0l2.83-2.82c.46-.47.97-.56 1.32-.56.95 0 1.92.71 1.92 1.91v3.99C21 48.5 22.5 50 24.35 50h3.31c1.85 0 3.34-1.5 3.34-3.34v-3.99c0-1.2.98-1.91 1.93-1.91.35 0 .86.09 1.32.56l2.82 2.82c1.27 1.27 3.47 1.27 4.73 0l2.35-2.34c.63-.63.98-1.47.98-2.37 0-.89-.35-1.73-.98-2.36l-2.82-2.82c-.57-.56-.72-1.34-.42-2.07.31-.74.96-1.18 1.76-1.18h3.99C48.5 31 50 29.5 50 27.66v-3.32C50 22.5 48.5 21 46.66 21zM26 36c-5.51 0-10-4.49-10-10s4.49-10 10-10c5.52 0 10 4.49 10 10s-4.48 10-10 10z"/></svg>`