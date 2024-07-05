import React from 'react';
import pizzaMenu from "@app/mocks/pizza.json"
import {MenuItem} from "@app/module/menu/components/menu-item/menu-item";

export const MenuList = () => {
    return (
        <div className="flex flex-wrap gap-10">
            {pizzaMenu.map(({image, ...sushi})=>(<MenuItem {...sushi} imagePath={'assets/sushi/' + image}/>))}
        </div>
    );
};
