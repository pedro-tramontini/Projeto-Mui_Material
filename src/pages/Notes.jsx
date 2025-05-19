import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import NoteCard from "../components/NoteCard"

import axios from "axios";



export default function Notes() {
    const [notes, setNotes] = useState([])

    //Pegando dados da api e armazenando em notes
    useEffect(() => {
        axios.get('http://localhost:8000/notes')
            .then((response) => {
                setNotes(response.data)
                console.log("response", response)
            })
            .catch(function (error) {
                console.log(error);
            })
        
    }, [])
         
        const deletePost = (id) => {
            // axios.delete(`${id}`)
            console.log("notes", notes)
            const retorno = notes.map((note) => note.id != id)
            console.log("res", retorno)

            // setNotes(
                
            // )
            //setNotes()
        }

        useEffect(() => {
            console.log("teste", notes)
        }, [notes])

        
        // const handleDelete = async (id) => {
            //     await fetch("http://localhost:8000/notes/" + id, {
                //         method: 'DELETE'
                //     }).then(console.log('resolvido'))
                
                //     setNotes(notes.filter(note => {note.id != id}))
                
                // }
                
                return(
                    //Criando a gird com os noteCard com as informações obtidas pela api
                    <Container>
            <Grid container spacing={3}>
                {notes.map(note => ( 
                    <Grid size={{xs: 4, md: 6, lg: 12}} key={note.id}> 
                        <NoteCard note={note} deletePost={deletePost}/>
                    </Grid>
            ))}
            </Grid>
        </Container>
    )
    
}