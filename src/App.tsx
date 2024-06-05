import "./App.css";
import Accordion from "./components/accordion/Acordion";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import ModalPopup from "./components/modal-popup";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopandBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-sections";
import SearchAutocomplete from "./components/search-autocomplete-withapi";
import StarRating from "./components/star-rating";
import Tictactoe from "./components/tic-tac-toe";
import Treeview from "./components/tree-view";
import { menus } from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseonClickOutside from "./components/use-outside-click/test";
import WindowResizeTest from "./components/use-window-resize/test";
import WeatherPage from "./components/weather-app";



function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <LoadMoreData /> */}
      {/* <Treeview menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator /> */}
      {/* <ModalPopup /> */}
      {/* <GithubFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <Tictactoe /> */}
      {/* <FeatureFlagGlobalState /> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseonClickOutside /> */}
      {/* <WindowResizeTest /> */}
      {/* <ScrollToTopandBottom /> */}
      {/* <ScrollToSection /> */}
      {/* <WeatherPage /> */}
    </div>
  );
}

export default App;
