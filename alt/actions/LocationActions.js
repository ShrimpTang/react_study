var alt = require('../alt');
import LocationSource from '../sources/LocationSource'

class LocationActions {
    updateLocations(locations) {
        console.log( this.dispatch)
        return locations;
    }

    fetchLocations() {
        return dispatch=> {
            dispatch();
            LocationSource.fetch()
                .then(locations=> {
                    this.updateLocations(locations)
                })
                .catch()
        }
    }

    locationsFailed(error) {
        return error;
    }

}
module.exports = alt.createActions(LocationActions);