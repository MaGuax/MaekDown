// 实现 在线 md
/*  1, 能够实时输出
 *  2, 能够保存数据(localstorage)
 */

// 工具
var e = (sel) => document.querySelector(sel)

var log = console.log.bind(console)

var appendHtml = (element, html) => (element.insertAdjacentHTML('beforeend',
    html))

var box = e('#id-content')

// 完成实时输出功能
var md = new Remarkable()
e('#id-source').addEventListener('input', function(event) {
    var val = event.target.value
    box.innerHTML = md.render(val)
    log('magua ** ', md.render(val))
    saveContents()
})

// 存储功能
// 使用 localStorage, 存 innerHTML
var save = function(array) {
    var s = JSON.stringify(array)
    localStorage.contents = s
}

var load = function() {
    var s = localStorage.contents
    return JSON.parse(s)
}

var saveContents = function() {
    var cont = []
    cont.push(box.innerHTML)
    save(cont)
}

var loadContents = function() {
    var nzrs = JSON.parse(localStorage.contents)
    appendHtml(box, nzrs)
}

loadContents()
