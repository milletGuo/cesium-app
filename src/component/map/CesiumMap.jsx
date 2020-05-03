import React, { PureComponent } from 'react';
import MapControl from './MapControl';

export default class CesiumMap extends PureComponent {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.mapControl = new MapControl(this.containerRef);
    }

    render() {
        return (
            <div>
                <div id="cesium-map" ref={this.containerRef}></div>
            </div>
        )
    }
}