/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="typings/underscore.d.ts" />

interface IwidthHeight {
    width: number;
    height: number;
}
interface Ioffset {
    x: number;
    y: number;
}
/**
 * The dimensions of elements that determine positioning of the info card
 */
interface Idim {
    card: IwidthHeight;
    map: IwidthHeight;
    marker: Ioffset;
    beak: IwidthHeight;
    customBeak: boolean;
}
interface Iplacement {
    left: number;
    top: number;
}


@component('paper-map-info')
/**
 * script implements custom element <paper-map-info> as a Polymer element
 *
 *
 */
class paperMapInfo extends polymer.Base {




    /**
     * Elevation of the paper material background (0 - 5)
     */
    @property({ type: Number, notify: true, value: 4 })
    elevation: number;

    /**
     * Use fade in animation?
     */
    @property({ type: Boolean, notify: true, value: false })
    fadeIn: Boolean;

    /**
     * is showing - is the infowindow showing
     */
    @property({ type: Boolean, notify: true, value: false })
    isShowing: boolean;

    /**
     * dimensions of objects necessary for positioning the info card
     */
    @property({ type: Object, notify: true, value: () => { return { card: { height: 10, width: 10 }, map: { height: 100, width: 100 }, marker: { x: 0, y: 42 }, beak: { width: 20, height: 20, customBeak: false } }; } })
    _dim: Idim;

    /**
     * Reference to the google map
     */
    @property({ type: Object, notify: true, observer: '_mapChanged' })
    map: google.maps.Map;

    /**
     * reference to map listeners so they can be removed later
     */
    @property({ type: Array, notify: true, value: () => { return []; } })
    _mapListeners: Array<any>;

    /**
     * Reference to google map marker
     */
    @property({ type: Object, notify: true })
    _marker: google.maps.Marker;

    /**
     * Reference to google map overlay
     */
    @property({ type: Object, notify: true })
    _overlay: google.maps.OverlayView;

    /**
     * beak
     */
    @property({ type: Object })
    _bk: HTMLElement;

    /**
     * not beak
     */
    @property({ type: Object })
    _nbk: HTMLElement;

    /**
     * is custom beak
     */
    @property({ type: Boolean, notify: true, value: false })
    _isCustomBeak: boolean;

    /**
     * watching size of window
     */
    @property({ type: Boolean, notify: true, value: false })
    _watchingSize: boolean;

    /**
     * close infowindow
     */
    close(): void {
        this._releaseListeners();
        // turn off the resize-aware ??
        this.isShowing = false;
        this.$.infocarddiv.style.opacity = 0;
        this.$.infocarddiv.style.left = 0;
        this.$.infocarddiv.style.display = "none";
        this.$.stdbeak.style.display = "none";
        this.$.custombeak.style.display = "none";
        this.$.stdbeak.style.opacity = 0;
        this.$.custombeak.style.opacity = 0;
        //this._marker = undefined;

    }

    /**
     * handle change to content
     */
    private _contentChanged(): void {
        if (this.isShowing) {
            this._getInfowindowSize();
            let placement: Iplacement = this._setInfowindowPosition();
            if (!this._placementInBounds(placement)) {
                this._panToShowInfowindow(placement);
            }
        }
    }

    /**
     * clean up when this element is detached from the DOM
     */
    detached(): void {
        this._releaseListeners();
        this.isShowing = false;
        this.$.infocarddiv.style.left = 0;
        this.$.infocarddiv.style.opacity = this.fadeIn ? 0 : 1;
        this.$.infocarddiv.style.display = "none";
        this.$.stdbeak.display = "none";
        this.$.custombeak.display = "none";
        this.$.stdbeak.opacity = 0;
        this.$.custombeak.opacity = 0;
        this._marker = undefined;
        this.map = undefined;
    }

    /**
     * perform fade in animation for card
     */
    private _doFadeIn() {
        if (this.isShowing) {
            let currentOpacity = parseFloat(this.$.infocarddiv.style.opacity);
            if (currentOpacity >= 0.9) {
                this.$.infocarddiv.style.opacity = "1";
            } else {
                currentOpacity += 0.1;
                this.$.infocarddiv.style.opacity = currentOpacity.toString();
                setTimeout(() => {
                    this._doFadeIn();
                }, 40);
            }
        }
    }

    /**
     * get infowindow size
     */
    private _getInfowindowSize(): void {
        let icd = this.$.infocarddiv;
        this._dim.card.width = icd.offsetWidth;
        this._dim.card.height = icd.offsetHeight;
        // and the beak
        if (this._isCustomBeak) {
            this._dim.beak.height = this._bk.offsetHeight;
            this._dim.beak.width = this._bk.offsetWidth;
            this._dim.customBeak = true;
        } else {
            this._dim.beak = { height: 20, width: 20 };
            this._dim.customBeak = false;
        }
    }

    /**
     * get marker size
     */
    private _getMarkerSize(): void {
        if (this._marker && this._marker.getIcon()) {
            let mIcon: google.maps.Icon = this._marker.getIcon();
            this._dim.marker.y = mIcon.anchor.y;
            this._dim.marker.x = 0;
        } else {
            this._dim.marker = { x: 0, y: 42 }; // height of standard pin
        }
    }

    /**
     * get map size
     */
    private _getMapSize(): void {
        let gm = this.map.getDiv();
        this._dim.map.width = (<HTMLElement>gm).offsetWidth;
        this._dim.map.height = (<HTMLElement>gm).offsetHeight;
    }

    /**
     * initialize map event listeners
     */
    private _initListeners() {
        this._mapListeners = [];

        this._overlay = new google.maps.OverlayView();
        this._overlay.draw = function() { };
        this._overlay.setMap(this.map);

        let reposition = () => {
            if (this.isShowing) {
                this._getInfowindowSize();
                this._setInfowindowPosition();
            }
        };

        this._mapListeners.push(google.maps.event.addListener(this.map, 'projection_changed', () => {
            this._overlay = new google.maps.OverlayView();
            this._overlay.draw = function() { };
            this._overlay.setMap(this.map);
        }));

        this._mapListeners.push(google.maps.event.addListener(this.map, 'zoom_changed', (e) => {
            if (this.isShowing) {
                this._getInfowindowSize();
                this._setInfowindowPosition();
            }
        }));

        this._mapListeners.push(google.maps.event.addListener(this.map, 'center_changed', (e) => {
            if (this.isShowing) {
                reposition();
            }
        }));
        this._mapListeners.push(google.maps.event.addListener(this._marker, 'drag', (e) => {
            if (this.isShowing) {
                this._setInfowindowPosition();
            }
        }));

        if (!this._watchingSize) {
            this.$$('resize-aware').addEventListener('element-resize', () => { this._contentChanged(); });
        }
    }

    /**
     * when the map is set, initialize the overlay,
     * which can take a moment since it is not loaded automatically
     * with the rest of the map apis
     */
    private _mapChanged(newVal, oldVal) {
        if (this.map) {
            this._overlay = new google.maps.OverlayView();
            this._overlay.draw = function() { };
            this._overlay.setMap(this.map);
        }
    }

    /**
     * Pan the map to move the info card into view
     * @param {Iplacement} placement current info card placement
     */
    private _panToShowInfowindow(placement: Iplacement): void {
        let panby: Ioffset = { x: 0, y: 0 };
        if (placement.left < 0) {
            panby.x = placement.left - 10;
        } else {
            if ((placement.left + this._dim.card.width) > this._dim.map.width) {
                panby.x = (placement.left + this._dim.card.width) - this._dim.map.width + 10;
            }
        }
        if (placement.top < 0) {
            panby.y = placement.top - 10;
        } else {
            if ((placement.top + this._dim.card.height + this._dim.marker.y + 10) > this._dim.map.height) {
                panby.y = (placement.top + this._dim.card.height + this._dim.marker.y) - this._dim.map.height + 20;
            }
        }
        if (panby.x != 0 || panby.y != 0) {
            this.map.panBy(panby.x, panby.y);
        }
    }

    /**
     * Is the current info card placement within the bounds of the map's containing div?
     * @param  {Iplacement} placement current placement of the info card (top, left)
     * @return {boolean}              true if the info card fits inside the map's containing div
     */
    private _placementInBounds(placement: Iplacement): boolean {
        let result = (placement.top >= 0
            && placement.left >= 0
            && (placement.left + this._dim.card.width) < this._dim.map.width
            && (placement.top + this._dim.card.height + this._dim.marker.y + 10) < this._dim.map.height);
        return result;
    }

    /**
     * initialize component
     */
    ready() {
        if (this.map) {
            this._overlay = new google.maps.OverlayView();
            this._overlay.draw = function() { };
            this._overlay.setMap(this.map);
        }
    }

    /**
     * release event listeners
     */
    private _releaseListeners(): void {
        for (let l of this._mapListeners) {
            google.maps.event.removeListener(l);
        }
        this._mapListeners = [];
        // turn off resize listener?
    }
    /**
     * Sets the info card's position relative to the map's containing div
     * @return {Iplacement} New position of the info card
     */
    private _setInfowindowPosition(): Iplacement {
        if (!this._overlay) {
            this._overlay = new google.maps.OverlayView();
            this._overlay.draw = function() { };
            this._overlay.setMap(this.map);
            console.log("overlay not set");
        }
        let result = { left: 0, top: 0 };
        try {
            let point = this._overlay.getProjection().fromLatLngToContainerPixel(this._marker.getPosition());
            // calculate placement
            let pleft = Math.round(point.x - this._dim.card.width / 2);
            let ptop = Math.round(point.y - this._dim.card.height - this._dim.marker.y - this._dim.beak.height + 10); // beak tucks 10px above bottom edge of window
            this.$.infocarddiv.style.left = pleft + 'px';
            this.$.infocarddiv.style.top = ptop + 'px';
            this._bk.style.left = (point.x - this._dim.beak.width / 2) + "px";
            this._bk.style.top = Math.floor(ptop - 10 + this._dim.card.height) + "px";  // beak tucks 10px above bottom edge of window
            result = { left: pleft, top: ptop };
        } catch (err) {
            console.log("setInfowindowPosition error");
            console.log(err);
        };
        return result;
    }

    /**
     * Shows the info card on top of the given google map marker
     * @param {google.maps.Marker} marker  The marker to attach the card to
     */
    showInfoWindow(marker: google.maps.Marker): void {
        if (this.map && marker) {
            if (this.isShowing) {
                this.close();
            }
            this._marker = marker;
            this._getMapSize();
            this._getMarkerSize();
            this.$.infocarddiv.style.display = "block";
            if ((Polymer.dom(this.$.custombeakcontent) as any).getDistributedNodes().length > 0) {
                this._bk = this.$.custombeak;
                this._nbk = this.$.stdbeak;
                this._isCustomBeak = true;
            } else {
                this._bk = this.$.stdbeak;
                this._nbk = this.$.custombeak;
                this._isCustomBeak = false;
            }
            this._bk.style.opacity = "0";
            this._bk.style.display = "block";
            this._nbk.style.opacity = "0";
            this._nbk.style.display = "none";
            // to minimize repositioning due to content size changes
            // as polymer instantiates webcomponents in the <content>,
            // we will pause a few ms before instantiating the infowindow.
            setTimeout(() => {
                this._getInfowindowSize();
                let placement: Iplacement = this._setInfowindowPosition();
                this.$.infocarddiv.style.opacity = this.fadeIn ? 0 : 1;
                this._bk.style.opacity = "1";
                this._initListeners();
                this.isShowing = true;
                if (this.fadeIn) {
                    this._doFadeIn();
                }
                if (!this._placementInBounds(placement)) {
                    this._panToShowInfowindow(placement);
                }
            }, 33);
        }
    }


}
paperMapInfo.register();
