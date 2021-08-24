'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/content-types',
    handler: 'content-types.findContentTypes',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/content-types-settings',
    handler: 'content-types.findContentTypesSettings',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/content-types/:uid/configuration',
    handler: 'content-types.findContentTypeConfiguration',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/content-types/:uid/configuration',
    handler: 'content-types.updateContentTypeConfiguration',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },

  {
    method: 'GET',
    path: '/components',
    handler: 'components.findComponents',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/components/:uid/configuration',
    handler: 'components.findComponentConfiguration',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/components/:uid/configuration',
    handler: 'components.updateComponentConfiguration',
    config: {
      policies: [],
    },
  },

  {
    method: 'POST',
    path: '/uid/generate',
    handler: 'uid.generateUID',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/uid/check-availability',
    handler: 'uid.checkUIDAvailability',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/relations/:model/:targetField',
    handler: 'relations.find',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: {
            actions: [
              'plugin::content-manager.explorer.create',
              'plugin::content-manager.explorer.update',
            ],
            hasAtLeastOne: true,
          },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/single-types/:model',
    handler: 'single-types.find',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.read'] },
        },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/single-types/:model',
    handler: 'single-types.createOrUpdate',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: {
            actions: [
              'plugin::content-manager.explorer.create',
              'plugin::content-manager.explorer.update',
            ],
            hasAtLeastOne: true,
          },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/single-types/:model',
    handler: 'single-types.delete',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.delete'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/single-types/:model/actions/publish',
    handler: 'single-types.publish',
    config: {
      policies: [
        'routing',
        'plugin::content-manager.has-draft-and-publish',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.publish'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/single-types/:model/actions/unpublish',
    handler: 'single-types.unpublish',
    config: {
      policies: [
        'routing',
        'plugin::content-manager.has-draft-and-publish',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.publish'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/collection-types/:model/:id/:targetField',
    handler: 'collection-types.previewManyRelations',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.read'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/collection-types/:model',
    handler: 'collection-types.find',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.read'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/collection-types/:model',
    handler: 'collection-types.create',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.create'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/collection-types/:model/:id',
    handler: 'collection-types.findOne',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.read'] },
        },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/collection-types/:model/:id',
    handler: 'collection-types.update',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.update'] },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/collection-types/:model/:id',
    handler: 'collection-types.delete',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.delete'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/collection-types/:model/:id/actions/publish',
    handler: 'collection-types.publish',
    config: {
      policies: [
        'routing',
        'plugin::content-manager.has-draft-and-publish',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.publish'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/collection-types/:model/:id/actions/unpublish',
    handler: 'collection-types.unpublish',
    config: {
      policies: [
        'routing',
        'plugin::content-manager.has-draft-and-publish',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.publish'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/collection-types/:model/actions/bulkDelete',
    handler: 'collection-types.bulkDelete',
    config: {
      policies: [
        'routing',
        'admin::isAuthenticatedAdmin',
        {
          name: 'plugin::content-manager.hasPermissions',
          options: { actions: ['plugin::content-manager.explorer.delete'] },
        },
      ],
    },
  },
];
