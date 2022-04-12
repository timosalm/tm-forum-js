/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a Category
* This operation creates a Category entity.
*
* category CategoryCreate The Category to be created
* returns Category
* */
const createCategory = ({ category }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        category,
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
* Deletes a Category
* This operation deletes a Category entity.
*
* id String Identifier of the Category
* no response value expected for this operation
* */
const deleteCategory = ({ id }) => new Promise(
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
* List or find Category objects
* This operation list or find Category entities
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* returns List
* */
const listCategory = ({ fields, offset, limit }) => new Promise(
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
* Updates partially a Category
* This operation updates partially a Category entity.
*
* id String Identifier of the Category
* category CategoryUpdate The Category to be updated
* returns Category
* */
const patchCategory = ({ id, category }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        category,
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
* Retrieves a Category by ID
* This operation retrieves a Category entity. Attribute selection is enabled for all first level attributes.
*
* id String Identifier of the Category
* fields String Comma-separated properties to provide in response (optional)
* returns Category
* */
const retrieveCategory = ({ id, fields }) => new Promise(
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
  createCategory,
  deleteCategory,
  listCategory,
  patchCategory,
  retrieveCategory,
};
