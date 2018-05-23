import React from "react"

const NoteForm = () => {
    return(
        <div class="NoteForm">
          <div class="form-actions">
            <button type="button" style={styles.buttonSubmit}>
              <i class="fa fa-trash-o"></i>
            </button>
          </div>
          <form style={styles.form}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                style ={styles.input}
              />
            </p>
            
            <textarea name="body" style={styles.textArea}></textarea>
          </form>
        </div>
    )
}

const styles ={
    main:{
        flexGrow: '1',
        padding: '0 3rem',
    },
    formActions:{
        paddingTop: '1rem',
        marginLeft: '2rem',
        display:'ms-flexbox',
        display:'flex',
        alignContent:'center',
    },
    button:{
        border: 'none',
        background: 'none',
        padding:'0',
    },
    buttonSubmit:{
        backgroundColor:'#008bf8',
        borderRadious:'4px',
        color:'#fff',
        fontSize:'1.4rem',
        padding:'1rem',
    },
    form:{
        margin:'0 auto',
        maxWidth:'80rem',
    },
    input:{
        border:'none',
        fontSize:'200%',
        fontFamily:'Fauna One',
        color: '#008bf8',
        fontWeight:'400',
        width:'100%',
        outline:'none',
    },
    textArea:{
        borderColor: '#eee',
        width:'100%',
        height: 'calc(100vh-140px)',
        fontSize:'1.3em',
    }
}
export default NoteForm