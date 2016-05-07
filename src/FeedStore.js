'use strict';

const Lazy       = require('lazy.js');
const EventStore = require('orbit-db-eventstore');
const FeedIndex  = require('./FeedIndex');

class FeedStore extends EventStore {
  constructor(ipfs, id, dbname, options) {
    Object.assign(options || {}, { Index: FeedIndex });
    super(ipfs, id, dbname, options)
  }

  remove(hash) {
    const operation = {
      op: 'DEL',
      key: null,
      value: hash,
      meta: {
        ts: new Date().getTime()
      }
    };
    return this._addOperation(operation);
  }
}

module.exports = FeedStore;
