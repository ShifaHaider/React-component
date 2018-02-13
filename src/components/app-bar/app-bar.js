import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import DatePicker from 'material-ui/DatePicker';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class AppBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <FlatButton label="Default" />
                <FlatButton label="Primary" primary={true} />
                <FlatButton label="Secondary" secondary={true} />
                <FlatButton label="Disabled" disabled={true} />
                <br />
                <br />
                <FlatButton label="Full width" fullWidth={true} />
                <RaisedButton label="Default"/>
                <RaisedButton label="Primary" primary={true} />
                <RaisedButton label="Secondary" secondary={true}  />
                <RaisedButton label="Disabled" disabled={true}  />
                <br />
                <br />
                <RaisedButton label="Full width" fullWidth={true} />
                <RaisedButton
                    label="Choose an Image"
                    labelPosition="before"
                    containerElement="label">
                    <input type="file"  />
                </RaisedButton>
                <RaisedButton
                    label="Label before"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                    />
                <RaisedButton
                    href="https://github.com/callemall/material-ui"
                    target="_blank"
                    label="Github Link"
                    secondary={true}
                    icon={<FontIcon className="muidocs-icon-custom-github" />}
                    />
                <RaisedButton
                    icon={<ActionAndroid />}/>
                <RaisedButton
                    backgroundColor="#a4c639"
                    icon={<ActionAndroid color={fullWhite} />}
                    />
                <RaisedButton
                    href="https://github.com/callemall/material-ui"
                    target="_blank"
                    secondary={true}
                    icon={<FontIcon className="muidocs-icon-custom-github" />}/>
<br/>
                <Badge
                    badgeContent={4}
                    primary={true}
                    >
                    <NotificationsIcon />
                </Badge>
                <Badge
                    badgeContent={10}
                    secondary={true}
                    badgeStyle={{top: 12, right: 12}}
                    >
                    <IconButton tooltip="Notifications">
                        <NotificationsIcon />
                    </IconButton>
                </Badge>
                <br/>
                <DatePicker hintText="Portrait Dialog" />
                <DatePicker hintText="Landscape Dialog" mode="landscape" />
                <DatePicker hintText="Dialog Disabled" disabled={true} />
                <DatePicker hintText="Open to Year" openToYearSelection={true}/>
            <br/>
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                    />
                <Drawer open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <br/>
                <div>
                    <List>
                        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                    </List>
                    <Divider />
                    <List>
                        <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                        <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                        <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                        <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                    </List>
                </div>
                <br/>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Send feedback" />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Send feedback" />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Send feedback" />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Send feedback" />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
            </div>
        )
            ;
    }
}

export default AppBarCom;