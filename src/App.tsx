import { Header } from "@app/common/components/header/header";
import { MenuList } from "@app/module/menu/components/menu-list/menu-list";
import sushiMenu from "./mocks/sushi.json";
import { Footer } from "@app/common/components/footer/footer";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={sushiMenu} />
      </div>
      <Footer />
    </div>
  );
};
