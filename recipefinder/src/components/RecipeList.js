import React, {Component} from 'react';
import RecipeItem from './RecipeItem';

/* allows components to be connected to the store */
import { connect } from 'react-redux';

class RecipeList extends Component{
  render(){
    console.log('this.props', this.props)

    return(
      <div>
        {
          this.props.recipes.map((recipe, index) => {
            return(
              <RecipeItem key={index} recipe={recipe}/>
            )
          })
        }
      </div>
    )
  }
}

/*this function essentially maps the store to the props of this
component*/
function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(RecipeList)
