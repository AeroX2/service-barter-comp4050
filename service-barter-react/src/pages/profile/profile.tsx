import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import * as React from "react";

import styles from "./profile.scss";

export const Profile = React.memo(() => (
  <div className={styles.content}>
    <div className={styles.profile}>
      <Typography
        variant="h5"
        style={{ display: "inline-block", marginLeft: "30px" }}
      >
        James Ivan
      </Typography>
      <Typography
        variant="subtitle2"
        style={{ display: "inline-block", marginLeft: "20px" }}
      >
        Macquarie Park, NSW Australia
      </Typography>
      <RoomIcon />
      <div className={styles.settingButtons}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Reset Password
        </Button>
        <Button variant="contained" color="primary">
          Edit profile
        </Button>
      </div>
      <div className={styles.profileBody}>
        <div className={styles.info}>
          <Typography variant="h6">Email address:</Typography>
          <Typography variant="h6" style={{ color: "#0066ff" }}>
            randomemail@students.mq.edu.au
          </Typography>
          <Typography variant="h6">Username:</Typography>
          <Typography variant="h6" style={{ color: "#0066ff" }}>
            Mqusername1234
          </Typography>
        </div>
        <Paper elevation={6} style={{ marginTop: "50px" }}>
          <div className={styles.infoBox}>
            <Typography variant="h5">History</Typography>
            <Typography variant="subtitle1">Contents</Typography>
          </div>
        </Paper>
        <Paper elevation={6} style={{ marginTop: "30px" }}>
          <div className={styles.infoBox}>
            <Typography variant="h5">Reviews</Typography>
            <Typography variant="subtitle1">Contents</Typography>
          </div>
        </Paper>
      </div>
    </div>
  </div>
));