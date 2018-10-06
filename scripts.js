const externalLinkModal = (function() {
  let resource, active = false

  return {
    settings: {
      externalLinks: [...document.querySelectorAll('.ext_link')],
      modal: document.querySelector('.external-link-modal'),
      closeX: document.querySelector(".close"),
      btnContinue: document.querySelector('.btn-continue'),
      btnClose: document.querySelector(".btn-close"),
      externalUrl: ''
    },

    init: function() {
      resource = this.settings
      this.load()
    },

    load: function() {
      resource.externalLinks.forEach((link) => {
        link.addEventListener('click', (event) => this.externalLinkClick(event))
      })
    },

    externalLinkClick: function(event) {
      event.preventDefault()
      resource.externalUrl = event.target.href
      this.displayModal(resource.externalUrl)
    },

    displayModal: function() {
      active = true
      resource.modal.style.display = 'block'

      resource.btnContinue.addEventListener('click', () => {
        this.launchExternalResource(resource.externalUrl)
      })

      resource.btnClose.addEventListener('click', () => {
        this.closeModal()
      })

      resource.closeX.addEventListener('click', () => {
        this.closeModal()
      })

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = (event) => {
        if (event.target == resource.modal) {
          this.closeModal()
        }
      }
    },

    closeModal: function() {
      resource.modal.style.display = 'none'
    },

    launchExternalResource: function(url){
      if (active) {
        window.open(url)
        resource.modal.style.display = 'none'
        active = false
      }
    }
  }

}())

externalLinkModal.init()
