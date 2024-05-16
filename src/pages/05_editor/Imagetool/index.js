class Imagetool {
  constructor({data, api}) {
    this.api = api
    this.data = {
      url: data.url || '',
      caption: data.caption || '',
      withBorder: data.withBorder || false,
      withBackground: data.withBackground || false,
      stretched: data.stretched || false
    }
    this.wrapper = undefined
    this.settings = [
      {
        name: 'withBorder',
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`
      },
      {
        name: 'stretched',
        icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`
      },
      {
        name: 'withBackground',
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`
      }
    ]
  }
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    }
  }
  static get pasteConfig() {
    return {
      tags: ['IMG']
    }
  }

  renderSettings() {
    var wrapper = document.createElement('div')
    this.settings.forEach(item => {
      var btn = document.createElement('div')
      // btn.classList.add('cdx-settings-button')
      btn.classList.add(this.api.styles.settingsButton)
      // btn.classList.toggle('cdx-settings-button--active', this.data[item.name])
      btn.classList.toggle(this.api.styles.settingsButtonActive, this.data[item.name])
      btn.innerHTML = item.icon
      wrapper.appendChild(btn)

      btn.addEventListener('click', () =>  {
        this._toggleTune(item.name)
        btn.classList.toggle('cdx-settings-button--active')
        btn.classList.toggle(this.api.styles.settingsButtonActive)
      })
    })
    return wrapper
  }

  _toggleTune(tune) {
    this.data[tune] = !this.data[tune]
    this._acceptTuneView()
  }

  _acceptTuneView() {
    this.settings.forEach(tune => {
      this.wrapper.classList.toggle(tune.name, !!this.data[tune.name])

      if (tune.name == 'stretched') {
        this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.stretched);
      }
    })
  }

  render() {
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('simple-image')

    if (this.data && this.data.url) {
      this._createImage(this.data.url, this.data.caption)
      return this.wrapper
    }

    var input = document.createElement('input')
    this.wrapper.appendChild(input)

    input.placeholder = 'Paste an image URL...'
    
    input.addEventListener('paste', event => {
      this._createImage(event.clipboardData.getData('text'))
    })

    return this.wrapper
  }

  _createImage(url, captionText) {
    var image = document.createElement('img')
    var caption = document.createElement('div')
    
    image.src = url
    caption.contentEditable = true
    caption.innerHTML = captionText || ''
    // insertHtmlAfterRange(captionText || '')

    this.wrapper.innerHTML = ''
    this.wrapper.appendChild(image)
    this.wrapper.appendChild(caption)

    caption.addEventListener('keydown', (e) => {
      if (e.keyCode === 8 || e.keyCOde === 46) {
        e.preventDefault()
        console.log(e)
      }
    })

    this._acceptTuneView()
  }

  validate(data) {
    if (!data.url.trim()) {
      return false
    }
    return true
  }

  save(blockContent) {    
    var img = blockContent.querySelector('img');
    var caption = blockContent.querySelector('[contentEditable]')

    var cap = caption ? caption.innerHTML || '' : ''

    console.log(cap)

    return Object.assign(this.data, {
      url: img ? img.src : '',
      caption: this.api.sanitizer.clean(cap, {
        a: function(el) {
          const href = el.getAttribute('href')
        
          if (href && href.substring(0, 4) === 'http') {
            return {
              href: true,
              target: '_blank'
            }
          } else {
            return {
              href: true
            }
          }
        }
      })
    })
  }

  onPaste(event) {
    console.log(event)
    switch (event.type) {
      case 'tag':
        var imgtag = event.detail.data
        this._createImage(imgtag.src)
        break;
    }
  }
}


function isSupportRange () {
  return typeof document.createRange === 'function' || typeof window.getSelection === 'function'
}

// 获取光标位置
function getCurrentRange () {
  let range = null
  let selection = null
  if (isSupportRange()) {
    selection = document.getSelection()
    if (selection.getRangeAt && selection.rangeCount) {
      range = document.getSelection().getRangeAt(0)
    }
  } else {
    range = document.selection.createRange()
  }
  return range
}

function insertHtmlAfterRange (html) {
  let selection = null
  let range = null
  if (isSupportRange()) {
    // IE > 9 and 其它浏览器
    selection = document.getSelection()
    console.log('selection', selection)
    if (selection.getRangeAt && selection.rangeCount) {
      let fragment, node, lastNode
      range = selection.getRangeAt(0)
      range.deleteContents()
      let el = document.createElement('span')
      el.innerHTML = html
      // 创建空文档对象,IE > 8支持documentFragment
      fragment = document.createDocumentFragment()

      while ((node = el.firstChild)) {
        lastNode = fragment.appendChild(node)
      }
      range.insertNode(fragment)
    
      if (lastNode) {
        range = range.cloneRange()
        range.setStartAfter(lastNode)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
  } else if (document.selection && document.selection.type != 'Control') {
    // IE < 9
    document.selection.createRange().pasteHTML(html)
  }
}
