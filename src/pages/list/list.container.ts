import {Dispatch} from "redux";
import { connect } from 'react-redux';
import {ICombinedReducers} from "../../reducers/reducers";
import {ListPage, ListPageDP, ListPageSP} from "./list.page";
import {addItem, fetchItems, IAction} from "../../actions/item.actions";

function mapStateToProps(reducers: ICombinedReducers): ListPageSP {
    return {
        items: reducers.item.items,
        loading: reducers.item.loading,
        error: reducers.item.error
    }
}
function mapDispatchToProps(dispatch: Dispatch<IAction>): ListPageDP {
    return {
        fetchItems: ()=>{
            fetchItems(dispatch)
                .then(dispatch);
        },
        addItem: (title: string, content: string, image_url:string, lat:string, )=>{
            addItem(title, content, image_url , lat, )
                .then(dispatch)
        }
    }
}

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListPage);


