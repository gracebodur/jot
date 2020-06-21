class App {
    constructor() {
        this.notes= []
        this.$placeholder = document.querySelector('#placeholder')
        this.$form = document.querySelector('#form')
        this.$noteTitle = document.querySelector('#note-title')
        this.$noteText = document.querySelector('#note-text')
        this.$formButtons = document.querySelector('#form-buttons')
        this.addEventListeners()
    }

    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event)
        })

        //listen for submit event on the form
        this.$form.addEventListener('submit', event => {
            event.preventDefault()
            const title = this.$noteTitle.value
            const text = this.$noteText.value
            const hasNote = title || text
            if (hasNote) {
                this.addNote({title: title, text: text})
            }

        })
    }

    handleFormClick() {
        const isFormClicked= this.$form.contains(event.target)

        if(isFormClicked) {
            this.openForm()
        } else {
            this.closeForm()
        }
    }

    openForm() {
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }

    closeForm() {
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
    }

    addNote(note) {
        const newNote = {
            title: note.title,
            text: note.txt,
            color: 'white',
            id: this.notes.length > 0 ? this.notes[this.notes.length -1].id + 1 : 1
        }
        this.notes = [...this.notes, newNote]
        //console.log(this.notes)
        this.displayNotes()
    }
    displayNotes() {
        const hasNotes = this.notes.length > 0
        this.$placeholder.style.display = hasNotes ? 'none' : 'flex'
        this.notes.map(note => `
            <div style='background: ${note.color}' class='note'>
            <div class="${note.title && 'note-title'}">${note.title}</div>
            <div class='note-text'>${note.text}</div>
            </div>
        `)
        // if (hasNotes) {
        //    this.$placeholder.style.display = 'none' 
        // } else {
        //     this.$placeholder.style.displa = 'flex'
        // }
    }
}

new App()