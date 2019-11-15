import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from '../../Burger/Burger';


 class BurgerBuilder extends Component {

    state = {
        ingridients: {
            salad: 1,
            bacon: 0,
            cheese: 1,
            meat: 1
        }
    }

    handleCHange = (ingridients) => {
        console.log('hello', ingridients)
    }

     render () {
         return (
             <Aux>
                <Burger onChange={this.handleCHange} ingridients={this.state.ingridients} />
             </Aux>
         )
     }
 }

 export default BurgerBuilder