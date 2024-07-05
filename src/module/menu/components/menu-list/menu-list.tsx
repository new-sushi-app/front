import React, {FC} from "react";
import { MenuItem } from "@app/module/menu/components/menu-item/menu-item";
import {Sushi} from "@app/module/menu/types/sushi";

interface MenuListProps {
    items: Sushi[];
}

export const MenuList: FC<MenuListProps> = ({items}) => {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map(({ image, ...sushi }) => (
        <MenuItem
          {...sushi}
          imagePath={"assets/sushi/" + image}
          key={sushi.id}
        />
      ))}
    </div>
  );
};
