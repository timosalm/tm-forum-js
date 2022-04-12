/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a Catalog
* This operation creates a Catalog entity.
*
* catalog CatalogCreate The Catalog to be created
* returns Catalog
* */
const createCatalog = ({ catalog }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        catalog,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a Catalog
* This operation deletes a Catalog entity.
*
* id String Identifier of the Catalog
* no response value expected for this operation
* */
const deleteCatalog = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List or find Catalog objects
* This operation list or find Catalog entities
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* returns List
* */
const listCatalog = ({ fields, offset, limit }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fields,
        offset,
        limit,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates partially a Catalog
* This operation updates partially a Catalog entity.
*
* id String Identifier of the Catalog
* catalog CatalogUpdate The Catalog to be updated
* returns Catalog
* */
const patchCatalog = ({ id, catalog }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        catalog,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Retrieves a Catalog by ID
* This operation retrieves a Catalog entity. Attribute selection is enabled for all first level attributes.
*
* id String Identifier of the Catalog
* fields String Comma-separated properties to provide in response (optional)
* returns Catalog
* */
const retrieveCatalog = ({ id, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        fields,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createCatalog,
  deleteCatalog,
  listCatalog,
  patchCatalog,
  retrieveCatalog,
};
