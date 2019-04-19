import React from "react";
import { NotificationContainer , NotificationManager } from "react-notifications";
import { module as NotificationsModule } from "../Notification/notification.constants";
import { connect } from "react-redux";


function Notification({type,message}) {

  return (
    <div>
      {type && NotificationManager[type](message)}
      <NotificationContainer/>
    </div>
  );
}

const mapStateProp = state => ({
  type: state[NotificationsModule].type,
  message: state[NotificationsModule].message
});


export default connect(mapStateProp)(Notification);

