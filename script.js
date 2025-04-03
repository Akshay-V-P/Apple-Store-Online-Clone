import audioDevicesDb from "./audio-devices.js"
let parentClass = document.querySelector('.audioDevices')
function createElements(parentClass, className, dataBase) {
    console.log(dataBase.length);
    dataBase.forEach(element => {
        let childElement = document.createElement("div")
        childElement.classList.add(className)

        element.img && (() => {
            let img = document.createElement('img')
            img.src = element.img
            childElement.appendChild(img)

        })();
        let detailsDiv = document.createElement('div')
        detailsDiv.classList.add("audioDeviceProductsDetails")
        childElement.appendChild(detailsDiv)

        element.li && (() => {
            let ul = document.createElement('ul')
            element.li.forEach(e => {
                let li = document.createElement('li')
                let imgInli = document.createElement('img')
                imgInli.src = e
                li.appendChild(imgInli)
                ul.appendChild(li)
            })
            detailsDiv.appendChild(ul)
        })();

        element.badge && (() => {
            let badge = document.createElement('p')
            badge.textContent = element.badge
            detailsDiv.appendChild(badge)
        })();
        
        element.name && (() => {
            let heading = document.createElement('h2')
            heading.textContent = element.name
            detailsDiv.appendChild(heading)
        })();

        element.price && (() => {
            let price = document.createElement('h4')
            price.textContent = element.price
            detailsDiv.appendChild(price)
        })();

        parentClass.appendChild(childElement)
    });
}

createElements(parentClass,"audioDeviceProducts", audioDevicesDb);