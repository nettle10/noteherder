import React from "react"

const NoteList = () => {
    return(
        <div class="NoteList" style = {styles.noteList}>
          <h3 style = {styles.h3}>Notes</h3>
          <ul id="notes" style = {styles.ul}>
            <a class="active" style = {styles.ula}>
              <li>
                <div class="note" style ={styles.note}>
                  <div class="note-title" style = {styles.noteTitle}>
                    Kohlrabi welsh
                  </div>
                  <div class="note-body" style={styles.noteBody}>
                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li>
                <div class="note" style={styles.note}>
                  <div class="noteTitle" style={styles.noteTitle}>
                    Dandelion cucumber
                  </div>
                  <div class="note-body" style={styles.noteBody}>
                    <p>
                      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li>
                <div class="note" style = {styles.note}>
                  <div class="note-title" style = {styles.noteTitle}>
                    Prairie turnip
                  </div>
                  <div class="note-body" style={styles.noteBody}>
                    <p>
                      Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
    )
}

const styles = {
    noteList: {
        borderLeft: '1px solid #eee',
        boarderRight: '1px solid #eee',
        width: '30rem',
    },
    h3:{
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem',
    },
    ul:{
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding:'0',
        width: '100%',
        color: '#999',
    },
    ula:{
        color: 'inherit',
        textDecoration: 'none',
    },
    ulli:{
        height: '100px',
        fontSize:'90px',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    note:{
      display: 'block',
      height: '100px',
      padding: '1em',
      textDecoration: 'none',
    },
    noteTitle:{
      color: '#4a4a4a',
      fontFamily: 'Fauna One',
      fontSize: '120%',
      fontWeight: '400',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis'
    },
    noteBody:{
        height: '54px',
        overflow: 'hidden',
        marginTop:'.5rem',
        fontSize: '1em!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none',
    }
}
export default NoteList