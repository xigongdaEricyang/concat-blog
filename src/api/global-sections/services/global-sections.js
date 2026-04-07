'use strict';

/**
 * global-sections service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-sections.global-sections');
