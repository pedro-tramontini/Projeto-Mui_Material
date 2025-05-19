import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { FormControlLabel, Radio, RadioGroup, TextField, FormLabel, FormControl } from "@mui/material";
// import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [errorDetails, setErrorDetails] = useState(false)
    const [errorTitles, setErrorTitles] = useState(false)
    const [category, setCategory] = useState('todos')

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorDetails()
        setErrorTitles()
        
        if (details == "") {
            setErrorTitles(true)
        } 
        if (title == "") {
            setErrorDetails(true)
        }
        
        if (details && title ){
            axios.post('http://localhost:8000/notes', {
                "title": title,
                "details": details,
                "category": category
        })


            // fetch('http://localhost:8000/notes', {
            //     method: 'POST',
            //     headers: {"Content-type": "application/json"},
            //     body: JSON.stringify({ title, details, category })
            // })
        }

    }


    return(
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>
            
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField onChange={(e) => setTitle(e.target.value)} label="Details" color="secondary" sx={{marginTop: 2, marginBottom: 2, display: 'block'}} multiline rows={4} fullWidth required error={errorDetails}/>
            <TextField onChange={(e) => setDetails(e.target.value)} label="Note Title" color="secondary" fullWidth required error={errorTitles}/>

            <FormControl sx={{paddingBlock: 5}}>
                <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                    
                <Button display="flex" type="submit" color="secondary" variant="contained" endIcon={<ArrowForwardRoundedIcon/>}>
                    Submit
                </Button>
            </FormControl>


            </form>

            

        </Container>
    )
}

export default Create