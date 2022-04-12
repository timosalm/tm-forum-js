/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ProductOfferingPrice
* This operation creates a ProductOfferingPrice entity.
*
* productOfferingPrice ProductOfferingPriceCreate The ProductOfferingPrice to be created
* returns ProductOfferingPrice
* */
const createProductOfferingPrice = ({ productOfferingPrice }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productOfferingPrice,
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
* Deletes a ProductOfferingPrice
* This operation deletes a ProductOfferingPrice entity.
*
* id String Identifier of the ProductOfferingPrice
* no response value expected for this operation
* */
const deleteProductOfferingPrice = ({ id }) => new Promise(
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
* List or find ProductOfferingPrice objects
* This operation list or find ProductOfferingPrice entities
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* returns List
* */
const listProductOfferingPrice = ({ fields, offset, limit }) => new Promise(
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
* Updates partially a ProductOfferingPrice
* This operation updates partially a ProductOfferingPrice entity.
*
* id String Identifier of the ProductOfferingPrice
* productOfferingPrice ProductOfferingPriceUpdate The ProductOfferingPrice to be updated
* returns ProductOfferingPrice
* */
const patchProductOfferingPrice = ({ id, productOfferingPrice }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        productOfferingPrice,
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
* Retrieves a ProductOfferingPrice by ID
* This operation retrieves a ProductOfferingPrice entity. Attribute selection is enabled for all first level attributes.
*
* id String Identifier of the ProductOfferingPrice
* fields String Comma-separated properties to provide in response (optional)
* returns ProductOfferingPrice
* */
const retrieveProductOfferingPrice = ({ id, fields }) => new Promise(
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
  createProductOfferingPrice,
  deleteProductOfferingPrice,
  listProductOfferingPrice,
  patchProductOfferingPrice,
  retrieveProductOfferingPrice,
};
