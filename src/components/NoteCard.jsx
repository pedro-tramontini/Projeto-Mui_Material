import { DeleteOutlined } from "@mui/icons-material"
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import axios from "axios";


export default function NoteCard({ note, deletePost }) {

    return(
        <Card elevation={1} >
            <CardHeader action={
                <IconButton onClick={() => deletePost(note.id)} >
                    <DeleteOutlined/>
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
                <Typography variant="body3" color="primary">
                    {`ID: ${note.id}`}
                </Typography>
            </CardContent>
        </Card>

    )
}