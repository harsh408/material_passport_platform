import React, {useState} from 'react';
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
import styled from 'styled-components'
import Modal from './Modal';

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
  const [showModal,setShowModal] = useState(false)
  const [selectImage,setSelectImage] = useState('')
  const openModal = (image) => {
    setShowModal(prev => !prev)   
    setSelectImage(image)
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={200}  spacing={30} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
          <GridListTile>
            <img src={image_1} alt="Door" onClick={()=>openModal('image_1')} />
            <GridListTileBar
              title="Door"
              subtitle="Rs xxxxxx"
            />            
          </GridListTile>
          <GridListTile>
            <img src={image_2} alt="Door" onClick={()=>openModal('image_2')}/>
            <GridListTileBar
              title="Concrete Floor Slab"
              subtitle="Rs xxxxx"
            />
          </GridListTile>
          <GridListTile>
            <img src={image_3} alt="Door" onClick={()=>openModal('image_3')}/>
            <GridListTileBar
              title="Bricks"
              subtitle="Rs xxxxxx"
            />
           
          </GridListTile>
          <GridListTile>
            <img src={image_4} alt="Door" onClick={()=>openModal('image_4')}/>
            <GridListTileBar
              title="Gravel"
              subtitle="Rs xxxxxx"
            />
            
          </GridListTile>
          <GridListTile>
            <img src={image_5} alt="Door" onClick={()=>openModal('image_5')}/>
            <GridListTileBar
              title="Pillar"
              subtitle="Rs xxxxxxx"
            />
            
          </GridListTile>
          <GridListTile>
            <img src={image_6} alt="Door" onClick={()=>openModal('image_6')}/>
            <GridListTileBar
              title="Window"
              subtitle="Rs xxxxxx"
            />
            
          </GridListTile>
        ))
      </GridList>
    {selectImage === 'image_1'&&<Modal showModal={showModal} setShowModal={setShowModal} image={image_1} description={'Best quality Doors at best range of prices available at our store'}></Modal> }
    {selectImage === 'image_2'&&<Modal showModal={showModal} setShowModal={setShowModal} image={image_2} description={'Best quality Concrete floor slab at best range of prices available at our store'}></Modal>}      
    {selectImage === 'image_3'&&<Modal showModal={showModal} setShowModal={setShowModal} image={image_3} description={'Best quality Bricks at best range of prices available at our store'}></Modal>}      
    {selectImage === 'image_4'&&<Modal showModal={showModal} setShowModal={setShowModal} image={image_4} description={'Best quality Gravel at best range of prices available at our store'}></Modal>}      
    {selectImage === 'image_5'&&<Modal showModal={showModal} setShowModal={setShowModal} image={image_5} description={'Best quality Pillars at best range of prices available at our store'}></Modal>}      
    {selectImage === 'image_6'&&<Modal showModal={showModal} setShowModal={setShowModal} image={image_6} description={'Best quality Window at best range of prices available at our store'}></Modal>}       
    </div>
  );
}

