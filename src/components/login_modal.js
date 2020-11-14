import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Icon from '@material-ui/core/Icon';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import './style.css';
import ModalC from './modalC';
import {fb_login,google_login,github_login} from '../store/action';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    maxWidth:'400px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

// console.log(this.props)
 function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button type="button" onClick={handleOpen}
          style={{
            borderRadius:"30px",
            borderLeft:"5px solid Yellow",
            borderTop:"5px solid green",
            borderBottom:"5px solid blue",
            borderRight:"5px solid Yellow",
            outline:"none",
          }}  className="px-3" color="Secondary">
            <Icon className="pt-1 m-0">add</Icon>SELL
          </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="mb-3">
          <button type="button" onClick={handleClose} className="c_btn">&times;</button>
            </div><br/>
            <ModalC />
            
            <button className="px-5 p-2 mx-sm-3 m-1 l_btn mt-5" ><Icon className="pt-1">phone</Icon>Continue with Phone</button><br />
            <button onClick={()=>this.props.fb_login(this.props.history)} className="px-sm-5  p-2 mx-sm-3 m-1 l_btn"><Icon className="pt-1">facebook</Icon>Continue with Facebook</button><br/>
            <button onClick={()=>this.props.google_login(this.props.history)} className="px-5 p-2 mx-sm-3 m-1 l_btn"><Icon className="pt-1">gamepadicon</Icon>Continue with Google</button><br/>
            <button className="px-5 p-2 mx-sm-3 m-1 l_btn"><Icon className="pt-1">email</Icon>Continue with Email</button><br/>
            <p className="mt-3 text-center ">We won't share your personal details with anyone</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

// const mapStateToProps=(state)=>({
//   user:state.users
// })

const mapDispatchToProp=(dispatch)=>({
  fb_login:(history)=> dispatch(fb_login(history)),
  google_login:(history)=> dispatch(google_login(history)),
  github_login:(history)=> dispatch(github_login(history)),
})
export default connect(null,mapDispatchToProp)(SpringModal);