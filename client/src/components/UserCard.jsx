import React from "react";
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
// import axios from "axios"


const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    height: "100%",
  }
});

const handleLike = async (e) => {
  const yesOrNo = e.currentTarget.dataset.id

  if(yesOrNo === "like") {
    console.log("I like this person");
    // App User ID/Name
    // loveInterest ID/Name
    // Hit the like route
  } else {
    // App User ID/Name
    // loveInterest ID/Name
    // Hit the dislike route
    console.log("HELL NO");
  }
}

const UserCard = (props) => {
  const classes = useStyles();
  const { description, name} = props.users

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          // height="140"
          // image="/public/images/contemplative-reptile.jpg"
          image="https://i.pinimg.com/474x/a3/aa/ea/a3aaea6e0ee8739dca9f2b11c8996fdb--soft-serve-google-images.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleLike} size="small" color="primary" data-id="dislike">
          Dislike
        </Button>
        <Button onClick={handleLike} size="small" color="primary" data-id="like">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;


