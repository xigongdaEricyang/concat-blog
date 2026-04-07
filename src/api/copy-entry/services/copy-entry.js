'use strict';

/**
 * copy-entry service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::copy-entry.copy-entry');
