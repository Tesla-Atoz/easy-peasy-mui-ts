import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./detail-card";
import { userDataInterface } from "../../models/userDataModel";

interface DetailCardInterface extends userDataInterface {
  key: string;
  onDelete: (id: string) => void;
  onEdit: (obj: userDataInterface) => void;
}

const DetailCard = (props: DetailCardInterface) => {
  const { name, age, id, onDelete, onEdit, edit } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name here : {props.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Age here : {props.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit({ name, age, id, edit })}>
          Edit
        </Button>
        <Button size="small" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default DetailCard;
