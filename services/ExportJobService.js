/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ExportJob
* This operation creates a ExportJob entity.
*
* exportJob ExportJobCreate The ExportJob to be created
* returns ExportJob
* */
const createExportJob = ({ exportJob }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        exportJob,
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
* Deletes a ExportJob
* This operation deletes a ExportJob entity.
*
* id String Identifier of the ExportJob
* no response value expected for this operation
* */
const deleteExportJob = ({ id }) => new Promise(
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
* List or find ExportJob objects
* This operation list or find ExportJob entities
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* returns List
* */
const listExportJob = ({ fields, offset, limit }) => new Promise(
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
* Retrieves a ExportJob by ID
* This operation retrieves a ExportJob entity. Attribute selection is enabled for all first level attributes.
*
* id String Identifier of the ExportJob
* fields String Comma-separated properties to provide in response (optional)
* returns ExportJob
* */
const retrieveExportJob = ({ id, fields }) => new Promise(
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
  createExportJob,
  deleteExportJob,
  listExportJob,
  retrieveExportJob,
};
