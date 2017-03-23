import { Partners } from '../../api/partners/partners.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Partners to pre-fill the Collection.
 * @type {*[]}
 */
const partnerSeeds = [
  {
    first: 'Shaziney',
    last: 'Natividad',
    native: 'English',
    learning: 'Japanese',
  },
  {
    first: 'Lancen',
    last: 'Dac',
    native: 'English',
    learning: 'Japanese',
  },
  {
    first: 'Kaleen',
    last: 'Peterson',
    native: 'English',
    learning: 'Korean',
  },
  {
    first: 'Andrew',
    last: 'Park',
    native: 'Korean',
    learning: 'English',
  },
  {
    first: 'Hinako',
    last: 'Seki',
    native: 'Japanese',
    learning: 'English',
  },
  {
    first: 'Nao',
    last: 'Watanabe',
    native: 'Japanese',
    learning: 'English',
  },
  {
    first: 'Genki',
    last: 'Kinoshita',
    native: 'Japanese',
    learning: 'English',
  },
  {
    first: 'Blaine',
    last: 'Ishizu',
    native: 'English',
    learning: 'Japanese',
  },
];

/**
 * Initialize the Partners collection if empty with seed data.
 */
if (Partners.find().count() === 0) {
  _.each(partnerSeeds, function seedPartners(stuff) {
    Partners.insert(stuff);
  });
}
