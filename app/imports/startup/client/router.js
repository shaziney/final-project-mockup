import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing',
  action() {
    BlazeLayout.render('Landing');
  },
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    BlazeLayout.render('Login');
  },
});

FlowRouter.route('/home', {
  name: 'Home',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home' });
  },
});

FlowRouter.route('/partners', {
  name: 'Language_Partners',
  action() {
    BlazeLayout.render('App_Body', { main: 'Language_Partners' });
  },
});

FlowRouter.route('/find', {
  name: 'Find_Partners',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_Partners' });
  },
});

FlowRouter.route('/open', {
  name: 'Open_Sessions',
  action() {
    BlazeLayout.render('App_Body', { main: 'Open_Sessions' });
  },
});

FlowRouter.route('/dashboard', {
  name: 'Dashboard',
  action() {
    BlazeLayout.render('App_Body', { main: 'Dashboard' });
  },
});

FlowRouter.route('/request', {
  name: 'Request_Exchange',
  action() {
    BlazeLayout.render('App_Body', { main: 'Request_Exchange' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};









FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});