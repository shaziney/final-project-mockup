import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles, ProfilesSchema } from '../../api/partners/partners.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Create_Profile_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ProfilesSchema.namedContext('Create_Profile_Page');
});

Template.Create_Profile_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});

Template.Create_Profile_Page.events({
  'submit .profile-data-form'(event, instance) {
    event.preventDefault();
    const first = event.target.First.value;
    const last = event.target.Last.value;
    const native = event.target.Native.value;
    const targetLang = event.target.TargetLang.value;

    const newProfileData = { first, last, native, targetLang };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newProfileData reflects what will be inserted.
    ProfilesSchema.clean(newProfileData);
    // Determine validity.
    instance.context.validate(newProfileData);
    if (instance.context.isValid()) {
      Profiles.insert(newProfileData);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

