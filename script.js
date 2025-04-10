const sectionRight = document.getElementById("main-section-right")
const sectionLeft = document.getElementById("main-section-left")
const main = document.getElementById('main')

if(window.innerWidth < 1200){
    sectionLeft.appendChild(sectionRight)
    console.log(sectionLeft)
}else{
    main.appendChild(sectionRight)
}
onresize = () => {
    if(window.innerWidth < 1200){
        sectionLeft.appendChild(sectionRight)
        console.log(sectionLeft)
    }else{
        main.appendChild(sectionRight)
    }
}