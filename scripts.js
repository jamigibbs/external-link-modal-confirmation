const externalLinkModal = (function() {
  let resource
  let url = ''
  
  return {
    settings: {
      externalLinks: [...document.querySelectorAll('.ext_link')],
      modal: document.querySelector('.external-link-modal'),
      closeX: document.querySelector(".close"),
      btnContinue: document.querySelector('.btn-continue'),
      btnClose: document.querySelector(".btn-close"),
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
      url = event.target.href
      this.displayModal(url)
    },
    
    displayModal: function(url) {
      resource.modal.style.display = 'block'
      
      resource.btnContinue.addEventListener('click', () => {
        this.launchExternalResource(url)
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
    
    launchExternalResource: function(){
      window.open(url)
      resource.modal.style.display = 'none'
    }
  }
  
}())

externalLinkModal.init()
