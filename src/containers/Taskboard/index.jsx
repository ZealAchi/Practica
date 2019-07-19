import React from "react";
import styles from "./styles";
import { withStyles,Typography, Button, Card, CardContent, CardActions } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { modules } from "Constants2";
import Grid from "@material-ui/core/Grid";
// import Typography from '@material-ui/core/Typography'
const { STATUSES } = modules;
const listTask = [
  {
    id: 1,
    title: "Leer un libro",
    description: "Leer libro de material Ui",
    status: 0
  },
  {
    id: 2,
    title: "Jugar futbol",
    description: "Con mis amigos",
    status: 2
  },
  {
    id: 1,
    title: "Jugar un juego",
    description: "",
    status: 1
  }
];
function TaskBoard(props) {
  const { classes } = props;
  const renderBoard = (
    <Grid container spacing={2}>
      {STATUSES.map((status, index) => {
        const taskFiltered=listTask.filter(task=>task.status===status.value)
        return (
          <Grid item md={4} xs={12} key={index}>
            <div className={classes.status}>{status.label}</div>
            <div className="classes wrapperListTask">
              {taskFiltered.map((task,index)=>{
                const {title,status}=task
                return <Card key={index} className={classes.card}>
                  <CardContent>
                    <Grid container className="space-between">
                      <Grid item md={8}>
                        <Typography component="h2">{title}</Typography>
                      </Grid>
                      <Grid item md={8}>{
                        status.label
                      }
</Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size="small"></Button>
                  </CardActions>
                  </Card>
              })}
            </div>
          </Grid>
        );
      })}
      {console.log(STATUSES)}
    </Grid>
  );

  return (
    <div className={classes.taskBoard}>
      <Button variant="contained" color="primary" className={classes.button}>
        <AddIcon />
        Agregar nueva tarea
      </Button>
      {renderBoard}
    </div>
  );
}

export default withStyles(styles)(TaskBoard);
