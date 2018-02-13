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
import AutoComplete from 'material-ui/AutoComplete';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SelectField from 'material-ui/SelectField';
//import {Menu, MenuItem} from 'material-ui/Menu';

const colors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Black',
    'White',
];

const fruit = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon',
];
const dataSource1 = [
    {
        text: 'text-value1',
        value: (
            <MenuItem
                primaryText="text-value1"
                secondaryText="&#9786;"
                />
        ),
    },
    {
        text: 'text-value2',
        value: (
            <MenuItem
                primaryText="text-value2"
                secondaryText="&#9786;"
                />
        ),
    },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
    {textKey: 'Some Text', valueKey: 'someFirstValue'},
    {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
    text: 'textKey',
    value: 'valueKey',
};
class AppBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});


    handleClose = () => this.setState({open: false});
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
                <div>
                    <AutoComplete
                        hintText="text-value data"
                        filter={AutoComplete.noFilter}
                        dataSource={dataSource1}
                        /><br />
                    <AutoComplete
                        floatingLabelText="showAllItems"
                        filter={AutoComplete.noFilter}
                        openOnFocus={true}
                        dataSource={dataSource2}
                        /><br />
                    <AutoComplete
                        floatingLabelText="Same text, different values"
                        filter={AutoComplete.noFilter}
                        openOnFocus={true}
                        dataSource={dataSource3}
                        dataSourceConfig={dataSourceConfig}
                        />
                </div>
                <div>
                    <AutoComplete
                        floatingLabelText="Type 'r', case insensitive"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={colors}
                        />
                    <br />
                    <AutoComplete
                        floatingLabelText="Type 'peah', fuzzy search"
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={fruit}
                        maxSearchResults={5}
                        />
                </div>
                <div>
                    <Badge
                        badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
                        >
                        <FolderIcon />
                    </Badge>
                    <Badge
                        badgeContent="&copy;"
                        badgeStyle={{fontSize: 20}}
                        >
                        Company Name
                    </Badge>
                </div>
                <div>
                    <FloatingActionButton>
                        <ContentAdd />
                    </FloatingActionButton>
                    <FloatingActionButton mini={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <FloatingActionButton secondary={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <FloatingActionButton mini={true} secondary={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <FloatingActionButton disabled={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <FloatingActionButton mini={true} disabled={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
                <List>
                    <ListItem insetChildren={true} primaryText="Janet Perkins Bennet" />
                    <ListItem insetChildren={true} primaryText="Peter Carlsson" />
                </List>
                <Divider inset={true} />
                <List>
                    <ListItem insetChildren={true} primaryText="Aaron Bennet" />
                    <ListItem insetChildren={true} primaryText="Abbey Christensen" />
                </List>
                <RaisedButton
                    label="Open Drawer"
                    onClick={this.handleToggle}
                    />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    >
                    <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
                <div>
                    <SelectField
                        floatingLabelText="Frequency"
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
                    <br />
                    <SelectField floatingLabelText="Frequency" value={1} disabled={true}>
                        <MenuItem value={1} primaryText="Disabled" />
                        <MenuItem value={2} primaryText="Every Night" />
                    </SelectField>
                    <br />
                    <SelectField
                        floatingLabelText="Frequency"
                        value={this.state.value}
                        onChange={this.handleChange}

                        >
                        <MenuItem value={1} primaryText="Custom width" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
                    <br />
                    <SelectField
                        floatingLabelText="Frequency"
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoWidth={true}
                        >
                        <MenuItem value={1} primaryText="Auto width" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
                </div>
            </div>
        )
            ;
    }
}

export default AppBarCom;