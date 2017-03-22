import { _ } from 'meteor/underscore';

/**
 * A list of Partners to pre-fill the Collection.
 * @type {*[]}
 */
const partnerSeeds = [
  {
    first: 'Shaziney',
    last: 'Natividad',
    native: ['English'],
    learning: ['Japanese'],
  },
  {
    first: 'Shaziney',
    last: 'Natividad',
    native: ['English'],
    learning: ['Japanese'],
  },
];

const sundaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Sunday') === true;
});
const mondaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Monday') === true;
});
const tuesdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Tuesday') === true;
});
const wednesdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Wednesday') === true;
});
const thursdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Thursday') === true;
});
const fridaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Friday') === true;
});
const saturdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Saturday') === true;
});

/**
 * Initialize the Market collection if empty with seed data.
 */

if (Markets.find().count() === 0) {
  _.each(marketSeeds, function seedMarkets(stuff) {
    Markets.insert(stuff);
  });
}

if (Sunday.find().count() === 0) {
  _.each(sundaySeeds, function seedSunday(stuff) {
    Sunday.insert(stuff);
  });
}

if (Monday.find().count() === 0) {
  _.each(mondaySeeds, function seedMonday(stuff) {
    Monday.insert(stuff);
  });
}

if (Tuesday.find().count() === 0) {
  _.each(tuesdaySeeds, function seedTuesday(stuff) {
    Tuesday.insert(stuff);
  });
}

if (Wednesday.find().count() === 0) {
  _.each(wednesdaySeeds, function seedWednesday(stuff) {
    Wednesday.insert(stuff);
  });
}

if (Thursday.find().count() === 0) {
  _.each(thursdaySeeds, function seedThursday(stuff) {
    Thursday.insert(stuff);
  });
}

if (Friday.find().count() === 0) {
  _.each(fridaySeeds, function seedFriday(stuff) {
    Friday.insert(stuff);
  });
}

if (Saturday.find().count() === 0) {
  _.each(saturdaySeeds, function seedSaturday(stuff) {
    Saturday.insert(stuff);
  });
}
