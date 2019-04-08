// Originally from here https://github.com/jakelheknight/google-maps-limited

import {html, LitElement} from '@polymer/lit-element';
window.initMap = function () { window.dispatchEvent(new CustomEvent('google-map-ready')); }; // eslint-disable-line no-unused-vars

class GoogleMapsLimited extends OavBaseElement {

  static get properties() {
    return {
      apiKey: {type: String},
      lang: {type: String},
      inChina: {type: Boolean},
      markers: {type: Object},
      selectedMarkerId: {type: String},
      icon: {type: String},
      selectedIcon: {type: String},
      selectLocationMode: {type: Boolean},
      selectedInfoWindowContent: {type: String}
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block
        }
        #map {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="map"></div>
    `;
  }

  constructor() {
    super();
    window.addEventListener('google-map-ready', () => {
      this._mapRef = new google.maps.Map(this.shadowRoot.querySelector('#map'), {
        center: { lat: 40, lng: -112 },
        zoom: 5,
        streetViewControl: false,
      });
      this._putMarkersOnMap(this._markers);
      this._infoWindow = new google.maps.InfoWindow(
        {content: document.createElement('div')}
      );
      this._infoWindow.addListener('closeclick', () => {
        this.selectedMarkerId = null;
      });
      if(this.selectLocationMode) {
       google.maps.event.addListener(this._mapRef, 'click', (event) => {
        if(this._mapMarkers) this._mapMarkers.map((marker) => marker.setMap(null));
        this.markers = [{
           position: {lat:event.latLng.lat(), lng:event.latLng.lng()},
           InfoWindowContent: this.selectedInfoWindowContent || "User Selected Point"
         }];
       this.dispatchEvent(new CustomEvent('lag-long-chosen', {bubbles:true, composed:true, detail:{lat:event.latLng.lat(), long: event.latLng.lng()}}));
       this._mapRef.setZoom(5);
      });
      }
    });
    this.icon = this.icon || 'data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" width="30" height="47"><g data-name="Layer 2"><path d="M15 46.59a3.11 3.11 0 0 1-3.15-3c-.91-8.7-4.07-12.72-6.85-16.26C2.51 24.17.17 21.19.17 16a14.83 14.83 0 0 1 29.66 0c0 5.19-2.34 8.17-4.83 11.33-2.78 3.54-5.94 7.56-6.87 16.25A3 3 0 0 1 15 46.59z" opacity=".33"/><path fill="none" d="M0 0h30v47H0z"/><path d="M15 .17A14.84 14.84 0 0 0 .17 15c0 5.19 2.34 8.17 4.83 11.33 2.78 3.54 5.94 7.56 6.87 16.25a3.11 3.11 0 0 0 3.14 3 3 3 0 0 0 3.11-3c.93-8.69 4.09-12.71 6.87-16.25 2.49-3.16 4.83-6.14 4.83-11.33A14.84 14.84 0 0 0 15 .17z" fill="rgb(255,255,255)"/><path d="M15 2.17A12.84 12.84 0 0 0 2.17 15c0 10 9.91 10.47 11.7 27.45a1.13 1.13 0 1 0 2.26 0C17.92 25.47 27.83 25 27.83 15A12.84 12.84 0 0 0 15 2.17zm0 17.29A4.46 4.46 0 1 1 19.46 15 4.46 4.46 0 0 1 15 19.46z" fill="rgb(231,69,60)"/></g></svg>';
    this.selectedIcon = this.selectedIcon || 'data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" width="30" height="47"><g data-name="Layer 2"><path d="M15 46.59a3.11 3.11 0 0 1-3.15-3c-.91-8.7-4.07-12.72-6.85-16.26C2.51 24.17.17 21.19.17 16a14.83 14.83 0 0 1 29.66 0c0 5.19-2.34 8.17-4.83 11.33-2.78 3.54-5.94 7.56-6.87 16.25A3 3 0 0 1 15 46.59z" opacity=".33"/><path fill="none" d="M0 0h30v47H0z"/><path d="M15 .17A14.84 14.84 0 0 0 .17 15c0 5.19 2.34 8.17 4.83 11.33 2.78 3.54 5.94 7.56 6.87 16.25a3.11 3.11 0 0 0 3.14 3 3 3 0 0 0 3.11-3c.93-8.69 4.09-12.71 6.87-16.25 2.49-3.16 4.83-6.14 4.83-11.33A14.84 14.84 0 0 0 15 .17z" fill="rgb(255,255,255)"/><path d="M15 2.17A12.84 12.84 0 0 0 2.17 15c0 10 9.91 10.47 11.7 27.45a1.13 1.13 0 1 0 2.26 0C17.92 25.47 27.83 25 27.83 15A12.84 12.84 0 0 0 15 2.17zm0 17.29A4.46 4.46 0 1 1 19.46 15 4.46 4.46 0 0 1 15 19.46z" fill="rgb(135,185,64)"/></g></svg>';
  }

  firstUpdated() {
    this.shadowRoot.appendChild(this._mapScriptTag());
    super.firstUpdated();
  }

  _mapScriptTag() {
    const lang = 'en'
    // init google maps
    const googleMapsLoader = document.createElement('script');
    googleMapsLoader.src = `https://maps.${this.inChina ? 'google.cn' : 'googleapis.com'}/maps/api/js?key=${this.apiKey}&language=${lang === 'zh' ? 'zh-TW' : lang}&callback=initMap`;
    googleMapsLoader.async = true;
    googleMapsLoader.defer = true;
    return googleMapsLoader;
  }

  set markers(markers) {
    if(!markers) return;
    this._putMarkersOnMap(markers);
    this._markers = markers;
  }

  get markers() {
    return this._markers;
  }

  set selectedMarkerId(id) {
    if(!this._mapMarkers) return;
    let oldMapMarker = this._mapMarkers[this._selectedMarkerId]
    let newMapMarker = this._mapMarkers[id];
    let newMarker = this._markers[id];
    if(oldMapMarker) oldMapMarker.setIcon(this.icon);
    if(newMapMarker) newMapMarker.setIcon(this.selectedIcon);
    if(this._infoWindow) this._infoWindow.close();
    if(newMarker && newMarker.InfoWindowContent) {
      this._infoWindow.setContent(newMarker.InfoWindowContent);
      this._infoWindow.open(this._mapRef, newMapMarker);
    }
    this.dispatchEvent(new CustomEvent('map-pin-selected', {bubbles:true, composed:true, detail:{id:this.selectedMarkerId}}));
    this._selectedMarkerId = id;
  }

  get selectedMarkerId() {
    return this._selectedMarkerId;
  }

  _putMarkersOnMap(markers) {
    if(!this._mapRef || !markers) return;
    if(this._mapMarkers) this._mapMarkers.map((marker) => marker.setMap(null));
    this._mapMarkers = markers.reduce((acc, item, index) => {
      if(item.position){
        const mapMarker = new google.maps.Marker({
          position: item.position,
          icon: markers.icon || this.icon,
          map: this._mapRef
        })
        mapMarker.addListener('click', () => {
          this.selectedMarkerId = item.id || index;
        });
        acc[ item.id || index ] = mapMarker;
        return acc;
      }
      return acc;
    }, []);
    this._setDefaultBounds ();
  }

  _setDefaultBounds () {
    if (this._markers.length === 0) {
      // show the whole world if there are no markers
      var worldBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(70.4043, -143.5291), // Top-left
        new google.maps.LatLng(-46.11251, 163.4288) // Bottom-right
      );
      this._mapRef.fitBounds(worldBounds, 0);
    } else {
      var initialBounds = this._mapMarkers.reduce((bounds, marker) => {
        bounds.extend(marker.getPosition());
        return bounds;
      }, new google.maps.LatLngBounds());
      this._mapRef.fitBounds(initialBounds);
    }
  }
}

window.customElements.define('oav-google-maps', OavGoogleMaps);