/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Register a listener
* Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
*
* data EventSubscriptionInput Data containing the callback endpoint to deliver the information
* returns EventSubscription
* */
const registerListener = ({ data }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        data,
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
* Unregister a listener
* Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
*
* id String The id of the registered listener
* no response value expected for this operation
* */
const unregisterListener = ({ id }) => new Promise(
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

module.exports = {
  registerListener,
  unregisterListener,
};
