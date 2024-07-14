var instance = typeof chrome === 'undefined' ? browser : chrome
console.debug(instance)
instance.storage.sync.get("safeMode").then((v) => {
document.getElementsByTagName('input')[0].checked = v.safeMode

document.getElementsByTagName('input')[0].onchange = (i) => {
    // alert('inp')
    instance.storage.sync.set({
        safeMode: i.target.checked 
    }).catch(e => {
        alert(e.message)
    })
}
})
