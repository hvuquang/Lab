import * as React from "react";
import DrumItem from "./drumItem";
import './ListDrum.css';


class DrumList extends React.Component {

    render() {
        return (
            <div className="ListDrum">
                <DrumItem className="ItemDrum1" src="https://f6-zpcloud.zdn.vn/5019189054820076792/b35a44564261853fdc70.jpg" name="1" />
                <DrumItem className="ItemDrum2" src="https://f7-zpcloud.zdn.vn/3009575461302567400/f3c675547263b53dec72.jpg" name="2" />
                <DrumItem className="ItemDrum3" src="https://f7-zpcloud.zdn.vn/2306653036112524303/be7d6c956ba2acfcf5b3.jpg" name="3"/>
                <DrumItem className="ItemDrum4" src="https://f6-zpcloud.zdn.vn/1288211217237084663/567cff0df83a3f64662b.jpg" name="4"/>
                <DrumItem className="ItemDrum5" src="https://f7-zpcloud.zdn.vn/8258064645009181763/60f6d37ed9491e174758.jpg" name="5"/>
                <DrumItem className="ItemDrum6" src="https://f7-zpcloud.zdn.vn/3901930279540826501/a4572dac279be0c5b98a.jpg" name="6"/>
                <DrumItem className="ItemDrum7" src="https://f6-zpcloud.zdn.vn/498052488160009106/9105498a42bd85e3dcac.jpg" name="7"/>
            </div>
        );
    }
}


export default DrumList;