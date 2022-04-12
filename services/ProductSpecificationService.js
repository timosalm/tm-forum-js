/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ProductSpecification
* This operation creates a ProductSpecification entity.
*
* productSpecification ProductSpecificationCreate The ProductSpecification to be created
* returns ProductSpecification
* */
const createProductSpecification = ({ productSpecification }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productSpecification,
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
* Deletes a ProductSpecification
* This operation deletes a ProductSpecification entity.
*
* id String Identifier of the ProductSpecification
* no response value expected for this operation
* */
const deleteProductSpecification = ({ id }) => new Promise(
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
* List or find ProductSpecification objects
* This operation list or find ProductSpecification entities
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* returns List
* */
const listProductSpecification = ({ fields, offset, limit }) => new Promise(
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
* Updates partially a ProductSpecification
* This operation updates partially a ProductSpecification entity.
*
* id String Identifier of the ProductSpecification
* productSpecification ProductSpecificationUpdate The ProductSpecification to be updated
* returns ProductSpecification
* */
const patchProductSpecification = ({ id, productSpecification }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        productSpecification,
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
* Retrieves a ProductSpecification by ID
* This operation retrieves a ProductSpecification entity. Attribute selection is enabled for all first level attributes.
*
* id String Identifier of the ProductSpecification
* fields String Comma-separated properties to provide in response (optional)
* returns ProductSpecification
* */
const retrieveProductSpecification = ({ id, fields }) => new Promise(
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
  createProductSpecification,
  deleteProductSpecification,
  listProductSpecification,
  patchProductSpecification,
  retrieveProductSpecification,
};
