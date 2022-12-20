import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="Harry">
           HP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.movie}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.imagem}
        alt="Harry Potter"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.txtprincipal}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          {props.filme}
          </Typography>
          <Typography paragraph>
          É preciso ter coragem para enfrentar os inimigos, e ainda mais para enfrentar os amigos. São as nossas escolhas que revelam o que realmente somos, muito mais do que as nossas qualidades. Não tenha pena dos mortos. Tenha pena dos vivos, e acima de tudo, daqueles que vivem sem amor.
          </Typography>
          <Typography paragraph>
          A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você lembrar de acender a luz. É o medo do desconhecido que nós tememos quando olhamos para a morte e a escuridão, nada mais. Não tenha pena dos mortos, Harry. Tenha pena dos vivos, e, acima de tudo, daqueles que vivem sem amor.
          </Typography>
          <Typography>
          Não tenha pena dos mortos e sim dos vivos, principalmente daqueles que vivem sem amor. O mundo não se divide em pessoas boas e más. Todos temos luz e trevas dentro de nós. O que importa é o lado o qual decidimos agir.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



