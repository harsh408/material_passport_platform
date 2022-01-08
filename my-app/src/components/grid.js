import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import image_1 from './../utils/image_1.jpeg'
import image_2 from './../utils/image_2.jpeg'
import image_3 from './../utils/image_3.jpeg'
import image_4 from './../utils/image_4.jpeg'
import image_5 from './../utils/image_5.jpeg'
import image_6 from './../utils/image_6.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 800,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200}  spacing={30} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
          <GridListTile>
            <img src={image_1} alt="Door" />
            <GridListTileBar
              title="Door"
              subtitle="Rs xxxxxx"
            />
          </GridListTile>
          <GridListTile>
            <img src={image_2} alt="Door" />
            <GridListTileBar
              title="Window"
              subtitle="Rs xxxxx"
            />
          </GridListTile>
          <GridListTile>
            <img src={image_3} alt="Door" />
            <GridListTileBar
              title="Bricks"
              subtitle="Rs xxxxxx"
            />
          </GridListTile>
          <GridListTile>
            <img src={image_4} alt="Door" />
            <GridListTileBar
              title="Gravel"
              subtitle="Rs xxxxxx"
            />
          </GridListTile>
          <GridListTile>
            <img src={image_5} alt="Door" />
            <GridListTileBar
              title="Pillar"
              subtitle="Rs xxxxxxx"
            />
          </GridListTile>
          <GridListTile>
            <img src={image_6} alt="Door" />
            <GridListTileBar
              title="Window"
              subtitle="Rs xxxxxx"
            />
          </GridListTile>
        ))
      </GridList>
    </div>
  );
}