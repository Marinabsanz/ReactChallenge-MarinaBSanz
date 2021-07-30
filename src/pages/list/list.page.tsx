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
    addItem: (title: string, content: string )=>void
}
interface Props extends ListPageDP, ListPageSP {}

interface State {
    title: string,
    content: string,

  
}
export class ListPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            
          
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


 

    addItem() {
        const {title, content} = this.state
        if(!title || !content) alert("fill all the labels!");
        else {
            this.props.addItem(title, content,);
            this.setState({
                title: "",
                content: "",
                
                
                
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
                   
                    <button onClick={this.addItem.bind(this)}>add!</button>
                  </div>
                  
                </React.Fragment>

                }
            </div>
        );
    }

}