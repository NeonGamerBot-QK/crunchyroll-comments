var instance = typeof chrome === 'undefined' ? browser : chrome
instance.runtime.onInstalled.addListener(function (object) {
  instance.tabs.create({url: 'https://saahild.com/crunchyroll.html?fi'}, function (tab) {
    console.log('options page opened')
  })
})
