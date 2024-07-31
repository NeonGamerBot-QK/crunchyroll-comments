var instance = typeof chrome === 'undefined' ? browser : chrome
instance.runtime.onInstalled.addListener(function (object) {
  if(object.reason === instance.runtime.OnInstalledReason.INSTALL) {
    instance.tabs.create({url: 'https://saahild.com/crunchyroll.html?fi'}, function (tab) {
      console.log('options page opened')
    })
  }
  // instance.runtime.setUninstallURL('https://saahild.com/crunchyroll.html')
  // instance.runtime.openOptionsPage()
})

;(async () => {
  const rawRegexes = await (await fetch(instance.runtime.getURL('regex-filter.txt'))).text()
  const wordfilter = await (await (await fetch(instance.runtime.getURL('wordfilter.txt'))).text()).split('\n')
  instance.runtime.onMessage.addListener((ev) => {
    console.log(ev)
    const msg = ev.msg
    switch (ev.cmd) {
      case 'check_content':
        const regexes = rawRegexes.split('\n').map(r => new RegExp(r))
        if (wordfilter.some(e => msg.includes(e) || msg.toLowerCase().includes(e.toLowerCase())) || regexes.some(e => e.test(msg))) {
          return Promise.resolve(true)
        } else {
          return Promise.resolve(false)
        }
        break
      default:
        return false
        break
    }
    return false
  })
})()
const noop = () => {}
setInterval(() => {
  // do nothing
  noop()
})
// interval keeps the service worker on
