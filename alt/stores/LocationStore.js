import alt from '../alt'
import LocationActions from '../actions/LocationActions'

class LocationStore {
    constructor() {
        this.locations = [];
        this.errorMessage = null;
        this.bindListeners({
            handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
            handleFetchLocations: LocationActions.FETCH_LOCATIONS,
            handleLocationsFailed: LocationActions.LOCATIONS_FAILED

        })
    }

    handleUpdateLocations(locations) {
        this.locations = locations;
    }

    handleFetchLocations() {
        this.locations = [];
    }

    handleLocationsFailed(error) {
        this.errorMessage = error
    }

}
module.exports = alt.createStore(LocationStore, 'LocationStore');