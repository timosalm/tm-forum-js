/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Client listener for entity CatalogAttributeValueChangeEvent
* Example of a client listener for receiving the notification CatalogAttributeValueChangeEvent
*
* data CatalogAttributeValueChangeEvent The event data
* returns EventSubscription
* */
const listenToCatalogAttributeValueChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity CatalogBatchEvent
* Example of a client listener for receiving the notification CatalogBatchEvent
*
* data CatalogBatchEvent The event data
* returns EventSubscription
* */
const listenToCatalogBatchEvent = ({ data }) => new Promise(
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
* Client listener for entity CatalogCreateEvent
* Example of a client listener for receiving the notification CatalogCreateEvent
*
* data CatalogCreateEvent The event data
* returns EventSubscription
* */
const listenToCatalogCreateEvent = ({ data }) => new Promise(
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
* Client listener for entity CatalogDeleteEvent
* Example of a client listener for receiving the notification CatalogDeleteEvent
*
* data CatalogDeleteEvent The event data
* returns EventSubscription
* */
const listenToCatalogDeleteEvent = ({ data }) => new Promise(
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
* Client listener for entity CatalogStateChangeEvent
* Example of a client listener for receiving the notification CatalogStateChangeEvent
*
* data CatalogStateChangeEvent The event data
* returns EventSubscription
* */
const listenToCatalogStateChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity CategoryAttributeValueChangeEvent
* Example of a client listener for receiving the notification CategoryAttributeValueChangeEvent
*
* data CategoryAttributeValueChangeEvent The event data
* returns EventSubscription
* */
const listenToCategoryAttributeValueChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity CategoryCreateEvent
* Example of a client listener for receiving the notification CategoryCreateEvent
*
* data CategoryCreateEvent The event data
* returns EventSubscription
* */
const listenToCategoryCreateEvent = ({ data }) => new Promise(
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
* Client listener for entity CategoryDeleteEvent
* Example of a client listener for receiving the notification CategoryDeleteEvent
*
* data CategoryDeleteEvent The event data
* returns EventSubscription
* */
const listenToCategoryDeleteEvent = ({ data }) => new Promise(
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
* Client listener for entity CategoryStateChangeEvent
* Example of a client listener for receiving the notification CategoryStateChangeEvent
*
* data CategoryStateChangeEvent The event data
* returns EventSubscription
* */
const listenToCategoryStateChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingAttributeValueChangeEvent
* Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
*
* data ProductOfferingAttributeValueChangeEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingAttributeValueChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingCreateEvent
* Example of a client listener for receiving the notification ProductOfferingCreateEvent
*
* data ProductOfferingCreateEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingCreateEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingDeleteEvent
* Example of a client listener for receiving the notification ProductOfferingDeleteEvent
*
* data ProductOfferingDeleteEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingDeleteEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
* Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
*
* data ProductOfferingPriceAttributeValueChangeEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingPriceAttributeValueChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingPriceCreateEvent
* Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
*
* data ProductOfferingPriceCreateEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingPriceCreateEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingPriceDeleteEvent
* Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
*
* data ProductOfferingPriceDeleteEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingPriceDeleteEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingPriceStateChangeEvent
* Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
*
* data ProductOfferingPriceStateChangeEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingPriceStateChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductOfferingStateChangeEvent
* Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
*
* data ProductOfferingStateChangeEvent The event data
* returns EventSubscription
* */
const listenToProductOfferingStateChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductSpecificationAttributeValueChangeEvent
* Example of a client listener for receiving the notification ProductSpecificationAttributeValueChangeEvent
*
* data ProductSpecificationAttributeValueChangeEvent The event data
* returns EventSubscription
* */
const listenToProductSpecificationAttributeValueChangeEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductSpecificationCreateEvent
* Example of a client listener for receiving the notification ProductSpecificationCreateEvent
*
* data ProductSpecificationCreateEvent The event data
* returns EventSubscription
* */
const listenToProductSpecificationCreateEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductSpecificationDeleteEvent
* Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
*
* data ProductSpecificationDeleteEvent The event data
* returns EventSubscription
* */
const listenToProductSpecificationDeleteEvent = ({ data }) => new Promise(
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
* Client listener for entity ProductSpecificationStateChangeEvent
* Example of a client listener for receiving the notification ProductSpecificationStateChangeEvent
*
* data ProductSpecificationStateChangeEvent The event data
* returns EventSubscription
* */
const listenToProductSpecificationStateChangeEvent = ({ data }) => new Promise(
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

module.exports = {
  listenToCatalogAttributeValueChangeEvent,
  listenToCatalogBatchEvent,
  listenToCatalogCreateEvent,
  listenToCatalogDeleteEvent,
  listenToCatalogStateChangeEvent,
  listenToCategoryAttributeValueChangeEvent,
  listenToCategoryCreateEvent,
  listenToCategoryDeleteEvent,
  listenToCategoryStateChangeEvent,
  listenToProductOfferingAttributeValueChangeEvent,
  listenToProductOfferingCreateEvent,
  listenToProductOfferingDeleteEvent,
  listenToProductOfferingPriceAttributeValueChangeEvent,
  listenToProductOfferingPriceCreateEvent,
  listenToProductOfferingPriceDeleteEvent,
  listenToProductOfferingPriceStateChangeEvent,
  listenToProductOfferingStateChangeEvent,
  listenToProductSpecificationAttributeValueChangeEvent,
  listenToProductSpecificationCreateEvent,
  listenToProductSpecificationDeleteEvent,
  listenToProductSpecificationStateChangeEvent,
};
