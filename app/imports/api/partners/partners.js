import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Partners = new Mongo.Collection('Partners');

/**
 * Create the schema for Partners
 */
export const PartnersSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  native: {
    label: 'native',
    type: String,
    optional: false,
    max: 200,
  },
  learning: {
    label: 'learning',
    type: String,
    optional: false,
    max: 200,
  },
});

Partners.attachSchema(PartnersSchema);
