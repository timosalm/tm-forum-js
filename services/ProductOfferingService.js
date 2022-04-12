/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ProductOffering
* This operation creates a ProductOffering entity.
*
* productOffering ProductOfferingCreate The ProductOffering to be created
* returns ProductOffering
* */
const createProductOffering = ({ productOffering }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productOffering,
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
* Deletes a ProductOffering
* This operation deletes a ProductOffering entity.
*
* id String Identifier of the ProductOffering
* no response value expected for this operation
* */
const deleteProductOffering = ({ id }) => new Promise(
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
* List or find ProductOffering objects
* This operation list or find ProductOffering entities
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* returns List
* */
const listProductOffering = ({ fields, offset, limit }) => new Promise(
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
* Updates partially a ProductOffering
* This operation updates partially a ProductOffering entity.
*
* id String Identifier of the ProductOffering
* productOffering ProductOfferingUpdate The ProductOffering to be updated
* returns ProductOffering
* */
const patchProductOffering = ({ id, productOffering }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        productOffering,
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
* Retrieves a ProductOffering by ID
* This operation retrieves a ProductOffering entity. Attribute selection is enabled for all first level attributes.
*
* id String Identifier of the ProductOffering
* fields String Comma-separated properties to provide in response (optional)
* returns ProductOffering
* */
const retrieveProductOffering = ({ id, fields }) => new Promise(
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
  createProductOffering,
  deleteProductOffering,
  listProductOffering,
  patchProductOffering,
  retrieveProductOffering,
};
