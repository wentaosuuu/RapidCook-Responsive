//获取屏幕宽度(viewport) Obtenir le large d'écran
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//获取html的dom  Obtenir le dom du html
let htmlDom = document.getElementsByTagName('html')[0];

//设置html的fontsize  définir fontsize du html
htmlDom.style.fontSize = htmlWidth / 10 + 'px';  

//重新获取屏幕宽度和html的dom  reobtenir le large d'écran et redéfinir fontsize du html
window.addEventListener('resize',(e)=>{
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';  
})

