import * as React from "react";
import "./item.css"
import {Item} from "../../domains/item";
import {history} from "../../utils/history";


export interface ItemPageSP {
    item: Item,
    loading: boolean,
    error: string
}
export interface ItemPageDP {
    fetchItem: (id: string,)=>void
}
interface Props extends ItemPageDP, ItemPageSP {
    match: {
        params: {
            id: string
        }
    }
}

export class ItemPage extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.props.fetchItem(this.props.match.params.id);
    }
    goHome() {
        history.push("/" );
    }
    render(){
        const show = !this.props.loading && !this.props.error && this.props.item;
        return (
            <div className="item-page">
                {this.props.loading && <div>Loading...</div> }
                {this.props.error && <div>{this.props.error}</div> }
                {show &&
                <div>
                  
                  <div>City : {this.props.item.title}</div>
                  <div>{this.props.item.content}</div>
                  <div>Lattitude:{this.props.item.lat}</div>
                  <img
                className="citypic"
                src={this.props.item.image_url}
                alt={this.props.item.title}
              />
            </div>
                  
               
                
                }
                <button className= "button" onClick={this.goHome}>Go back!</button>
            </div>
        );
    }

}