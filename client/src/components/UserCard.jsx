import React from "react";
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    height: "100%",
  }
});

const UserCard = () => {
  const classes = useStyles();

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
            Vanilla Charlie
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vanilla Charlie is the purest and most basic flavor of Charlie
            available. Best for those looking for a solid relationship building
            gentleman
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Dislike
        </Button>
        <Button size="small" color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;