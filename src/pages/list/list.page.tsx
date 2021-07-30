import * as React from "react";
import "./list.css"
import {Item} from "../../domains/item";
import {history} from "../../utils/history";

export interface ListPageSP {
    items: Item[],
    loading: boolean,
    error: string
}
export interface ListPageDP {
    fetchItems: ()=>void,
    addItem: (title: string, content: string , image_url: string, lat:string)=>void
}
interface Props extends ListPageDP, ListPageSP {}

interface State {
    title: string,
    content: string,
    image_url: string,
    lat: string,

  
}
export class ListPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            image_url: "",
            lat: "", 
            
          
        };
        this.props.fetchItems();
    }

    changeTitle(event: any) {
        this.setState({
            title: event.target.value
        })
    }
    changeDescription(event: any) {
        this.setState({
            content: event.target.value
        })
    }

    changeLat(event: any) {
        this.setState({
            content: event.target.value
        })
    }
 

    addItem() {
        const {title, content, image_url, lat} = this.state
        if(!title || !content) alert("fill all the labels!");
        else {
            this.props.addItem(title, content, image_url, lat,);
            this.setState({
                title: "",
                content: "",
                image_url: "",
                lat: "",
                
                
                
            })
        }
    }
    goToItem(id: string) {
        history.push(`/item/${id}` );
    }

    render(){
        const show = !this.props.loading && !this.props.error;
        return (
            <div className="list-page">
                {this.props.loading && <div>Loading...</div> }
                {this.props.error && <div>{this.props.error}</div> }
                {show &&
                <React.Fragment>
                  <ul>
                      {this.props.items.map((item: Item, i: number)=> {
                          return <li key={i} onClick={()=>this.goToItem(item.id)}>{item.title}</li>
                      })}
                  </ul>
                  <div>
                    Add a new city:
                    <div>City name <input type="text" value={this.state.title} placeholder= "Example:Seville" onChange={this.changeTitle.bind(this)}/></div>
                    <div>Description: <input type="text" value={this.state.content} placeholder= "Write about the city" onChange={this.changeDescription.bind(this)}/></div>
                    <div>Lattitude: <input type="text" value={this.state.lat} placeholder= "..." onChange={this.changeLat.bind(this)}/></div>
                    <button onClick={this.addItem.bind(this)}>add a new city!</button>
                  </div>
                  
                </React.Fragment>

                }
            </div>
        );
    }

}